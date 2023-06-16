"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "tweets",
    url: "/tweets",
  },
];

const Navbar = () => {
  /* Get the current route */
  const currentRoute = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.logo}>
          MSR_dev
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li
              key={link.id}
              className={
                currentRoute === link.url ? styles.linkActive : styles.link
              }
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;