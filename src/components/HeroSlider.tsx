import React, { useState, useEffect } from 'react';
import type { Slide } from '../types';
import '../styles/HeroSlider.css';

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})` }}
        >
          <div className="container slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <button className="btn btn-primary btn-lg">Explore Services</button>
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
