import Link from "next/link";
import styles from "@/styles/navigation/NavItem.module.css";

interface NavItemProps {
  scroll: number;
  text: string;
  href: string;
  active: boolean;
}

const NavItem = ({ scroll, text, href, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <div
        className={`${styles.nav__item}  ${
          active ? "active" : scroll ? "scrolled" : ""
        }`}
      >
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default NavItem;
