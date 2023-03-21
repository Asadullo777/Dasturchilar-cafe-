import React from 'react'
import styles from './RightBanner.module.scss'


export const RightBanner = () => {
  return (
    <div className={styles.rightBanner}>
      <input className={styles.input} placeholder="Поиск ..." type="search" />
    </div>
  )
}
