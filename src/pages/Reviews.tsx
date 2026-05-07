import React from 'react';
import reviewsData from '../data/reviews.json';
import '../styles/Reviews.css';

const Reviews: React.FC = () => {
  return (
    <div className="reviews-page">
      <header className="reviews-header">
        <div className="container">
          <h1 className="section-title">{reviewsData.header.title}</h1>
          <p className="section-subtitle">{reviewsData.header.subtitle}</p>
        </div>
      </header>

      <div className="container">
        <div className="reviews-grid">
          {reviewsData.items.map((review) => (
            <div key={review.id} className="review-card glass-card">
              <div className="review-header">
                <div className="stars">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <span className="service-tag">{review.service}</span>
              </div>
              <p className="comment">"{review.comment}"</p>
              <div className="author">
                <span className="name">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
