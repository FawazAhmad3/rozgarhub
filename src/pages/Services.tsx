import React from 'react';
import servicesData from '../data/services.json';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="section-title">{servicesData.pageTitle}</h1>
          <p className="hero-subtitle">Comprehensive solutions for every corner of your home.</p>
        </div>
      </section>

      <div className="container">
        {servicesData.categories.map((cat) => (
          <div key={cat.name} className="service-category-block">
            <h2 className="category-name">{cat.name}</h2>
            <div className="items-grid">
              {cat.items.map((item) => (
                <div key={item} className="glass-card service-item">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
