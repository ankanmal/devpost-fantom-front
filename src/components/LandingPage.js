import React, { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import {
  loginStatus,
  loginUser,
  updateWalletAddress,
  userId,
} from "./slice/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const authenticateAndContinue = () => {
//     console.log("btn clicked");
//     //redirect("/main");
//     navigate("/main");
//   };
//   const [haveMetamask, sethaveMetamask] = useState(false);

//   useEffect(() => {
//     const { ethereum } = window;
//     const checkMetamaskAvailability = async () => {
//       if (!ethereum) {
//         sethaveMetamask(false);
//       }
//       sethaveMetamask(true);
//     };
//     checkMetamaskAvailability();
//   }, []);

//   return (
//     <>
//       <div className="flex justify-center mt-4">
//         <div>
//           <button
//             className="bg-blue-700 text-white p-4 border rounded-full font-medium "
//             onClick={() => authenticateAndContinue()}
//           >
//             Connect Your Wallet
//           </button>
//           {haveMetamask ? (
//             <p>Metamask is Installed</p>
//           ) : (
//             <p>Please Install Metamask</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

const LandingPage = () => {
  const [haveMetamask, sethaveMetamask] = useState(false);
  const [accountAddress, setAccountAddress] = useState(null);
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const { ethereum } = window;
  const walletadd = useSelector((state) => state.userData.walletAdd);
  const userIdState = useSelector(userId);
  console.log(userIdState);
  console.log(walletadd);

  const dispatch = useDispatch();

  useEffect(() => {
    const { ethereum } = window;

    const checkMetamaskAvailability = async () => {
      if (ethereum) {
        sethaveMetamask(true);
      }
      //sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWalletandSingUp = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);

      dispatch(updateWalletAddress(accounts[0]));
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
    if (walletadd !== null) {
      navigate("/givedetails");
    }
  };
  const connectWalletandLogin = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);

      dispatch(updateWalletAddress(accounts[0]));
      dispatch(loginUser(accounts[0]));
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    if (userIdState !== null) {
      navigate("/main");
    }
  }, [userIdState]);

  return (
    <div className="App">
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Wallet Address:{walletadd}</h3>
                </div>
              </div>
            ) : (
              <p>Logo is here</p>
            )}
            {isConnected ? (
              <p className="info">🎉 Connected Successfully</p>
            ) : (
              <>
                <button className="btn" onClick={connectWalletandSingUp}>
                  SignUp With Wallet
                </button>
                <button className="btn" onClick={connectWalletandLogin}>
                  Login With Wallet
                </button>
              </>
            )}
          </div>
        ) : (
          <p>Please Install MetaMask</p>
        )}
      </header>
    </div>
  );
};

export default LandingPage;
