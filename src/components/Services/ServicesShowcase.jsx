import React from 'react'
import { 
  MessageSquare, 
  Brain, 
  TrendingUp, 
  Eye, 
  FileText, 
  Database,
  ExternalLink,
  Play
} from 'lucide-react'

const ServicesShowcase = () => {
  const services = [
    {
      title: "AI Chatbot Development",
      description: "Custom conversational AI solutions with advanced NLP capabilities",
      features: ["Multi-language support", "Context awareness", "Integration APIs", "Custom training"],
      icon: MessageSquare,
      demoAvailable: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Model Training Platform", 
      description: "End-to-end machine learning model training with real-time monitoring",
      features: ["AutoML capabilities", "Hyperparameter tuning", "Performance tracking", "Cloud deployment"],
      icon: Brain,
      demoAvailable: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis powered by AI",
      features: ["Time series forecasting", "Anomaly detection", "Risk assessment", "Business intelligence"],
      icon: TrendingUp,
      demoAvailable: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Computer Vision API",
      description: "Powerful image and video analysis capabilities",
      features: ["Object detection", "Facial recognition", "OCR technology", "Video analytics"],
      icon: Eye,
      demoAvailable: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Natural Language Processing",
      description: "Comprehensive text analysis and language understanding",
      features: ["Sentiment analysis", "Entity extraction", "Language translation", "Text summarization"],
      icon: FileText,
      demoAvailable: true,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data cleaning, transformation, and analysis workflows",
      features: ["Real-time processing", "Data validation", "ETL operations", "Quality monitoring"],
      icon: Database,
      demoAvailable: true,
      gradient: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Services Constellation</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions designed to transform your business operations and unlock new possibilities
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <div key={index} className="service-card">
                <div className={`service-icon bg-gradient-to-r ${service.gradient}`}>
                  <IconComponent size={28} />
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <span className="feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-actions">
                  {service.demoAvailable && (
                    <button className="btn btn--primary btn--small">
                      <Play size={16} />
                      <span>Try Demo</span>
                    </button>
                  )}
                  <button className="btn btn--outline btn--small">
                    <ExternalLink size={16} />
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase