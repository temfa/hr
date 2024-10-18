import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer} id="about">
        <h2>Why Choose us</h2>
        <div className={styles.aboutCont}>
          <div className={styles.aboutWrapper}>
            <Image src="/images/process.jpg" alt="Vision" width={500} height={500} />
            <div className={styles.aboutSingle}>
              <h2>Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi aliquid iste odio consequatur nemo, libero quas doloremque deleniti odit optio veniam eos
                sit possimus obcaecati cum ipsum labore ducimus.
              </p>
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutSingle}>
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi aliquid iste odio consequatur nemo, libero quas doloremque deleniti odit optio veniam eos
                sit possimus obcaecati cum ipsum labore ducimus.
              </p>
            </div>
            <Image src="/images/mid.jpg" alt="Vision" width={500} height={500} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
