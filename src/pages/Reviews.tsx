import React from 'react';
import reviewsData from '../data/reviews.json';
import { Star } from 'lucide-react';
import '../styles/Reviews.css';

const Reviews: React.FC = () => {
  return (
    <div className="reviews-page">
      <section className="reviews-hero">
        <div className="container">
          <h1 className="section-title">{reviewsData.pageTitle}</h1>
          <p className="hero-subtitle">What our customers in Islamabad have to say about us.</p>
        </div>
      </section>

      <div className="container">
        <div className="reviews-grid">
          {reviewsData.reviews.map((rev, idx) => (
            <div key={idx} className="glass-card review-card">
              <div className="reviewer-info">
                <div className="reviewer-avatar">{rev.name.charAt(0)}</div>
                <div>
                  <h3 className="reviewer-name">{rev.name}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < rev.rating ? "#f59e0b" : "none"} stroke={i < rev.rating ? "#f59e0b" : "#cbd5e1"} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="comment">"{rev.comment}"</p>
              <span className="review-date">{rev.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
