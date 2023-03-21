import React from "react";
import styles from "./Index.module.scss"
import { CenterBanner } from "../components/CenterBanner/CenterBanner";
import { LeftBanner } from "../components/LeftBanner/LeftBanner";
import { RightBanner } from "../components/RightBanner/RightBanner";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <LeftBanner />
        <CenterBanner />
        <RightBanner />
      </div>
    </div>
  );
};
