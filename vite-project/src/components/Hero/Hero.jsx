import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Umanga</h1>
        <p className={styles.description}>
          I am a frontend learner with basic knowledge, working to improve my
          skills. I enjoy exploring web development and building small projects
          to learn more.
        </p>
        <a className={styles.contactBtn} href="mailto:umangakhanal123@gmail.com">Contact Me</a>
      </div>
      <img className={styles.profileImg} src={getImageUrl("/profile.png")} alt="profile image" />

    </section>
  );
};
