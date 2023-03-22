import React from "react";
import styles from "./Course.module.scss";

export const Course = () => {
  return (
    <div className={styles.blocks}>
      <div className={styles.course}>
        <img className={styles.course_img} src="/django.png" alt="" />

        <div className={styles.course_txt}>The Ultimate Django Series</div>

        <div className={styles.course_subtxt}>
          Master the Fundamentals of Web Development with Python and Django 3.2+
        </div>

        <div className={styles.course_base}>
          <div className={styles.course_base_star}>
            <img src="/star.svg" alt="star" /> 4,5
            <span>(4 500)</span>
          </div>
          <div className={styles.course_base_people}>
            <img src="/people.svg" alt="people" /> 16 302
          </div>
        </div>
      </div>
      {/* ///////
      /////////
      ////// */}
        <div className={styles.course}>
        <img className={styles.course_img} src="/django.png" alt="" />

        <div className={styles.course_txt}>The Ultimate Django Series</div>

        <div className={styles.course_subtxt}>
          Master the Fundamentals of Web Development with Python and Django 3.2+
        </div>

        <div className={styles.course_base}>
          <div className={styles.course_base_star}>
            <img src="/star.svg" alt="star" /> 4,5
            <span>(4 500)</span>
          </div>
          <div className={styles.course_base_people}>
            <img src="/people.svg" alt="people" /> 16 302
          </div>
        </div>
      </div>  <div className={styles.course}>
        <img className={styles.course_img} src="/django.png" alt="" />

        <div className={styles.course_txt}>The Ultimate Django Series</div>

        <div className={styles.course_subtxt}>
          Master the Fundamentals of Web Development with Python and Django 3.2+
        </div>

        <div className={styles.course_base}>
          <div className={styles.course_base_star}>
            <img src="/star.svg" alt="star" /> 4,5
            <span>(4 500)</span>
          </div>
          <div className={styles.course_base_people}>
            <img src="/people.svg" alt="people" /> 16 302
          </div>
        </div>
      </div>  <div className={styles.course}>
        <img className={styles.course_img} src="/django.png" alt="" />

        <div className={styles.course_txt}>The Ultimate Django Series</div>

        <div className={styles.course_subtxt}>
          Master the Fundamentals of Web Development with Python and Django 3.2+
        </div>

        <div className={styles.course_base}>
          <div className={styles.course_base_star}>
            <img src="/star.svg" alt="star" /> 4,5
            <span>(4 500)</span>
          </div>
          <div className={styles.course_base_people}>
            <img src="/people.svg" alt="people" /> 16 302
          </div>
        </div>
      </div>
    </div>
  );
};
