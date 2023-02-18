import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navigation/NavBar";
import ResponsiveCarousel, {
  CarouselItem,
} from "@/components/carousel/Carousel";

const inter = Inter({ subsets: ["latin"] });

const carouselItems: CarouselItem[] = [
  {
    src: "/images/the-band_desktop.png",
    alt: "My Eyes Wide Open",
  },
  {
    src: "/images/ausdauer2.png",
    alt: "Listen to the new EP Ausdauer",
    description: {
      text: "LISTEN TO THE NEW EP",
      title: "AUSDAUER",
    },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>My Eyes Wide Open</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Untitled.svg" />
        </Head>
        <main className={styles.main}>
          <ResponsiveCarousel carouselItems={carouselItems} />
          <h1 className={styles.title}></h1>
        </main>
      </Layout>
    </>
  );
}
