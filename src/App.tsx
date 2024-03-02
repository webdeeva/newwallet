import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectUI } from "./components/connect";
import { AddSigner } from "./components/add-signer";
import { AddMetamask } from "./components/add-metamask";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <div className="connect">
            <ConnectWallet btnTitle="Connect" />
          </div>
        </div>
      </div>
    </main>
  );
}
