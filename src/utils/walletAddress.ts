import { mnemonicToWalletKey } from "ton-crypto";
import { WalletContractV4 } from "ton";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = "donate fee attend child catalog twelve debate step buffalo giant link prosper deliver pen pony crew memory village upset donor execute grid collect eight"; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();
