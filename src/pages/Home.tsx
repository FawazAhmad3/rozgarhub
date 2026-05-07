import React from 'react';
import HeroSlider from '../components/HeroSlider';
import BookingForm from '../components/BookingForm';
import homeData from '../data/home.json';
import type { HomeData } from '../types';
import '../styles/Home.css';

const Home: React.FC = () => {
  const data = homeData as HomeData;

  return (
    <div className="home-page">
      <HeroSlider slides={data.hero.slides} />
      
      <BookingForm data={data.bookingForm} />

      <section className="top-services">
        <div className="container">
          <h2 className="section-title">{data.topServices.title}</h2>
          <div className="services-grid">
            {data.topServices.items.map((service) => (
              <div key={service.id} className="service-card glass-card">
                <div className="card-img-wrapper">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="card-body">
                  <h3>{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-banner">
        <div className="container text-center">
          <h2 className="banner-title">{data.locationSection.title}</h2>
          <p className="banner-desc">{data.locationSection.description}</p>
          <div className="location-badge">
            <span className="dot"></span> Currently in Islamabad
          </div>
        </div>
      </section>

      <section className="affiliations">
        <div className="container">
          <h2 className="section-title">{data.affiliations.title}</h2>
          <div className="logos-grid">
            {data.affiliations.logos.map((logo, idx) => (
              <img key={idx} src={logo} alt="Partner" className="partner-logo" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
