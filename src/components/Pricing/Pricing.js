import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../utils/data';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Choose Your Plan</h2>
          <p className="section__subtitle">
            Flexible pricing options to suit businesses of all sizes
          </p>
        </div>

        <div className="pricing__grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing__card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="pricing__badge">Most Popular</div>}
              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <div className="pricing__price">
                  <span className="price__amount">{plan.price}</span>
                  {plan.period && <span className="price__period">/{plan.period}</span>}
                </div>
                <p className="pricing__description">{plan.description}</p>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing__feature">
                    <Check size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn--primary' : 'btn--outline'} btn--full`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
