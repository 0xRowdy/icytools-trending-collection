import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <h1>Hello Icy Tools</h1>
    </div>
  );
};

export default Home;
