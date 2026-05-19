import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';
import '../styles/HeroSlider.css';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  backgroundPosition?: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 35, 71, 0.7), rgba(0, 35, 71, 0.4)), url(${slide.image})`,
            backgroundPosition: slide.backgroundPosition || 'center'
          }}
        >
          <div className="container slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <Link to="/services" className="btn btn-primary btn-lg">
              {homeData.hero.cta}
            </Link>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
