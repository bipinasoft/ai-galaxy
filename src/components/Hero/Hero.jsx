import React, { useEffect, useRef } from 'react'
import { Rocket, Sparkles, Zap } from 'lucide-react'
import GalaxyBackground from './GalaxyBackground'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <GalaxyBackground />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">AI Galaxy</span>
          </h1>
          <p className="hero-subtitle">
            Explore the Universe of Artificial Intelligence
          </p>
          <p className="hero-description">
            Advanced AI platform with real-time model training, intelligent chatbots, 
            and enterprise-grade solutions that push the boundaries of what's possible.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn--primary btn--large">
              <Rocket size={20} />
              <span>Start Your Journey</span>
            </button>
            <button className="btn btn--secondary btn--large">
              <Sparkles size={20} />
              <span>Explore Models</span>
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">2.4M+</div>
            <div className="stat-label">AI Requests</div>
          </div>
          <div className="stat">
            <div className="stat-number">99.7%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat">
            <div className="stat-number">15K+</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero