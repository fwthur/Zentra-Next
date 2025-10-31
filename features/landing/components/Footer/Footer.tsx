"use client";
import React from 'react';
import styles from './Footer.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const FooterContent: React.FC = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <span className={styles["footer-logo"]}>Zentra</span>
                <span className={styles["footer-copyright"]}>© {new Date().getFullYear()} Zentra. All rights reserved.</span>
            </div>
        </footer>
    );
};

const Footer = withIntersectionObserver(FooterContent);
export default Footer;
