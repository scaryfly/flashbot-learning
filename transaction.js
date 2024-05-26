const { ethers } = require("ethers");
const { FlashbotsBundleProvider } = require("@flashbots/ethers-provider-bundle");

const INFURA_PROJECT_ID = '1f65adbf486046e8bb429062bb73ec0d';
const FLASHBOTS_ENDPOINT = 'https://relay.flashbots.net';

// Replace with your Ethereum private keys
const PRIVATE_KEY_SENDER = 'f510833407c616280640ddae0a5b9a3b0cd935cac2a59d21dca97bba77a6db3e';
const PRIVATE_KEY_MIDDLE = '791014ecba6e92448e1bc4d4cf3661444bf9b855ceb6034306f2f5fffaa5c000';

// Initialize providers and wallets
const provider = new ethers.InfuraProvider("homestead", INFURA_PROJECT_ID);
const authSigner = ethers.Wallet.createRandom(); // Flashbots authentication
const walletSender = new ethers.Wallet(PRIVATE_KEY_SENDER, provider);
const walletMiddle = new ethers.Wallet(PRIVATE_KEY_MIDDLE, provider);

async function main() {
    const flashbotsProvider = await FlashbotsBundleProvider.create(provider, authSigner, FLASHBOTS_ENDPOINT);

    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber)

    // Prepare transactions    
    const tx1 = {
        to: walletMiddle.address,
        value: ethers.parseEther("0.001"),
        gasLimit: 21000,
        maxPriorityFeePerGas: 150000,
        maxFeePerGas: block.baseFeePerGas * 3n,
        nonce: await walletSender.getNonce(),
        type: 2, // EIP-1559 transaction type
        chainId: 1 // Mainnet chain ID
    };

    const tx2 = {
        to: '0x82fB20EC5C70ca75b028486722f3A202DBCAb17F',
        value: ethers.parseEther("0.00025"),
        gasLimit: 21000,
        maxPriorityFeePerGas: 150000,
        maxFeePerGas: block.baseFeePerGas * 3n,
        nonce: await walletMiddle.getNonce(),
        type: 2, // EIP-1559 transaction type
        chainId: 1 // Mainnet chain ID
    };
    
    console.log("Preparing transactions:");
    console.log("Transaction 1:", tx1);
    console.log("Transaction 2:", tx2);

    // Sign transactions
    const signedTx1 = await walletSender.signTransaction(tx1);
    const signedTx2 = await walletMiddle.signTransaction(tx2);
    
    console.log("Signed Transaction 1:", signedTx1);
    console.log("Signed Transaction 2:", signedTx2);

    // Create a bundle with both transactions
    const bundleTransactions = [
        { signedTransaction: signedTx1 },
        { signedTransaction: signedTx2 }
    ];
    const signedTransactions = await flashbotsProvider.signBundle(bundleTransactions)

    

    try {
        const simulation = await flashbotsProvider.simulate(signedTransactions, blockNumber);
        console.log('simulation success :', simulation);
    } catch (error) {
        console.log('simulation error :', error);
        return
    }

    const target_block_number = blockNumber + 5;

    console.log("sending bundle into target block :", target_block_number);

    // Send bundle
    const signedBundle = await flashbotsProvider.sendBundle(
        bundleTransactions,
        target_block_number // Target the next block
    );

    if ('error' in signedBundle) {
        console.error('Bundle error:', signedBundle.error.message);
        return;
    }

    const rc = await signedBundle.receipts();
    console.log('receipt = ', rc);

    
    const simulate = await signedBundle.simulate();
    console.log('simulate = ', simulate);

    const receipt = await signedBundle.wait();
    if (receipt === 0) {
        console.log('Bundle was not included');
    } else {
        console.log('Bundle included in block:', receipt);

        // Get the transaction hashes
        const txHash1 = ethers.keccak256(signedTx1);
        const txHash2 = ethers.keccak256(signedTx2);

        console.log("Transaction 1 Hash:", txHash1);
        console.log("Transaction 2 Hash:", txHash2);

        // Verify transaction success
        const txReceipt1 = await provider.getTransactionReceipt(txHash1);
        const txReceipt2 = await provider.getTransactionReceipt(txHash2);

        console.log("Transaction 1 Receipt:", txReceipt1);
        console.log("Transaction 2 Receipt:", txReceipt2);
    }
}

main().catch(console.error);
