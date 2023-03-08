// contractAddress.Token,
// TokenArtifact.abi,
// this._provider.getSigner(0)
import { ethers } from "ethers";
import { abi } from "./abi";

const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    "https://rpc.testnet.fantom.network"
  );
};

const getContract = (signer) => {
  return new ethers.Contract(
    "0xd9145CCE52D386f254917e481eB44e9943F39138",
    abi.output.abi,
    signer
  );
  // return new ethers.Contract(contractAddress, abi, provider);
};

export { getProvider, getContract };
