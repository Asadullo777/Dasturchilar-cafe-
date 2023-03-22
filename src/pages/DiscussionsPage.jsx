import React from 'react'
import styles from "./Index.module.scss"
import { LeftBanner } from "../components/LeftBanner/LeftBanner";
import { RightBanner } from "../components/RightBanner/RightBanner";
import { Discussions } from './../components/DiscussionsPage/Discussions';

export const DiscussionsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.block}>
      <LeftBanner />
      <Discussions/>
      <RightBanner />
    </div>
  </div>
  )
}
