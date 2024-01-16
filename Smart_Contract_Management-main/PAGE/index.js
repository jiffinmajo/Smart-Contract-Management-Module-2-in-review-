import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import "../App.css"
import AssessmentABI from "../artifacts/contracts/Assessment.sol/Assessment.json";

const counterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function HomePage() {
  // Property Variables

  const [currentCounter, setCurrentCounter] = useState(0);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchCount(){
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        counterAddress,
        AssessmentABI.abi,
        provider
      );
      try {
        const tx = await contract.count();
        const updatedCount = await tx.count();
        setCurrentCounter(updatedCount);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Fetches the current value store in greeting
  async function increaseCounter() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        counterAddress,
        AssessmentABI.abi,
        signer
      );
      try {
        const tx = await contract.increaseCount();
        await tx.wait();
        const updatedCount = await contract.count();
        setCurrentCounter(updatedCount);
        fetchCount();
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function decreaseCounter() {  
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        counterAddress,
        AssessmentABI.abi,
        signer
      );
  
      try {
        const tx = await contract.decreaseCount();
        await tx.wait();
        const updatedCount = await contract.count();
        setCurrentCounter(updatedCount);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  
  
  

  return (
    <div className="App" style={{
      backgroundColor:"green",
      display:"flex",
      alignItems:"center",
      justifyContent: "center",
      height:"100vh",
      maxHeight: "100vh",
    }}>
      <div className="App-header">
        {/* DESCRIPTION  */}
        <div className="description">
          <h1>Metacrafter</h1>
          <h3>Project-2</h3>
          <h3>Smart Contract Management-ETH-AVX</h3>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={increaseCounter} style={{ 
            padding:"10px",
            marginBottom:"5px",
            marginRight:"5px",
            color:"black"
            }}>
            Increase Counter
          </button>
          <button onClick={decreaseCounter} style={{ 
            backgroundColor: "black",
            padding:"10px",
            marginBottom:"5px",
            marginRight:"5px" ,
            color:"white"
            }}>
            Decrease Counter
          </button>
        </div>
        {/* Current Value stored on Blockchain */}
        <h2 className="greeting" style={{
          padding:"20px",
          backgroundColor: "pink",
          border: "2px solid gray",
        }}>Coun: {currentCounter}</h2>
      </div>
    </div>
  );
}
