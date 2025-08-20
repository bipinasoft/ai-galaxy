import React from 'react';
import { Search, MessageSquare, TrendingUp, Settings } from 'lucide-react';
import { services } from '../utils/data';

const iconMap = {
  Search,
  MessageSquare,
  TrendingUp,
  Settings
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Our AI Solutions</h2>
          <p className="section__subtitle">
            Comprehensive AI services designed to accelerate your business growth
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={index} className="service__card">
                <div className="service__icon">
                  {IconComponent && <IconComponent size={40} />}
                </div>
                <h3 className="service__title">{service.title}</h3>
                <p className="service__description">{service.description}</p>
                <ul className="service__benefits">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <button className="btn btn--outline">Learn More</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
