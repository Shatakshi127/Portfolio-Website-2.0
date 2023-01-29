import React from "react";
import styles from "./About.module.css";
import TickerRow from "./TickerRow";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me!!</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          I am Shatakshi Saxena,a 2nd year student at Thapar Institute Of Engineering
          And Technology, Patiala. I am an aspiring{" "}
          <span className={styles.purple}>Software Developer</span> and an
          <span className={styles.purple}> AI/ML and Blockchain Enthusiast</span>.
           Currently I am intrested in learning more about{" "}
          <span className={styles.purple}>Web Developement</span> {" "}
          <span className={styles.purple}>App Developement</span> and{" "}
          <span className={styles.purple}>Cloud Computing</span>
          and also in <span className={styles.purple}>Web3 Technology</span>. I
          am working with <span className={styles.purple}>React.js</span> for
          Frontend developement and{" "}
          <span className={styles.purple}>Node.js</span> for Backend Web
          Developement.
        </div>
        <div className={styles.abstract}>
          <Timeline />
        </div>
      </div>
      <TickerRow className={styles.ticker} />
    </div>
  );
};

export default About;
