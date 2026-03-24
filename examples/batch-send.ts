import { makeContractCall, listCV, tupleCV, principalCV, uintCV, AnchorMode } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

async function batchSend(recipients: {address: string; amount: number}[]) {
  const list = listCV(recipients.map(r => tupleCV({to: principalCV(r.address), amount: uintCV(r.amount)})));
  const tx = await makeContractCall({
    contractAddress: "ST...",
    contractName: "stx-tools",
    functionName: "batch-transfer",
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any,
  });
  console.log("Batch TX sent");
}
