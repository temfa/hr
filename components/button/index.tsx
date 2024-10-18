import React, { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  type: string;
  buttonText: string;
};

const Button: FC<Props> = ({ type, buttonText }) => {
  return type === "Primary" ? <button className={styles.primaryButton}>{buttonText}</button> : <button className={styles.secondaryButton}>{buttonText}</button>;
};

export default Button;
