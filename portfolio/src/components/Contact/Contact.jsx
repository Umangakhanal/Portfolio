import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contact me anytime!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img className={styles.image}  src={getImageUrl("/Mail_(iOS).png")} alt="Mail" />
                <a href="mailto:umangakhanal789@gmail.com">umangakhanal789@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img  className={styles.image} src={getImageUrl("/linkedin-original.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/umanga-khanal/">linkedin.com/in/umanga-khanal</a>
            </li>
            <li className={styles.link}>
                <img  className={styles.image} src={getImageUrl("/github-original.png")} alt="Github" />
                <a href="https://github.com/Umanga01223">github.com/Umanga01223</a>
            </li>
        </ul>
    </footer>
  )
}
