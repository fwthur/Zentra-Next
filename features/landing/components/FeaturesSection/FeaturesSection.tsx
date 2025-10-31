"use client";
import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeaturesSection.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const icons = {
  ai: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M17.657 17.657l.707.707M6.343 6.343l-.707-.707" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
  ),
  multiAccount: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  netWorth: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  insights: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const features = [
  {
    icon: icons.ai,
    title: 'AI Finance Assistant',
    description: 'A smart chatbot that helps you analyze spending habits and create personalized financial plans.',
  },
  {
    icon: icons.multiAccount,
    title: 'Multi-Account Tracking',
    description: 'Supports manual tracking across multiple banks, e-wallets, cash, and even crypto assets.',
  },
  {
    icon: icons.netWorth,
    title: 'Net Worth Overview',
    description: 'Visualize your assets, liabilities, and overall financial growth with our clear dashboard.',
  },
  {
    icon: icons.insights,
    title: 'Smart Insights',
    description: 'Get AI-driven suggestions for saving or investing smarter based on your financial patterns.',
  },
];


const FeaturesSectionContent: React.FC = () => {
    return (
        <section className={styles["features-section"]}>
            <div className={styles["features-section-header"]}>
                <h2>All your finances, one smart app.</h2>
                <p>Zentra is more than just a tracker. It's your personal finance co-pilot, designed to bring clarity and confidence to your financial life.</p>
            </div>
            <div className={styles["features-grid"]}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

const FeaturesSection = withIntersectionObserver(FeaturesSectionContent);

export default FeaturesSection;
