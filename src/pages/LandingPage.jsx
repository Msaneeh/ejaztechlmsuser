import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/Layout/Hero';
import About from '@/Layout/About';
import LearningFeature from '@/Layout/LearningFeature';
import HowItWorks from '@/Layout/HowItWorks';
import Cta from '@/Layout/Cta';
import Footer from '@/Layout/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
        <Hero />
        <About />
        <LearningFeature />
        <HowItWorks />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;