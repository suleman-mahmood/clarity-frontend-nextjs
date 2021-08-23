import { networkType, myStxAddress } from './auth';
import { callReadOnlyFunction, cvToJSON, /*standardPrincipalCV, uintCV*/ } from "@stacks/transactions";

export default async function appCallReadOnlyFunction(optionsProps){

  if(!optionsProps)
    return new Promise((resolve, reject) => reject("no arguments provided"));

  const options = {
    ...optionsProps,
    network: networkType(),
    senderAddress: myStxAddress(),
  };

  return callReadOnlyFunction(options)
  .then(response => {
    const responseJson = cvToJSON(response);

    return new Promise((resolve, reject) => resolve(responseJson));
  })
  .catch(e => {
    return new Promise((resolve, reject) => reject(e));
  })
}

// Sample Usage:

// appCallReadOnlyFunction({
//   contractAddress: 'SP8973G32B663838F3R90HD1SAEJP9GDDM3YRGMG5J0',
//   contractName: 'some-contract',
//   functionName: 'some-function',
//   functionArgs: [
//     // enter all your function arguments here but cast them to CV first
//     uintCV(25),
//     standardPrincipalCV("SP1A7G32B1P838F3R90HD1SAEJP9GDDM3YRGMG5J0")
//   ],
// })
// .then(value => {
//   console.log(value);
// })
// .catch(e => {
//   console.log(e.message);
// })