import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const apps = [
  "Coinbase",
  "Optimism",
  "Arbitrum",
  "Gitcoin",
  "Coinbase",
  "Optimism",
  "Arbitrum",
  "Gitcoin",
];
const logoMap = {
  coinbase: "https://avatars.githubusercontent.com/u/1885080",
  optimism: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
  arbitrum: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
  gitcoin: "https://cryptologos.cc/logos/gitcoin-gtc-logo.png",
  coinbase: "https://avatars.githubusercontent.com/u/1885080",
  optimism: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
  arbitrum: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
  gitcoin: "https://cryptologos.cc/logos/gitcoin-gtc-logo.png",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-15">
        <h1 className="text-2xl font-bold">Web3 Apps</h1>
        <ConnectButton />
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {apps.map((app, i) => {
          const key = app.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-zinc-900 rounded-2xl"
            >
              <Image
                src={logoMap[key]}
                alt={app}
                width={56}
                height={56}
                className="mb-3 rounded-full"
              />
              <p className="text-md">{app}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
