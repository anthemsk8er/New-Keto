import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Ingredients from '../components/Ingredients';
import HowToUse from '../components/HowToUse';
import Testimonials from '../components/Testimonials';
import Bonuses from '../components/Bonuses';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

interface AdPromoPageProps {
  onNavigateToPromo: () => void;
}

const AdPromoPage: React.FC<AdPromoPageProps> = ({ onNavigateToPromo }) => {
  return (
    <>
      <Header onNavigateToPromo={onNavigateToPromo} />
      <main>
        <Hero />
        <Logos />
        <About />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <Testimonials />
        <Bonuses />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default AdPromoPage;
