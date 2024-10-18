import React from "react";
import styles from "./styles.module.css";
import Header from "../header";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <Header />
      <div className={styles.bannerContent}>
        <h2>
          Inspiring leadership <span>innovation.</span>
        </h2>
        <p>Hire. Train. Retain.</p>
        <Link href="">Read More</Link>
      </div>
    </div>
  );
};

export default Banner;
