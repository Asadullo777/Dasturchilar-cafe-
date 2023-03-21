import styles from "./Index.module.scss"

import { LeftBanner } from "../components/LeftBanner/LeftBanner";
import { RightBanner } from "../components/RightBanner/RightBanner";

export const CoursePage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.block}>
      <LeftBanner />
      Course
      <RightBanner />
    </div>
  </div>
  )
}
