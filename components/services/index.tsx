import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Image from "next/image";
import { servicesData } from "@/utils/data";

const Services = () => {
  return (
    <Layout>
      <div className={styles.servicesContainer} id="services">
        <h2>Our Services</h2>
        <div className={styles.servicesWrapper}>
          {servicesData?.map((item, index) => {
            return (
              <div className={styles.servicesSingle} key={index}>
                <Image width={70} height={70} alt="icons" src={item.image} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
