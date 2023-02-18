import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import { Footer } from "./navigation/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
