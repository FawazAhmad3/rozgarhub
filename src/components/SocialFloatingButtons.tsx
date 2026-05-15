import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/SocialFloatingButtons.css';

const SocialFloatingButtons: React.FC = () => {
  const whatsappNumber = "923316677772";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61589457046025";
  const linkedinUrl = "https://www.linkedin.com/in/city-sahulat-services-29026b40a";

  return (
    <div className="social-floating-buttons">
      <a 
        href={`whatsapp://send?phone=${whatsappNumber}`} 
        className="social-btn whatsapp" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href={facebookUrl} 
        className="social-btn facebook" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit Facebook"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
      <a 
        href={linkedinUrl} 
        className="social-btn linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit LinkedIn"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </div>
  );
};

export default SocialFloatingButtons;
