import React from "react";
import Styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content} >
        <h1 className={Styles.title}>Hi,I'm Prakshal</h1>
        <p className={Styles.description}>
          I'm a Full Stack Developer with 6 months of experience of React and
          NodeJS.Reach out if you'd like to learn more
        </p>
        <a href="mailto:jainprakshal29@gmail.com" className={Styles.contactBtn}>Contact Me</a>
      </div>
      <img src="/assets/hero/heroImage.png" alt="Hero image of Prakshal"  className={Styles.heroImg}/>
      <div className={Styles.topBlur} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};

export default Hero;
