import React from 'react';
import taskerData from '../data/become-a-tasker.json';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import '../styles/BecomeTasker.css';

const BecomeTasker: React.FC = () => {
  return (
    <div className="tasker-page">
      <section className="tasker-hero">
        <div className="container">
          <h1 className="section-title">{taskerData.header.title}</h1>
          <p className="hero-subtitle">{taskerData.header.subtitle}</p>
        </div>
      </section>

      <div className="container">
        <div className="tasker-grid">
          <div className="benefits-section">
            <h2>Why join RozgarHub?</h2>
            <div className="benefit-item">
              <CheckCircle className="icon" />
              <div>
                <h3>Flexible Hours</h3>
                <p>Work whenever you want. You are your own boss.</p>
              </div>
            </div>
            <div className="benefit-item">
              <CheckCircle className="icon" />
              <div>
                <h3>High Earnings</h3>
                <p>Earn more than industry standards with our platform.</p>
              </div>
            </div>
            <div className="benefit-item">
              <CheckCircle className="icon" />
              <div>
                <h3>Quick Payments</h3>
                <p>Get paid directly and quickly after every task.</p>
              </div>
            </div>
          </div>

          <div className="glass-card contact-card">
            <h2>{taskerData.contact.title}</h2>
            <p>{taskerData.contact.description}</p>
            <div className="contact-methods">
              <div className="contact-method">
                <Phone className="icon" />
                <div>
                  <span>Call or WhatsApp</span>
                  <strong>{taskerData.contact.phone}</strong>
                </div>
              </div>
              <div className="contact-method">
                <Mail className="icon" />
                <div>
                  <span>Email Us</span>
                  <strong>{taskerData.contact.email}</strong>
                </div>
              </div>
            </div>
            <button className="btn btn-primary full-width mt-8">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTasker;
