import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:jainprakshal29@gmail.com">jainprakshal29@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/LinkedinIcon.png" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/prakshal-jain-0679a4286/">https://www.linkedin.com/in/prakshal-jain-0679a4286/</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/GithubIcon.png" alt="GitHub Icon" />
          <a href="https://github.com/prakshal390">https://github.com/prakshal390</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
