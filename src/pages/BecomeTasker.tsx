import React from 'react';
import * as Icons from 'lucide-react';
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
            {whyJoin.benefits.map((benefit, idx) => {
              const IconComponent = (Icons as any)[benefit.icon] || Icons.CheckCircle;
              return (
                <div key={idx} className="benefit-card glass-card">
                  <div className="benefit-icon-wrapper">
                    <IconComponent size={32} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-box glass-card">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <div className="contact-methods">
              <a href={`tel:${contact.phone}`} className="contact-btn phone">
                <Icons.Phone size={28} />
                <div className="btn-text">
                  <span className="btn-label">Call Us Now</span>
                  <span className="btn-value">{contact.phone}</span>
                </div>
              </a>
              <a href={`mailto:${contact.email}`} className="contact-btn email">
                <Icons.Mail size={28} />
                <div className="btn-text">
                  <span className="btn-label">Email Us</span>
                  <span className="btn-value">{contact.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeTasker;
