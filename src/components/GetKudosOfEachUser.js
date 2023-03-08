import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "./web3/abi";
import { useSelector } from "react-redux";
import { skills, walladd } from "./slice/userDataSlice";

const GetKudosOfEachUser = () => {
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  const userwalletadd = useSelector(walladd);
  const userSkills = useSelector(skills);
  //console.log(userSkills);
  let bytes32Strings = [];
  if (userSkills.length > 0) {
    bytes32Strings = userSkills.map((skill) => {
      return ethers.utils.formatBytes32String(skill.skill.toLowerCase());
    });
  }

  let updateEther = () => {
    let temp = new ethers.providers.Web3Provider(window.ethereum);
    console.log(window.ethereum);
    setProvider(temp);
    let signer = temp.getSigner();
    setSigner(signer);
    let KudosContract = new ethers.Contract(
      "0xd9145CCE52D386f254917e481eB44e9943F39138",
      abi,
      signer
    );
    setContract(KudosContract);
  };
  useEffect(() => {
    connect();
  }, []);

  let connect = async () => {
    if (window.ethereum) {
      let [accounts, dd] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts);
      console.log(account, dd);
      updateEther();
    }
  };

  const handleSubmit = () => {
    contract
      .getCertainKudos(userwalletadd, bytes32Strings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (contract !== null) {
    handleSubmit();
  }

  return <div>GetKudosOfEachUser</div>;
};

export default GetKudosOfEachUser;
