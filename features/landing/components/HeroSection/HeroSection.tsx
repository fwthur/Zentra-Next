"use client";
import React from 'react';
import Button from '@/components/Button/Button';
import styles from './HeroSection.module.css';

const HeroDashboardMockup = () => (
    <div className={styles["hero-dashboard-bg"]}>
        <div className={styles["bg-col-1"]}>
            <div className={`${styles["bg-card"]} ${styles["bg-card-sm"]}`}></div>
            <div className={`${styles["bg-card"]} ${styles["bg-card-lg"]}`}></div>
        </div>
        <div className={styles["bg-col-2"]}>
            <div className={`${styles["bg-card"]} ${styles["bg-card-graph"]}`}>
                 <div className={styles["bg-graph-line"]}>
                    <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path d="M0,80 Q50,20 100,50 T200,60 T300,30"></path>
                    </svg>
                </div>
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <div className={styles["bg-card"]} style={{ flex: 1, height: '100px'}}></div>
                <div className={styles["bg-card"]} style={{ flex: 1, height: '100px'}}></div>
            </div>
        </div>
    </div>
);


const HeroSection = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-content"]}>
        <h1>Where does your money go?</h1>
        <p>
          Zentra helps you track, grow, and understand your money — across every account.
        </p>
        <Button as="a" href="https://app.zentra.pw/" target="_blank" rel="noopener noreferrer">Get Early Access</Button>
      </div>
      <HeroDashboardMockup />
    </section>
  );
};

export default HeroSection;
