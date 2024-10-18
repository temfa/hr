import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Layout from "@/layout";

const Header = () => {
  return (
    <Layout>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <h2>HR Crew</h2>
        </div>
        <div className={styles.headerNav}>
          <Link href="">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Header;
