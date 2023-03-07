import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { ethers } from "ethers";
import { loginUser, updateWalletAddress, userId } from "./slice/userDataSlice";
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
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const { ethereum } = window;
  const walletadd = useSelector((state) => state.userData.walletAdd);
  const userIdState = useSelector(userId);

  const dispatch = useDispatch();

  useEffect(() => {
    const { ethereum } = window;

    const checkMetamaskAvailability = async () => {
      if (ethereum) {
        sethaveMetamask(true);
      }
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(updateWalletAddress(accounts[0]));
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    if (isConnected && walletadd !== null) {
      if (isSigningUp) {
        navigate("/givedetails");
      } else {
        dispatch(loginUser(walletadd));
      }
    }
  }, [navigate, isConnected, walletadd, isSigningUp, dispatch]);

  useEffect(() => {
    if (userIdState !== null) {
      navigate("/main");
    }
  }, [navigate, userIdState]);

  const handleSignUp = () => {
    setIsSigningUp(true);
    connectWallet();
  };

  const handleLogin = () => {
    setIsSigningUp(false);
    connectWallet();
  };

  return (
    <div className="App">
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Wallet Address:{walletadd}</h3>
                  <p className="info">🎉 Connected Successfully</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  className=" px-4 py-2  font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
                  onClick={handleSignUp}
                >
                  SignUp With Wallet
                </button>
                <button
                  className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
                  onClick={handleLogin}
                >
                  Login With Wallet
                </button>
              </div>
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
