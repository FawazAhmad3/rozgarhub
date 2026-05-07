import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import navbarData from '../data/navbar.json';
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
          <img src="/logos/logo.png" alt={navbarData.brand} className="logo-img" />
          <span className="brand-name">{navbarData.brand}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navbarData.links.map(link => (
            link.hasDropdown ? (
              <div key={link.name} className="dropdown">
                <button className="dropdown-toggle nav-link">
                  {link.name} <ChevronDown size={18} />
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
            ) : (
              <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
            )
          ))}
          <Link to={navbarData.cta.path} className="btn btn-primary">{navbarData.cta.name}</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navbarData.links.map(link => (
          <Link key={link.name} to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>{link.name}</Link>
        ))}
        <Link to={navbarData.cta.path} className="btn btn-primary" onClick={() => setIsOpen(false)}>{navbarData.cta.name}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
