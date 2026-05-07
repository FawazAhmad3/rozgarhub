import React from 'react';
import type { HomeData } from '../types';
import '../styles/BookingForm.css';

interface BookingFormProps {
  data: HomeData['bookingForm'];
}

const BookingForm: React.FC<BookingFormProps> = ({ data }) => {
  return (
    <div className="booking-container">
      <div className="container">
        <div className="booking-grid">
          <div className="booking-info">
            <h2 className="section-title text-left">{data.title}</h2>
            <p className="booking-subtitle">Expert help for your home is just a few clicks away. Reliable professionals at your doorstep.</p>
          </div>
          
          <form className="glass-card booking-form shadow-2xl">
            <div className="form-group">
              <label>{data.fields.name}</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>{data.fields.phone}</label>
              <input type="tel" placeholder="03XXXXXXXXX" required />
            </div>
            <div className="form-group">
              <label>{data.fields.service}</label>
              <select required>
                <option value="">select</option>
                {data.services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>{data.fields.city}</label>
              <select disabled>
                <option>Islamabad</option>
              </select>
            </div>
            <div className="form-group">
              <label>{data.fields.area}</label>
              <select required>
                <option value="">select</option>
                {data.areas.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="form-group full-width">
              <label>{data.fields.address}</label>
              <textarea placeholder="Your Detailed Address" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">{data.fields.button}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
