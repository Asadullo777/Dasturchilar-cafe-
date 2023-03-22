import React from 'react'
import styles from "./CenterBanner.module.scss"

export const CenterBanner = () => {
  return (
    <div>
      <h1>Блоги</h1>
      <div className={styles.card}>
          <img className={styles.card_img}  src="/image.png" alt="" />

          <div className={styles.card_base}>
              <div className={styles.card_contact}>
                <img   src="/user.svg" alt="" />
                <div className={styles.card_contact_user}>Ismailov Yakhyo</div>
              </div>
           
          <div className={styles.time}>23.12.2021</div>

          </div>
          <div className={styles.card_subtxt}>
          Best design 🎨 resources websites every developer 💻 should bookmark🔖 
          </div>

         
      </div>
    </div>
  )
}
