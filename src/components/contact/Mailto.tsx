import Link from "next/link";
import * as React from "react";
import styles from "@/styles/contact/Email.module.css";

interface MailtoProps {
  email: string;
  subject?: string;
  body?: string;
}

export const Mailto = ({ email, subject, body }: MailtoProps) => {
  return (
    <div className={styles.emailWrapper}>
      <h3>For booking and information, send us an email at:</h3>
      <Link
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
      >
        <h3 className={styles.email}>{email}</h3>{" "}
      </Link>
    </div>
  );
};
