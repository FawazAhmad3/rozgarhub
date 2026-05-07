import React, { useState } from 'react';
import type { HomeData } from '../types';
import '../styles/BookingForm.css';

interface BookingFormProps {
  data: HomeData['bookingForm'];
}

const BookingForm: React.FC<BookingFormProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    area: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = data.whatsappNumber; // From JSON
    const message = `*New Service Request - RozgarHub*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Location:* Islamabad, ${formData.area}%0A` +
      `*Address:* ${formData.address}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="booking-container">
      <div className="container">
        <div className="booking-grid">
          <div className="booking-info">
            <h2 className="section-title text-left">{data.title}</h2>
            <p className="booking-subtitle">{data.description}</p>
          </div>
          
          <form className="glass-card booking-form shadow-2xl" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{data.fields.name}</label>
              <input 
                type="text" 
                name="name"
                placeholder={data.placeholders.name}
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>{data.fields.phone}</label>
              <input 
                type="tel" 
                name="phone"
                placeholder={data.placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>{data.fields.service}</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{data.fields.service}</option>
                {data.services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>{data.fields.city}</label>
              <select disabled>
                <option>{data.fields.city}</option>
              </select>
            </div>
            <div className="form-group">
              <label>{data.fields.area}</label>
              <select 
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
              >
                <option value="">{data.fields.area}</option>
                {data.areas.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="form-group full-width">
              <label>{data.fields.address}</label>
              <textarea 
                name="address"
                placeholder={data.placeholders.address}
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">{data.fields.button}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
