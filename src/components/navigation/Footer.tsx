import Link from "next/link";
import * as React from "react";
import styles from "@/styles/contact/Footer.module.css";
import { SocialIcons } from "../contact/SocialIcons";

const socialMedia = [
  { name: "YouTube", link: "/", icon: "/images/youtube.svg" },
  { name: "SoundCloud", link: "/", icon: "/images/soundcloud.svg" },
  { name: "Facebook", link: "/", icon: "/images/facebook.svg" },
];

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <SocialIcons socialMedia={socialMedia} />
      <div className={styles.footerWrapper}>
        <h3 className={styles.footerText}>
          Copyright © 2023 My Eyes Wide Open. All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};
