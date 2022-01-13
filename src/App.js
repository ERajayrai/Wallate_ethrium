import { useState } from "react";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
  getMainBalance,
  getUserAddress,
} from "./actions/Web3Actions";
import "./App.css";

function App() {
  const [data, setData] = useState({
    wallet: false,
    chainId: "not found",
    address: "Unavailable",
    balance: "0",
  });

  const connectButton = async () => {
    let wallet = await checkWalletAvailable();
    let address = await getUserAddress();
    let balance = await getMainBalance();
    let chainID = await checkCorrectNetwork();

    setData({
      wallet: wallet,
      chainId: chainID,
      address: address,
      balance: balance,
    });
  };

  return (
    <div>
      <h2>Account Details: When You Connected with your wallet</h2>
      <div className="trasaction">
          <div className="sender">
            <input placeholder="Enter Sender Account Adress"/>
          </div>
          <div>
            <h4>TO:</h4>
          </div>
          <div className="recver">
            <input  placeholder="Enter reciver Adress here"/>
          </div>
        </div>
      <div className="section">
        <div className="card">
          <div className="card-section">
            <h3>Wallet available</h3>
            <p>
              <strong>{data.wallet ? "Yes" : "No"}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Address</h3>
            <p>
              <strong>{data.address}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Selected Network Chain ID</h3>

            <p>
              <strong>{data.chainId}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Main Balance</h3>
            <p>
              <strong>{parseFloat(data.balance).toFixed(3)} BNB</strong>
            </p>
          </div>
          <button onClick={connectButton}>Connect Metamask</button>
        </div>
      </div>
    </div>
  );
}

export default App;
