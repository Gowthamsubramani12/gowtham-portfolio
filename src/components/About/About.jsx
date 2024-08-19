import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Landscape-img.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Objective</h3>
              <br />
              <p>
                As an experienced DevOps Engineer with a background in
                Electronics and Communication Engineering, I aim to leverage my
                expertise in cloud technologies, infrastructure automation, and
                cybersecurity to drive innovation and efficiency in software
                delivery processes. My objective is to: Utilize my deep
                knowledge of AWS services, containerization technologies, and
                CI/CD pipelines to architect and implement scalable, secure, and
                resilient cloud solutions. By applying my skills in Python,
                Shell scripting, and infrastructure as code practices, I seek to
                optimize system performance, enhance automation, and streamline
                deployment processes. With a strong focus on cybersecurity and a
                passion for emerging technologies, I am committed to
                continuously improving DevOps practices, fostering cross-team
                collaboration, and delivering high-quality, secure software
                products that meet business objectives and exceed
                user expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
