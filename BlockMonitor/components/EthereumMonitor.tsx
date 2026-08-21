"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function EthereumMonitor() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [blocks, setBlocks] = useState<number[]>([]);
  const [status, setStatus] = useState("Disconnected");

  // =========================
  // MetaMask
  // =========================

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      setStatus("Connecting MetaMask...");

      const provider = new ethers.BrowserProvider(
        window.ethereum
      );

      const accounts = await provider.send(
        "eth_requestAccounts",
        []
      );

      const address = accounts[0];

      setAccount(address);

      const balanceWei = await provider.getBalance(address);

      setBalance(ethers.formatEther(balanceWei));

      setStatus("MetaMask Connected");
    } catch (error) {
      console.error(error);
      setStatus("MetaMask connection failed");
    }
  }

  // =========================
  // Ethereum HTTP RPC
  // =========================

  useEffect(() => {
    const rpcUrl =
      process.env.NEXT_PUBLIC_ETH_RPC_URL;

    if (!rpcUrl) {
      console.error(
        "NEXT_PUBLIC_ETH_RPC_URL is missing"
      );

      setStatus("RPC URL missing");

      return;
    }

    const provider = new ethers.JsonRpcProvider(
      rpcUrl
    );

    let lastBlock: number | null = null;

    const checkBlock = async () => {
      try {
        const currentBlock =
          await provider.getBlockNumber();

        if (lastBlock === null) {
          lastBlock = currentBlock;

          setBlockNumber(currentBlock);

          setBlocks([currentBlock]);

          setStatus("Ethereum RPC Connected");

          console.log(
            "Current block:",
            currentBlock
          );

          return;
        }

        if (currentBlock > lastBlock) {
          for (
            let block = lastBlock + 1;
            block <= currentBlock;
            block++
          ) {
            console.log(
              "New block:",
              block
            );

            setBlocks((previous) =>
              [block, ...previous].slice(0, 20)
            );
          }

          lastBlock = currentBlock;

          setBlockNumber(currentBlock);
        }
      } catch (error) {
        console.error(
          "RPC error:",
          error
        );

        setStatus("Ethereum RPC error");
      }
    };

    checkBlock();

    // Check every 2 seconds
    const interval = setInterval(
      checkBlock,
      2000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  // =========================
  // UI
  // =========================

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-3xl font-bold">
          Ethereum Block Monitor
        </h1>

        {/* MetaMask */}

        <div className="mb-6 rounded-lg border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            MetaMask
          </h2>

          <button
            onClick={connectWallet}
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Connect MetaMask
          </button>

          <div className="mt-4 space-y-2">

            <p>
              <strong>Status:</strong>{" "}
              {status}
            </p>

            <p className="break-all">
              <strong>Wallet:</strong>{" "}
              {account || "Not connected"}
            </p>

            <p>
              <strong>Balance:</strong>{" "}
              {balance} ETH
            </p>

          </div>
        </div>

        {/* Blocks */}

        <div className="rounded-lg border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Ethereum Blocks
          </h2>

          <p className="text-sm text-gray-500">
            Latest Block
          </p>

          <p className="mb-6 text-4xl font-bold">
            {blockNumber ?? "Waiting..."}
          </p>

          <h3 className="mb-3 font-semibold">
            Recent Blocks
          </h3>

          <div className="space-y-2">

            {blocks.map((block) => (
              <div
                key={block}
                className="rounded border p-3 font-mono"
              >
                New Block: {block}
              </div>
            ))}

          </div>

        </div>
      </div>
    </main>
  );
}
