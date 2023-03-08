// contractAddress.Token,
// TokenArtifact.abi,
// this._provider.getSigner(0)
import { ethers } from "ethers";
import { abi } from "./abi"




const getProvider  = ()=>{
    return new ethers.providers.JsonRpcProvider(
        'https://rpc.testnet.fantom.network'
      );

}

const getContract = (signer)=>{
    return new ethers.Contract("0xA4FC31F2Cf0fAF1faBe1e41e6bd7009A1296d03E", abi.output.abi, signer);
    // return new ethers.Contract(contractAddress, abi, provider);

}

export { getProvider,getContract }