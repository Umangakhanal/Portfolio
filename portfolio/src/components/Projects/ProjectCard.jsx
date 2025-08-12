import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from './ProjectCard.module.css'
export const ProjectCard = ({
  project: { title, image, description, skills, demo, source_code },
}) => {
  const [expand, setExpand]=useState(false);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={`${styles.description} ${expand? styles.expand:""}`}>{description} </p>
      {description.split("").length>20&&(<button className={styles.readMoreBtn} onClick={()=> setExpand(!expand)}>
        {expand? "Read Less":"Read More..."}
      </button>)}
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>Demo</a>
        <a className={styles.link} href={source_code}>Source</a>
      </div>
    </div>
  );
};
