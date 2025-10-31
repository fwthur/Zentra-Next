"use client";
import React from 'react';
import Button from '@/components/Button/Button';
import styles from './CtaSection.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const CtaSectionContent: React.FC = () => {
    return (
        <section className={styles["cta-section"]}>
            <h2>Be among the first to experience smarter finance.</h2>
            <Button as="a" href="https://app.zentra.pw/" target="_blank" rel="noopener noreferrer">Get Early Access</Button>
        </section>
    );
};

const CtaSection = withIntersectionObserver(CtaSectionContent);

export default CtaSection;
