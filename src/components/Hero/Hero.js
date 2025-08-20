import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Unlock the Future of Intelligence with AI Galaxy
          </h1>
          <p className="hero__subtitle">
            Harness the power of advanced AI to transform your business with real-time insights, 
            intelligent search, and personalized solutions
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--lg">Start Free Trial</button>
            <button className="btn btn--secondary btn--lg">
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
