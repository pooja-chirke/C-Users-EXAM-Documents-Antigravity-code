import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.overlay} />
    <div className={styles.content}>
      <h1 className={styles.title}>INTERNATIONAL CONFERENCE ON HOC ARTIFICIAL, HIGH PERFORMANCE COMPUTING & QUANTUM COMPUTING</h1>
      <p className={styles.subtitle}>Join us for the premier conference in Computer Engineering</p>
      <Link to="/call-for-papers" className={styles.cta}>Learn More</Link>
    </div>
  </section>
);

export default Hero;
