import { networkType } from './auth';
import { bufferCV, standardPrincipalCV, stringAsciiCV } from "@stacks/transactions";
import { openContractCall } from '@stacks/connect';

// Sample Usage:

const appCallReadOnlyFunction = () => {

  const functionArgs = [
    standardPrincipalCV("SP8973G32B663838F3R90HD1SAEJP9GDDM3YRGMG5J0"),
    bufferCV("0x872128728"),
    stringAsciiCV("https://some-uri.gaia.hub"),
  ]

  const options = {
    contractAddress: 'SP8973G32B663838F3R90HD1SAEJP9GDDM3YRGMG5J0',
    contractName: 'some-contract',
    functionName: 'some-function',
    functionArgs,
    network: networkType(),
    appDetails: {
      name: 'Company name here',
      icon: window.location.origin + '/logo.svg',
    },
    onFinish: data => {
      // console.log('Stacks Transaction:', data.stacksTransaction);
      // console.log('Transaction ID:', data.txId);
      // console.log('Raw transaction:', data.txRaw);
    },
  };
  
  openContractCall(options);
}