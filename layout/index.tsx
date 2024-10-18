import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default Layout;
