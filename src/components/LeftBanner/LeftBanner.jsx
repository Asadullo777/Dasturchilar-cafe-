import React from "react";
import { Link } from "react-router-dom";
import styles from "./LeftBanner.module.scss";

export const LeftBanner = () => {
  return (
    <div className={styles.LeftBanner}>
      <Link to="/">
        {" "}
        <img src="Logo.svg" alt="Logo" />{" "}
      </Link>

      <ul className={styles.menu}>
        <li className={styles.menu_link}>
          <img src="/blog.svg" alt="blog" />{" "}
          <Link className={styles.menu_txt} to="/">
            Блог
          </Link>
        </li>
        <li className={styles.menu_link}>
          <img src="/discussion.svg" alt="discussion" />{" "}
          <Link className={styles.menu_txt} to="/discussions">
            Обсуждения
          </Link>
        </li>
        <li className={styles.menu_link}>
          <img src="/course.svg" alt="course" />
          <Link className={styles.menu_txt} to="/course">
            Курсы
          </Link>
        </li>
      </ul>
      <div className={styles.btnDiv}>
        <button className={styles.btn}>Поддержка проекта</button>
      </div>
    </div>
  );
};
