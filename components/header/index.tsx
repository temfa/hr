"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Layout from "@/layout";
import Bars from "@/svgs/bars";
import Close from "@/svgs/close";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <Layout>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <h2>HR Crew</h2>
          {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
        </div>
        <div className={mobile ? `${styles.headerNav} ${styles.headerCont}` : styles.headerNav}>
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
