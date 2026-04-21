import type { NextPage } from "next";
import Head from "next/head";        

// Use the NextPage type for the Home component
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mel's Portfolio</title>
      </Head>

        <h1 className="p-10 text-red-500">Woooooooooooooooooo!!!</h1>
        <p className="p-10">Welcome to my portfolio!</p>
    </div>
  );
};

export default Home;