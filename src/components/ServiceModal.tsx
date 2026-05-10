import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import '../styles/ServiceModal.css';

interface ServiceModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const Player = ReactPlayer as any;

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => { 
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  useEffect(() => {
    if (service?.images?.length > 0) {
      setActiveMedia(service.images[0]);
    }
  }, [service]);

  if (!service) return null;

  const isVideo = (url: string) => {
    return url.includes('youtube.com') || url.includes('vimeo.com') || url.endsWith('.mp4');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-container glass-modal"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <Icons.X size={24} />
            </button>

            <div className="modal-content">
              <div className="modal-media-section">
                <div className="main-media-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMedia}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="media-viewer"
                    >
                      {activeMedia && isVideo(activeMedia) ? (
                        <div className="player-wrapper">
                          <Player 
                            url={activeMedia} 
                            width="100%" 
                            height="100%" 
                            controls 
                            className="react-player"
                          />
                        </div>
                      ) : (
                        <img src={activeMedia || ''} alt={service.name} className="service-main-img" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {(service.images?.length > 1 || service.videos?.length > 0) && (
                  <div className="media-thumbnails">
                    {service.images.map((img: string, idx: number) => (
                      <div 
                        key={`img-${idx}`} 
                        className={`thumbnail-item ${activeMedia === img ? 'active' : ''}`}
                        onClick={() => setActiveMedia(img)}
                      >
                        <img src={img} alt="Thumbnail" />
                      </div>
                    ))}
                    {service.videos?.map((vid: string, idx: number) => (
                      <div 
                        key={`vid-${idx}`} 
                        className={`thumbnail-item video-thumb ${activeMedia === vid ? 'active' : ''}`}
                        onClick={() => setActiveMedia(vid)}
                      >
                        <div className="play-overlay"><Icons.Play size={20} fill="currentColor" /></div>
                        <img src={service.images[0]} alt="Video Thumbnail" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info-section">
                <div className="info-header">
                  <h2 className="modal-title">{service.name}</h2>
                  <div className="modal-badges">
                    <span className="badge-verified"><Icons.ShieldCheck size={14} /> Verified</span>
                  </div>
                </div>
                
                <div className="modal-description">
                  <p>{service.description}</p>
                </div>

                <div className="modal-features">
                  <div className="feature-item">
                    <Icons.Zap size={18} />
                    <div>
                      <strong>Fast Service</strong>
                      <span>Same day booking</span>
                    </div>
                  </div>
                  <div className="feature-item">
                    <Icons.Star size={18} />
                    <div>
                      <strong>Top Rated</strong>
                      <span>4.9/5 Service quality</span>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <a href="/#booking" className="btn-book-now" onClick={onClose}>
                    Book Now <Icons.ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
