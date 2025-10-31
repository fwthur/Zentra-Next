"use client";
import React from 'react';
import styles from './Footer.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const FooterContent: React.FC = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-logo"]}>
                    <img src="/zentra-icon-color.svg" alt="Zentra" className={styles["footer-logo-icon"]} />
                </div>
                <span className={styles["footer-copyright"]}>© {new Date().getFullYear()} Zentra. All rights reserved.</span>
            </div>
        </footer>
    );
};

const Footer = withIntersectionObserver(FooterContent);
export default Footer;
