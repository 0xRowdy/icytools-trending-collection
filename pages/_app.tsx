import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "../hooks/useMetaMask";

function getLibrary(provider: ExternalProvider) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
