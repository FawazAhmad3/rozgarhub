import React from 'react';
import * as Icons from 'lucide-react';
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
          {servicesData.categories.map((cat) => {
            const IconComponent = (Icons as any)[cat.icon] || Icons.HelpCircle;
            
            return (
              <div key={cat.name} className="category-card glass-card">
                <div className="category-header">
                  <div className="icon-wrapper">
                    <IconComponent size={32} />
                  </div>
                  <h2 className="category-title">{cat.name}</h2>
                </div>
                <ul className="category-list">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Icons.CheckCircle2 size={16} className="check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
