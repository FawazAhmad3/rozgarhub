import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WebSplashScreen.css';

interface WebSplashScreenProps {
  onComplete: () => void;
}

const WebSplashScreen: React.FC<WebSplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2200); // 2.2s + 0.8s exit = 3s total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="web-splash-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="web-splash-content">
            <motion.img 
              src="/logos/logo.png" 
              alt="Logo" 
              className="splash-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            <motion.div 
              className="splash-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
            >
              Reliable Services | Smart Solutions
            </motion.div>
          </div>
          
          <motion.div 
            className="splash-loader"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 2.2, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebSplashScreen;
