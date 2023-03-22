import styles from "./Index.module.scss"

import { LeftBanner } from "../components/LeftBanner/LeftBanner";
import { RightBanner } from "../components/RightBanner/RightBanner";
import { Course } from "../components/Course/Course";

export const CoursePage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.block}>
      <LeftBanner />
      <Course/>
      <RightBanner />
    </div>
  </div>
  )
}
