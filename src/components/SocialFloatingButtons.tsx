import React from 'react';
import { MessageCircle, Facebook, Linkedin } from 'lucide-react';
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
        <Facebook size={24} />
      </a>
      <a 
        href={linkedinUrl} 
        className="social-btn linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialFloatingButtons;
