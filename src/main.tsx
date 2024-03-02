import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Guapcoinx } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Guapcoinx;

export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x8e0ebeb0d60dfc644e145790e1fac9b01c9a82cd",
  gasless: true,
});

export const editionDropAddress = "0xb9e2b6C6ce60d074b96DD19498dF2493f9A625B1";
export const editionDropTokenId = "0";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
