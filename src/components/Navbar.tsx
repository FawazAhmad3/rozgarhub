import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import servicesData from '../data/services.json';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo-container">
          <img src="/logos/logo.png" alt="RozgarHub" className="logo-img" />
          <span className="brand-name">RozgarHub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <div className="dropdown">
            <button className="dropdown-toggle nav-link">
              Services <ChevronDown size={18} />
            </button>
            <div className="mega-menu">
              {servicesData.categories.map((cat) => (
                <div key={cat.name} className="menu-category">
                  <h3>{cat.name}</h3>
                  <div className="category-links">
                    {cat.items.map((item) => (
                      <Link key={item} to="/services" className="category-link">{item}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/become-a-tasker" className="btn btn-primary">Become a Tasker</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/reviews" className="nav-link" onClick={() => setIsOpen(false)}>Reviews</Link>
        <Link to="/become-a-tasker" className="btn btn-primary" onClick={() => setIsOpen(false)}>Become a Tasker</Link>
      </div>
    </nav>
  );
};

export default Navbar;
