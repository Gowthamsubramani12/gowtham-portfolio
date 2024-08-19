import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typewriter from 'react-typewriter-effect';




export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey!</h1>
        <h1 className={styles.title}>I'm Gowtham</h1>
        <h2>
        <Typewriter
            textStyle={{ color: 'yellow', fontSize: '1.7rem' }}
            startDelay={100}
            cursorColor="#ffffff"
            multiText={[
              "DevOps Engineer",
              "Cloud Engineer",
              "Jr Solution Architect"
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            multiTextLoop
          />
        </h2>
        <p className={styles.description}>
          I am a DevOps engineer with hands-on experience in cloud computing,
          automation, CI/CD pipelines and improving system reliability and
          streamlining development processes.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/gowtham-profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
