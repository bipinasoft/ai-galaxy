import React from 'react';
import { Search, MessageCircle, BarChart, Layers, Shield, Code } from 'lucide-react';
import { features } from '../utils/data';

const iconMap = {
  Search,
  MessageCircle,
  BarChart,
  Layers,
  Shield,
  Code
};

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Why Choose AI Galaxy</h2>
          <p className="section__subtitle">
            Discover the powerful features that make AI Galaxy the ultimate AI platform
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={index} className="feature__card">
                <div className="feature__icon">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
