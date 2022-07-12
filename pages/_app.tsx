import "../styles/globals.css";
import type { AppProps } from "next/app";
// Web 3
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "../hooks/useMetaMask";
// GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

function getLibrary(provider: ExternalProvider) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
