import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navigation/NavBar";

const inter = Inter({ subsets: ["latin"] });

const description = `Power trio from the Milan underground. Loud jazz for the present times.`;

const personnell = `Giovanni Maiocchi - Guitar and compositions
Fabrizio Carriero - Drums
Antonio Maiocchi - Bass`;

const description2 = `With their new EP - AUSDAUER, they are poised to make a significant statement on the jazz and rock scene. Subscribe to the newsletter to be informed about concerts of My Eyes Wide Open near you!
`;

const image = {
  src: "/images/memo.png",
  alt: "MY EYES WIDE OPEN",
};

export default function Band() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>The Band</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Untitled.svg" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>The Band</h1>
          <p>{description}</p>
          <br />
          <p style={{ display: "flex", flexDirection: "column" }}>
            {personnell}
          </p>

          <br />
          <p>{description2}</p>
        </main>
        <div className={styles.theBandImage}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Layout>
    </>
  );
}
