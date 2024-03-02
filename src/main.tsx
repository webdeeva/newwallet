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

// This is the chain your dApp will work on.test
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Guapcoinx;

export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x32A35267fFf9319bE3b07A75a0A6aC053d902745",
  clientId: "48f5qXTVju3lwm55jV3tKzHIrzCWG7CTuZTIwNboEUnVtPo4uFdAUKweN9UvMWxOa_azf5ChbV_0KsOA8xPprg",
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
