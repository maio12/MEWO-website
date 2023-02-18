import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navigation/NavBar";
import { NewsLetterSignUpForm } from "@/components/contact/Form";
import { Mailto } from "@/components/contact/Mailto";
import { SocialLinks } from "@/components/contact/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const socialMedia = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@gioblast75",
    icon: "/images/youtube.svg",
  },
  {
    name: "SoundCloud",
    link: "https://soundcloud.com/my_eyes_wide_open",
    icon: "/images/soundcloud.svg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/MyEyesWideOpen",
    icon: "/images/facebook.svg",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <Layout>
        <Head>
          <title>Contact</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Untitled.svg" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact</h1>
          <Mailto
            email={"info@myeyeswideopen.it"}
            subject={"Inquiry for MEWO"}
          />
          <SocialLinks socialMedia={socialMedia} />
          <NewsLetterSignUpForm />
        </main>
      </Layout>
    </>
  );
}
