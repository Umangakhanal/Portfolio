import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'
export const Experience = () => {
  return <section id='experience' className={styles.container}>

    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills} >{
            skills.map((skills,id)=>{
                return (<div className={styles.skill} key={id}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skills.image)} alt={skills.name}  />
                    </div>
                    <p>{skills.name} </p>
                    {/* <p>({skills.level})</p> */}
                </div> )
            })
            }</div>
        
    </div>
  </section>
}
