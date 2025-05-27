import React from "react";

import styles from "./Certificate.module.css";
import certificate from "../../data/certificate.json";

const Certificate = () => {
  return (
    <section className={styles.container} id="Certificate">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        <div>
          <section className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/certificate/html.png" alt="" />
            </div>
            <div className={styles.skill}>HTML</div>
          </section>
          <section className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/certificate/css.png" alt="" />
            </div>
            <div className={styles.skill}>CSS</div>
          </section>
          <section className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/certificate/react.png" alt="" />
            </div>
            <div className={styles.skill}>React</div>
          </section>
          <section className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/certificate/node.png" alt="" />
            </div>
            <div className={styles.skill}>Node</div>
          </section>
          <section className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/certificate/mongodb.png" alt="" />
            </div>
            <div className={styles.skill}>MongoDB</div>
          </section>
        </div>

        <ul className={styles.history}>
          {certificate.map((certificateItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div>
                  <h2>{`${certificateItem.Number}  ${certificateItem.name} `}</h2>
                  <h3>{`${certificateItem.organization}`}</h3>
                  <p>{`${certificateItem.issue_date}`}</p>
                  <p>{`${certificateItem.type}`}</p>
                  <ul>{`${certificateItem.description}`}</ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Certificate;
