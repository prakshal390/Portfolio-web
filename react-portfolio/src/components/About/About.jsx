import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src="/assets/hero/heroImage.png" alt="About Image" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>
                    Frontend Developer
                </h3>
                <p>
                    I am a frontend developer with a passion for creating user-friendly,responsive,and optimized websites and applications.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
                <h3>
                    Backend Developer
                </h3>
                <p>
                    I have experience developing fast,robust and optimized Backend systems and APIs
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3>
                    UI/UX
                </h3>
                <p>
                    I have a keen eye for design and usability,ensuring that applications are not only functional but also visually appealing and easy to use.
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;



