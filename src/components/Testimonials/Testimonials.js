import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../utils/data';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Trusted by Industry Leaders</h2>
          <p className="section__subtitle">
            See what our customers say about AI Galaxy
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial__card">
              <div className="testimonial__stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial__text">"{testimonial.text}"</p>
              <div className="testimonial__author">
                <div className="author__info">
                  <h4 className="author__name">{testimonial.name}</h4>
                  <p className="author__role">{testimonial.role}</p>
                  <p className="author__company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
