still got error on transaction :

Preparing transactions:
Transaction 1: {
  to: '0xA92B7aFFC620e53b3c7cE50b9b61f6c78008EE1A',
  value: 1000000000000000n,
  gasLimit: 21000,
  maxPriorityFeePerGas: 150000,
  maxFeePerGas: 10761090807n,
  nonce: 0,
  type: 2,
  chainId: 1
}
Transaction 2: {
  to: '0x82fB20EC5C70ca75b028486722f3A202DBCAb17F',
  value: 250000000000000n,
  gasLimit: 21000,
  maxPriorityFeePerGas: 150000,
  maxFeePerGas: 10761090807n,
  nonce: 0,
  type: 2,
  chainId: 1
}
Signed Transaction 1: 0x02f8710180830249f08502816936f782520894a92b7affc620e53b3c7ce50b9b61f6c78008ee1a87038d7ea4c6800080c001a097a6b67d598713d872434ff66b2f3b35a3d5c36c70491201e8eb7fe3c8b5c071a044b770ff09d362844e05040bf1f14f72a51ce7ab46f94060d32b7e4c78fedf4b
Signed Transaction 2: 0x02f8700180830249f08502816936f78252089482fb20ec5c70ca75b028486722f3a202dbcab17f86e35fa931a00080c001a01cade18c7588350a31bdadda5e86a0be4aff56b2419d43d8cd33443bdee575a0a04695e785b54c89f086a99bf1b3a063db577c14a3705f1adb1c3ce04ef4f1ab1f
simulation success : {
  bundleGasPrice: 150000n,
  bundleHash: '0xc0f42d5276f6550fbf28e076b57328894b80d55b4e51a538b5eaa567567582e0',
  coinbaseDiff: 6300000000n,
  ethSentToCoinbase: 0n,
  gasFees: 6300000000n,
  results: [
    {
      txHash: '0x213eaa6d6e0fe09484e8fc6fcb6c3858856dd98632eafd7b7e71ac9cffbb0e67',
      gasUsed: 21000,
      gasPrice: '150000',
      gasFees: '3150000000',
      fromAddress: '0xB1f971d61c2DCf6E6E18614B2354B9c7Af64Cb08',
      toAddress: '0xA92B7aFFC620e53b3c7cE50b9b61f6c78008EE1A',
      coinbaseDiff: '3150000000',
      ethSentToCoinbase: '0',
      value: '0x'
    },
    {
      txHash: '0x5dda6a9b7531e0752af5ebef1aebd3fa83ca96bb0c7f5f5ef2bf2eede74acd69',
      gasUsed: 21000,
      gasPrice: '150000',
      gasFees: '3150000000',
      fromAddress: '0xA92B7aFFC620e53b3c7cE50b9b61f6c78008EE1A',
      toAddress: '0x82fB20EC5C70ca75b028486722f3A202DBCAb17F',
      coinbaseDiff: '3150000000',
      ethSentToCoinbase: '0',
      value: '0x'
    }
  ],
  stateBlockNumber: 19952979,
  totalGasUsed: 42000,
  firstRevert: undefined
}
sending bundle into target block : 19952984
receipt =  []
simulate =  {
  bundleGasPrice: 150000n,
  bundleHash: '0xc0f42d5276f6550fbf28e076b57328894b80d55b4e51a538b5eaa567567582e0',
  coinbaseDiff: 6300000000n,
  ethSentToCoinbase: 0n,
  gasFees: 6300000000n,
  results: [
    {
      txHash: '0x213eaa6d6e0fe09484e8fc6fcb6c3858856dd98632eafd7b7e71ac9cffbb0e67',
      gasUsed: 21000,
      gasPrice: '150000',
      gasFees: '3150000000',
      fromAddress: '0xB1f971d61c2DCf6E6E18614B2354B9c7Af64Cb08',
      toAddress: '0xA92B7aFFC620e53b3c7cE50b9b61f6c78008EE1A',
      coinbaseDiff: '3150000000',
      ethSentToCoinbase: '0',
      value: '0x'
    },
    {
      txHash: '0x5dda6a9b7531e0752af5ebef1aebd3fa83ca96bb0c7f5f5ef2bf2eede74acd69',
      gasUsed: 21000,
      gasPrice: '150000',
      gasFees: '3150000000',
      fromAddress: '0xA92B7aFFC620e53b3c7cE50b9b61f6c78008EE1A',
      toAddress: '0x82fB20EC5C70ca75b028486722f3A202DBCAb17F',
      coinbaseDiff: '3150000000',
      ethSentToCoinbase: '0',
      value: '0x'
    }
  ],
  stateBlockNumber: 19952980,
  totalGasUsed: 42000,
  firstRevert: undefined
}
Bundle included in block: 1
Transaction 1 Hash: 0x213eaa6d6e0fe09484e8fc6fcb6c3858856dd98632eafd7b7e71ac9cffbb0e67
Transaction 2 Hash: 0x5dda6a9b7531e0752af5ebef1aebd3fa83ca96bb0c7f5f5ef2bf2eede74acd69
Transaction 1 Receipt: null
Transaction 2 Receipt: null