import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo-container">
            <img src="/logos/logo.png" alt="RozgarHub" className="logo-img" />
            <span className="brand-name">RozgarHub</span>
          </Link>
          <p className="footer-desc">
            Providing premium home services in Islamabad. Trusted, reliable, and professional care for your home.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/become-a-tasker">Become a Tasker</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MapPin size={18} className="icon" />
            <span>Islamabad, Pakistan</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="icon" />
            <span>+92 3XX XXXXXXX</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="icon" />
            <span>info@rozgarhub.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} RozgarHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
