import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import becomeTaskerData from '../data/become-a-tasker.json';
import '../styles/BecomeTasker.css';

const BecomeTasker: React.FC = () => {
  const { header, team, joinForm, contact } = becomeTaskerData;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    skill: '',
    experience: '',
    type: 'permanent',
    address: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredTaskers = team.taskers.filter(tasker => {
    const matchesSearch = tasker.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tasker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tasker.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || tasker.type === filterType;
    
    return matchesSearch && matchesFilter;
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Tasker Application - CITY SAHULAT SERVICES*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Primary Skill:* ${formData.skill}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Application Type:* ${formData.type.toUpperCase()}%0A` +
      `*Address:* ${formData.address}`;
    
    const whatsappUrl = `whatsapp://send?phone=${joinForm.whatsappNumber}&text=${message}`;
    window.location.assign(whatsappUrl);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="become-tasker-page">
      <header className="page-header">
        <div className="container">
          <h1 className="section-title">{header.title}</h1>
          <p className="section-subtitle">{header.subtitle}</p>
          <div className="header-actions">
            <a href="#join-form" className="btn-header-primary">
              Join Our Network <Icons.ArrowRight size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Team Profiles Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title-dark">{team.title}</h2>
          <p className="section-subtitle-dark">{team.subtitle}</p>

          <div className="filter-controls">
            <div className="search-box">
              <Icons.Search size={20} />
              <input 
                type="text" 
                placeholder="Search by name, role or skill..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              <button 
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                All Taskers
              </button>
              <button 
                className={`filter-btn ${filterType === 'permanent' ? 'active' : ''}`}
                onClick={() => setFilterType('permanent')}
              >
                Permanent
              </button>
              <button 
                className={`filter-btn ${filterType === 'task-based' ? 'active' : ''}`}
                onClick={() => setFilterType('task-based')}
              >
                Task Based
              </button>
            </div>
          </div>
          
          <div className="team-grid">
            {filteredTaskers.map((tasker) => (
              <div key={tasker.id} className="tasker-card glass-card">
                <div className="tasker-image-wrapper">
                  <img src={tasker.image} alt={tasker.name} />
                  <span className={`tasker-type-tag ${tasker.type}`}>{tasker.type}</span>
                </div>
                <div className="tasker-info">
                  <h3>{tasker.name}</h3>
                  <span className="tasker-role">{tasker.role}</span>
                  <div className="tasker-stats">
                    <div className="stat-item">
                      <Icons.Award size={16} />
                      <span>{tasker.experience} exp</span>
                    </div>
                    <div className="stat-item">
                      <Icons.Star size={16} />
                      <span>{tasker.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="join-form-section" id="join-form">
        <div className="container">
          <div className="form-wrapper glass-card">
            <div className="form-header">
              <h2>{joinForm.title}</h2>
              <p>{joinForm.subtitle}</p>
            </div>
            
            <form className="join-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{joinForm.fields.name}</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={joinForm.placeholders.name} 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{joinForm.fields.phone}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder={joinForm.placeholders.phone} 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{joinForm.fields.skill}</label>
                  <input 
                    type="text" 
                    name="skill" 
                    placeholder={joinForm.placeholders.skill} 
                    value={formData.skill}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{joinForm.fields.experience}</label>
                  <input 
                    type="text" 
                    name="experience" 
                    placeholder={joinForm.placeholders.experience} 
                    value={formData.experience}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{joinForm.fields.type}</label>
                <select 
                  name="type" 
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="permanent">Permanent Staff</option>
                  <option value="task-based">Task-Based Contractor</option>
                </select>
              </div>

              <div className="form-group">
                <label>{joinForm.fields.address}</label>
                <textarea 
                  name="address" 
                  placeholder={joinForm.placeholders.address} 
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                {joinForm.fields.button} <Icons.Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Legacy Contact Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-box glass-card">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <div className="contact-methods">
              <a href={`tel:${contact.phone}`} className="contact-btn phone">
                <Icons.Phone size={28} />
                <div className="btn-text">
                  <span className="btn-label">Call Us Now</span>
                  <span className="btn-value">{contact.phone}</span>
                </div>
              </a>
              <a href={`mailto:${contact.email}`} className="contact-btn email">
                <Icons.Mail size={28} />
                <div className="btn-text">
                  <span className="btn-label">Email Us</span>
                  <span className="btn-value">{contact.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeTasker;
