# Create remaining components and comprehensive CSS

# Pricing Component 
pricing_component = '''import React from 'react'
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

export default Pricing'''

# Testimonials Component
testimonials_component = '''import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "TechForward Inc.",
      role: "Chief AI Officer",
      text: "AI Galaxy transformed our development process. The model training platform is incredibly intuitive and powerful.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b048?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      company: "DataFlow Dynamics",
      role: "Lead Data Scientist", 
      text: "The predictive analytics capabilities have given us unprecedented insights into our business operations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      company: "Innovation Labs",
      role: "VP of Engineering",
      text: "Outstanding platform with incredible accuracy and speed. The chatbot integration was seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            See what our customers say about their AI Galaxy experience
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <Quote size={24} className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9Ijc1IiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Vc2VyPC90ZXh0Pgo8L3N2Zz4K'
                  }}
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials'''

# Footer Component
footer_component = '''import React from 'react'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-icon">⭐</div>
              <h3>AI Galaxy</h3>
            </div>
            <p className="footer-description">
              Explore the universe of artificial intelligence with our advanced AI platform. 
              Transform your business with cutting-edge AI solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#models">AI Models</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 AI Galaxy. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer'''

# Save remaining components
with open('src/components/Pricing/Pricing.jsx', 'w') as f:
    f.write(pricing_component)
    
with open('src/components/Testimonials/Testimonials.jsx', 'w') as f:
    f.write(testimonials_component)
    
with open('src/components/ui/Footer.jsx', 'w') as f:
    f.write(footer_component)

print("✅ Remaining components created!")
print("Files created:")
print("  - src/components/Pricing/Pricing.jsx")
print("  - src/components/Testimonials/Testimonials.jsx")
print("  - src/components/ui/Footer.jsx")