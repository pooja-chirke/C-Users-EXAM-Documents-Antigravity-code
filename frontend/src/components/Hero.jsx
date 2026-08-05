import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>

      <img
        src="/backgroundimage.png"
        alt="VJTI HOC 2027 Banner"
        className={styles.heroImage}
      />

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Learn More Button */}
      <div className={styles.content}>
        <Link to="/call-for-papers" className={styles.cta}>
          Learn More →
        </Link>
      </div>

    </section>
  );
};

export default Hero;