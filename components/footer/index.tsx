import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Link from "next/link";
import { footerLinks } from "@/utils/data";
import Linkedin from "@/svgs/linkedin";
import Twitter from "@/svgs/twitter";
import Facebook from "@/svgs/facebook";
import Instagram from "@/svgs/instagram";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Layout>
        <div className={styles.footerWrapper}>
          <div className={styles.footerCont}>
            <div className={styles.footerLinks}>
              <div>
                <h2>Company</h2>
                {footerLinks.company?.map((items, index) => {
                  return (
                    <Link href={items.link} key={index}>
                      {items.title}
                    </Link>
                  );
                })}
              </div>
              <div>
                <h2>Quick Links</h2>
                {footerLinks.quick?.map((items, index) => {
                  return (
                    <Link href={items.link} key={index}>
                      {items.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.footerCopy}>
            <p>© 2024 HR Crew</p>
            <div className={styles.socials}>
              <p>Follow us</p>
              <Linkedin />
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
            <div className={styles.newsletter}>
              <p>Join our newsletter to stay up to date on features and resources</p>
              <div>
                <input type="email" placeholder="Email" />
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
