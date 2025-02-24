import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BettingSites from './components/BettingSites';
import TrustElements from './components/TrustElements';
import ResponsibleGaming from './components/ResponsibleGaming';
import About from './components/About';
import Reviews from './components/Reviews';
import Terms from './components/Terms';
import Footer from './components/Footer';
import AffiliateDisclosure from './components/AffiliateDisclosure';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <BettingSites />
            <TrustElements />
            <Reviews />
            <ResponsibleGaming />
            <AffiliateDisclosure />
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;