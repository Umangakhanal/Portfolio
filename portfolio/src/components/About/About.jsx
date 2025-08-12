import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("/Cover.png")}
          alt="Cover photo"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hello, I'm Umanga </h3>
              <p>
                Hi, I'm Umanga! I'm a passionate learner exploring the world of
                frontend development. Currently, I have a basic understanding of
                HTML, CSS, and JavaScript, and I'm also diving into the
                fundamentals of React.js. Although I'm still in the early stages
                of my journey, I am eager to expand my skills and create
                impactful, interactive web experiences. As I continue to learn
                and grow, I'm excited to challenge myself with new projects and
                opportunities in the frontend development space.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Technical Skills</h3>
              
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>React</li>
                </ul>
              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
