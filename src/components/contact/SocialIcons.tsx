import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import styles from "@/styles/contact/Email.module.css";

interface SocialIconsProps {
  socialMedia: {
    name: string;
    link: string;
    icon: string;
  }[];
}

export const SocialIcons = ({ socialMedia }: SocialIconsProps) => {
  return (
    <>
      {socialMedia.map((social) => {
        return (
          <div className={styles.socialWrapper}>
            <div className={styles.socialIcon}>
              <Link href={social.link}>
                {" "}
                <Image
                  src={social.icon}
                  height={32}
                  width={32}
                  alt={`Follow us on ${social.name} `}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
