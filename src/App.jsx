// src/sections/BootcampPage.jsx
import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Learn from './pages/Learn';
import WhatYou from './pages/WhatYou';
import Benefits from './pages/Benefits';
import Pricing from './pages/Pricing';
import Footer from './pages/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Learn />
      <WhatYou />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}
