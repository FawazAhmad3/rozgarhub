import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import footerData from '../data/footer.json';
import becomeTaskerData from '../data/become-a-tasker.json';
import navbarData from '../data/navbar.json';
import type { FooterData, NavbarData } from '../types';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const data = footerData as FooterData;
  const nav = navbarData as NavbarData;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo-container">
            <img src="/logos/logo.png" alt={nav.brand} className="logo-img" />
            <span className="brand-name">{nav.brand}</span>
          </Link>
          <p className="footer-desc">
            {data.description}
          </p>
        </div>

        <div className="footer-links">
          <h3>{data.quickLinks.title}</h3>
          <ul>
            {data.quickLinks.links.map(link => (
              <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>{data.contact.title}</h3>
          <div className="contact-item">
            <MapPin size={18} className="icon" />
            <span>{data.contact.location}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="icon" />
            <span>{becomeTaskerData.contact.phone}</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="icon" />
            <span>{data.contact.email}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
