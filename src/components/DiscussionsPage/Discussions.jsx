import React from "react";
import styles from "./Discussions.module.scss";

export const Discussions = () => {
  return (
    <div>
        <h1>Обсуждение</h1>
      <div className={styles.discussion}>
        <div className={styles.discussion_number}>
          <img
            className={styles.discussion_number_img}
            src="/number.png"
            alt=""
          />
        </div>

        <div className={styles.discussion_subtxt}>
          Best design 🎨 resources websites every developer 💻 should bookmark🔖
        </div>

        <div className={styles.discussion_base}>
          <div className={styles.discussion_contact}>
            <img src="/user.svg" alt="" />
            <div className={styles.discussion_contact_user}>
              Ismailov Yakhyo
            </div>
          </div>

          <div className={styles.time}>23.12.2021</div>
        </div>
      </div>
    </div>
  );
};
