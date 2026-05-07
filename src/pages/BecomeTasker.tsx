import React from 'react';
import { Mail, Phone } from 'lucide-react';
import becomeTaskerData from '../data/become-a-tasker.json';
import '../styles/BecomeTasker.css';

const BecomeTasker: React.FC = () => {
  const { header, whyJoin, contact } = becomeTaskerData;

  return (
    <div className="become-tasker-page">
      <header className="page-header">
        <div className="container">
          <h1 className="section-title">{header.title}</h1>
          <p className="section-subtitle">{header.subtitle}</p>
        </div>
      </header>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">{whyJoin.title}</h2>
          <div className="benefits-grid">
            {whyJoin.benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card glass-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="glass-card cta-box">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <div className="contact-methods">
              <a href={`tel:${contact.phone}`} className="contact-btn">
                <Phone size={24} />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="contact-btn">
                <Mail size={24} />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeTasker;
