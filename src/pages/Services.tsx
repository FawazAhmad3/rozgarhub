import React from 'react';
import servicesData from '../data/services.json';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="container">
          <h1 className="section-title">{servicesData.header.title}</h1>
          <p className="section-subtitle">{servicesData.header.subtitle}</p>
        </div>
      </header>

      <div className="container">
        <div className="categories-grid">
          {servicesData.categories.map((cat) => (
            <div key={cat.name} className="category-card glass-card">
              <h2 className="category-title">{cat.name}</h2>
              <ul className="category-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
