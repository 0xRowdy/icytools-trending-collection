import type { NextPage } from "next";
import Head from "next/head";

import useMetaMask from "../hooks/useMetaMask";
import { Header } from "../components/molecules/Header/Header";
import TrendingCollections from "../components/organisms/TrendingCollections/TrendingCollections";

const Home: NextPage = () => {
  const { isActive } = useMetaMask();
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
      <main>
        {isActive ? <TrendingCollections /> : <span>Not connected</span>}
      </main>
    </div>
  );
};

export default Home;
