import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navigation/NavBar";
import { NewsLetterSignUpForm } from "@/components/contact/Form";
import { Mailto } from "@/components/contact/Mailto";
import { SocialIcons } from "@/components/contact/SocialIcons";
import { SocialLinks } from "@/components/contact/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

const socialMedia = [
  { name: "YouTube", link: "/", icon: "/images/youtube.svg" },
  { name: "SoundCloud", link: "/", icon: "/images/soundcloud.svg" },
  { name: "Facebook", link: "/", icon: "/images/facebook.svg" },
];

export default function Band() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>The Band</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>The Band</h1>
          <p>
            {
              "some description about the band Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
          </p>
        </main>
      </Layout>
    </>
  );
}
