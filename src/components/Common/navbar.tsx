import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_MENU = [
  {
    name: "Home",
    link: "/",
  },
];
interface NavItemProps {
  name: string; // Explicitly define the type of 'name'
  link: string;
}

function NavItem({ name, link }: NavItemProps) {
  return (
    <li>
      <Link className={styles.navLink} href={link}>
        {name}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <img
            className={styles.logo}
            src="/clepher-logo-black.webp"
            alt="Logo"
          />
        </div>
        <ul className={`${styles.navbarMenu} ${open ? styles.open : ""}`}>
          {NAV_MENU.map(({ name, link }) => (
            <NavItem key={name} name={name} link={link} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
