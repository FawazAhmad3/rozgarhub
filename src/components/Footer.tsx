import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import footerData from '../data/footer.json';
import becomeTaskerData from '../data/become-a-tasker.json';
import navbarData from '../data/navbar.json';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo-container">
            <img src="/logos/logo.png" alt={navbarData.brand} className="logo-img" />
            <span className="brand-name">{navbarData.brand}</span>
          </Link>
          <p className="footer-desc">
            {footerData.description}
          </p>
        </div>

        <div className="footer-links">
          <h3>{footerData.quickLinks.title}</h3>
          <ul>
            {footerData.quickLinks.links.map(link => (
              <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>{footerData.contact.title}</h3>
          <div className="contact-item">
            <MapPin size={18} className="icon" />
            <span>{footerData.contact.location}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="icon" />
            <span>{becomeTaskerData.contact.phone}</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="icon" />
            <span>{footerData.contact.email}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
