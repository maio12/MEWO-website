import ReactPlayer from "react-player";

import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navigation/NavBar";
import { MediaPieceProps, MediaPieces } from "@/components/media/MediaPiece";

const inter = Inter({ subsets: ["latin"] });

const mediaPieces: MediaPieceProps[] = [
  {
    name: "Ausdauer",
    description:
      "My Eyes Wide Open's latest EP, recorded in 2023 at Trai Studio, Inzago. ",
    description2:
      "Giovanni Maiocchi - guitar and compositions, Fabrizio Carriero: drums, Antonio Maiocchi: bass guitar",
    link: "https://soundcloud.com/my_eyes_wide_open/sets/ausdauer",
  },
  {
    name: "Speechless",
    description: "My Eyes Wide Open's second EP, recorded in 2014. ",
    description2:
      "Giovanni Maiocchi - guitar and compositions, Fabrizio Carriero: drums, Andrea Grossi: doublebass",

    link: "https://soundcloud.com/my_eyes_wide_open/sets/speechless",
  },
  {
    name: "My Eyes Wide Open",
    description: `My Eyes Wide Open's first EP, recorded in 2009.`,
    description2:
      "Giovanni Maiocchi - guitar and compositions, Fabrizio Carriero: drums, Antonio Maiocchi: bass guitar",
    link: "https://soundcloud.com/my_eyes_wide_open/sets/myeyeswideopen",
  },
  {
    name: "Promo Video",
    description:
      "Promo video featuring excerpts of songs Big Fuckin'Lizard, Off On Tuesday",
    link: "https://www.youtube.com/watch?v=2NW7zT3LJUA",
  },
];

export default function Media() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>Media</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Untitled.svg" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Media</h1>
          <MediaPieces mediaPiece={mediaPieces} />
        </main>
      </Layout>
    </>
  );
}
