import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import styles from "@/styles/contact/Email.module.css";

interface SocialLinksProps {
  socialMedia: {
    name: string;
    link: string;
    icon: string;
  }[];
}

export const SocialLinks = ({ socialMedia }: SocialLinksProps) => {
  return (
    <>
      <h3>Follow us on:</h3>
      {socialMedia.map((social) => {
        return (
          <div className={styles.socialLinksWrapper}>
            <div className={styles.socialLink}>
              <Link href={social.link}>
                <h3>{social.name}</h3>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
