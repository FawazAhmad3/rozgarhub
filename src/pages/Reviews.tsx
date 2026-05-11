import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import reviewsData from '../data/reviews.json';
import '../styles/Reviews.css';

const Reviews: React.FC = () => {
  const { header, items } = reviewsData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "923316677772";
    const message = `*New Customer Review Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Rating:* ${formData.rating}/5 Stars%0A` +
      `*Comment:* ${formData.comment}%0A%0A` +
      `_This review was submitted via the website and is awaiting your approval._`;
    
    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${message}`;
    window.location.assign(whatsappUrl);
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Icons.Star 
        key={i} 
        size={16} 
        fill={i < rating ? "#fbbf24" : "none"} 
        color={i < rating ? "#fbbf24" : "#d1d5db"} 
        strokeWidth={i < rating ? 0 : 2}
      />
    ));
  };

  return (
    <div className="reviews-page">
      <header className="reviews-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{header.title}</h1>
            <p className="hero-subtitle">{header.subtitle}</p>
            
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">{header.stats.averageRating}</div>
                <div className="stat-stars">{renderStars(5)}</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-value">{header.stats.totalReviews}</div>
                <div className="stat-label">Satisfied Customers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-value">{header.stats.verifiedRate}</div>
                <div className="stat-label">Verified Service</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="reviews-section">
        <div className="container">
          <div className="reviews-grid">
            {items.map((review) => (
              <div key={review.id} className="review-card glass-card">
                <div className="review-top">
                  <div 
                    className="user-avatar" 
                    style={{ backgroundColor: review.avatarColor }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div className="user-info">
                    <div className="user-name">
                      {review.name}
                      {review.verified && (
                        <Icons.CheckCircle size={14} className="verified-icon" />
                      )}
                    </div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="service-icon">
                    <Icons.ShieldCheck size={20} />
                  </div>
                </div>

                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>

                <div className="review-body">
                  <Icons.Quote size={24} className="quote-icon" />
                  <p className="review-text">{review.comment}</p>
                </div>

                <div className="review-footer">
                  <div className="service-tag">
                    <Icons.Briefcase size={12} />
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reviews-cta">
            <h3>Experienced our service?</h3>
            <p>Your feedback helps us improve and serve Islamabad better.</p>
            <button 
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Write a Review <Icons.Edit3 size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="review-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="review-modal-content glass-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <Icons.X size={24} />
            </button>
            
            <div className="modal-header">
              <h3>Submit Your Review</h3>
              <p>Share your experience with CITY SAHULAT SERVICES</p>
            </div>

            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Service Received</label>
                <input 
                  type="text" 
                  name="service" 
                  placeholder="e.g. Home Cleaning, Plumbing"
                  value={formData.service}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Rating (1-5)</label>
                <div className="rating-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${formData.rating >= star ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    >
                      <Icons.Star size={24} fill={formData.rating >= star ? "#fbbf24" : "none"} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Your Review</label>
                <textarea 
                  name="comment" 
                  placeholder="Tell us what you liked about our service..."
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width">
                Send Review via WhatsApp <Icons.Send size={18} />
              </button>
              
              <p className="form-note">
                <Icons.Info size={14} /> Your review will be reviewed by our team before being published.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
