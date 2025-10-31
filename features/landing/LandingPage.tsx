import styles from "./LandingPage.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import UnifiedViewSection from "./components/UnifiedViewSection/UnifiedViewSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import PreviewSection from "./components/PreviewSection/PreviewSection";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className={styles["landing-page"]}>
        <HeroSection />
        <UnifiedViewSection />
        <FeaturesSection />
        <PreviewSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
