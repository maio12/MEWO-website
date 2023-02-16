import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "@/styles/navigation/NavBar.module.css";

const MENU_LIST = [
  { text: "The Band", href: "/the-band" },
  { text: "Media", href: "/media" },
  { text: "Contact", href: "/contact" },
];

const Hamburger = () => {
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={styles.navWrapper}>
      <nav
        className={`${clientWindowHeight && styles["scrolled"]} ${styles.nav}`}
      >
        <Link href={"/"}>
          <h1 className={styles.logo}>MEWO</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`${
            navActive ? styles["active"] : styles["no-animation"]
          } ${styles["nav__menu-bar"]}`}
        >
          <Hamburger />
        </div>
        <div
          className={`${navActive ? styles["active"] : ""} ${
            styles["nav__menu-list"]
          }`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              className={styles.nav__link}
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem
                scroll={clientWindowHeight}
                active={activeIdx === idx}
                {...menu}
              />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
