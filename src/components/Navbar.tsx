import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import navbarData from '../data/navbar.json';
import servicesData from '../data/services.json';
import type { NavbarData } from '../types';
import { useService } from '../context/ServiceContext';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const data = navbarData as NavbarData;
  const { openService } = useService();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setScrolled(window.scrollY > 20);
  }, [location]);

  const handleServiceClick = (e: React.MouseEvent, service: any) => {
    e.preventDefault();
    openService(service);
  };

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="logo-container">
          <img src="/logos/city-sahulat-logo.png" alt={data.brand} className="logo-img" />
          <span className="brand-name">{data.brand}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {data.links.map(link => (
            link.hasDropdown ? (
              <div key={link.name} className="dropdown">
                <Link to="/services" className="dropdown-toggle">
                  {link.name} <Icons.ChevronDown size={18} />
                </Link>
                <div className="mega-menu">
                  {servicesData.categories.map((cat: any) => {
                    const IconComponent = (Icons as any)[cat.icon] || Icons.HelpCircle;
                    return (
                      <div key={cat.name} className="menu-category">
                        <div className="category-header-small">
                          <IconComponent size={18} className="cat-icon" />
                          <h3>{cat.name}</h3>
                        </div>
                        <div className="category-links">
                          {cat.items.map((item: any) => (
                            <button 
                              key={item.id} 
                              onClick={(e) => handleServiceClick(e, item)} 
                              className="category-link-btn"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link key={link.name} to={link.path} className="nav-link">{link.name}</Link>
            )
          ))}
          <Link to={data.cta.path} className="btn-cta">{data.cta.name}</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Icons.X size={30} /> : <Icons.Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {data.links.map(link => (
          <Link key={link.name} to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>{link.name}</Link>
        ))}
        <Link to={data.cta.path} className="btn-cta" onClick={() => setIsOpen(false)}>{data.cta.name}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
