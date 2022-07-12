import type { NextPage } from "next";
import Head from "next/head";

import useMetaMask from "../hooks/useMetaMask";
import { Header } from "../components/molecules/Header/Header";
import TrendingCollections from "../components/organisms/TrendingCollections/TrendingCollections";

const Home: NextPage = () => {
  const { connect, disconnect, isActive, account } = useMetaMask();
  console.log("isActive", isActive);
  return (
    <div>
      <Head>
        <title>Icy Tools Trending Collections</title>
        <meta
          name="description"
          content="Trending collections from the icy tools API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
      <button
        onClick={connect}
        className="px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
      >
        Connect to MetaMask
      </button>
      {isActive ? (
        <span>Connected with: {account}</span>
      ) : (
        <span>Not connected</span>
      )}
      <TrendingCollections />
    </div>
  );
};

export default Home;
