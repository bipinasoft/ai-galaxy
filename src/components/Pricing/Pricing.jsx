import React from 'react'
import { Check, Star, Zap } from 'lucide-react'

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Explorer",
      price: "$0",
      period: "month",
      description: "Perfect for testing our AI capabilities",
      features: [
        "1,000 API calls/month",
        "Basic chatbot access",
        "Community support",
        "2 AI models",
        "Standard response time"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Professional",
      price: "$99",
      period: "month", 
      description: "Ideal for growing businesses and developers",
      features: [
        "100,000 API calls/month",
        "Advanced AI models", 
        "Priority support",
        "Custom model training",
        "Analytics dashboard",
        "API integrations"
      ],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Custom AI development",
        "SLA guarantees",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing That Scales With You</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your AI journey, from exploration to enterprise deployment
          </p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && (
                <div className="popularity-badge">
                  <Star size={16} />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="pricing-header">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price">
                  <span className="price-amount">{tier.price}</span>
                  {tier.period && <span className="price-period">/{tier.period}</span>}
                </div>
                <p className="tier-description">{tier.description}</p>
              </div>

              <ul className="features-list">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn ${tier.popular ? 'btn--primary' : 'btn--outline'} btn--full`}>
                {tier.popular && <Zap size={16} />}
                <span>{tier.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing