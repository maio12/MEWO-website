import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
