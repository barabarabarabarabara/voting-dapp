import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "./VotingABI.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [account, setAccount] = useState("");
  const [proposals, setProposals] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) return alert("Install MetaMask");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);

      const voting = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);
      setContract(voting);

      const total = await voting.totalProposals();
      let temp = [];
      for (let i = 0; i < total; i++) {
        const proposal = await voting.proposals(i);
        temp.push({ id: i, desc: proposal.description, votes: proposal.voteCount });
      }
      setProposals(temp);
    };
    init();
  }, []);

  const handleVote = async (index) => {
    try {
      const tx = await contract.vote(index);
      await tx.wait();
      alert("Voted successfully!");
    } catch (e) {
      alert("Error voting or already voted");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Voting DApp</h2>
      <p>Connected wallet: {account}</p>
      <ul>
        {proposals.map((p) => (
          <li key={p.id}>
            {p.desc} — Votes: {p.votes.toString()}{" "}
            <button onClick={() => handleVote(p.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
