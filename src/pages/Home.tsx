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



      <section className="affiliations">
        <div className="container">
          <h2 className="section-title">{data.affiliations.title}</h2>
          <div className="logos-marquee">
            <div className="logos-track">
              {data.affiliations.logos.map((logo, idx) => (
                <img key={`logo-1-${idx}`} src={logo} alt="Partner" className="partner-logo" />
              ))}
              {/* Duplicate for seamless loop */}
              {data.affiliations.logos.map((logo, idx) => (
                <img key={`logo-2-${idx}`} src={logo} alt="Partner" className="partner-logo" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
