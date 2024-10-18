import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";

const Services = () => {
  const data = [
    {
      title: "Recruitment and Talent Acquisition",
      text: "Finding the right talent is essential for any organization’s growth. HR companies provide end-to-end recruitment services, from posting job openings to conducting interviews and onboarding new hires. Their focus is on sourcing qualified candidates, improving the hiring process, and building a strong workforce that aligns with company culture and goals.",
    },
    {
      title: "Employee Training and Development",
      text: "Employee development is key to improving productivity and job satisfaction. HR firms offer tailored training programs designed to enhance employee skills, leadership capabilities, and overall professional growth. They ensure employees have the tools to advance in their careers while keeping the company competitive.",
    },
    {
      title: "Payroll and Benefits Administration",
      text: "Managing employee compensation can be complex. HR services help streamline payroll processes, ensuring timely payments and accurate benefits administration. They handle everything from salaries, bonuses, and incentives to health insurance and retirement plans, ensuring compliance with tax laws and regulations.",
    },
    {
      title: "HR Compliance and Legal Advisory",
      text: "Compliance with labor laws and regulations is crucial for avoiding legal issues. HR companies provide expert guidance on policies related to workplace safety, employee relations, and labor laws. They help businesses navigate complex legal frameworks, ensuring that all HR practices are in line with local and national regulations, minimizing legal risks.",
    },
  ];
  return (
    <Layout>
      <div className={styles.servicesContainer}>
        <h2>Our Services</h2>
        <div className={styles.servicesWrapper}>
          {data?.map((item, index) => {
            return (
              <div className={styles.servicesSingle} key={index}>
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
