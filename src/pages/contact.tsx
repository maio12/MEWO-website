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

export default function Contact() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>Contact</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact</h1>
          <Mailto
            email={"antonio.maiocchi12@gmail.com"}
            subject={"Inquiry for MEWO"}
          />
          <SocialLinks socialMedia={socialMedia} />
          <SocialIcons socialMedia={socialMedia} />
          <NewsLetterSignUpForm />
        </main>
      </Layout>
    </>
  );
}
