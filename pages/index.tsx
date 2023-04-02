import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Template CLS</title>
        <meta name="description" content="Next Template CLS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> Template
        </h1>
      </main>

      <footer className={styles.footer}>
        Made by{" "}
        <span>
          <Image
            src="/assets/images/CLS.png"
            alt="Columbus Logo"
            width={80}
            height={60}
          />
        </span>
      </footer>
    </div>
  );
};

export default Home;
