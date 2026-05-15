import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import BecomeTasker from './pages/BecomeTasker';
import ServiceModal from './components/ServiceModal';
import SocialFloatingButtons from './components/SocialFloatingButtons';
import WebSplashScreen from './components/WebSplashScreen';
import { ServiceProvider, useService } from './context/ServiceContext';
import './index.css';

const AppContent: React.FC = () => {
  const { selectedService, isModalOpen, closeService } = useService();
  
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/become-a-tasker" element={<BecomeTasker />} />
        </Routes>
      </main>
      <Footer />
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeService} 
      />
      <SocialFloatingButtons />
    </div>
  );
};

const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <Router>
      <ServiceProvider>
        {showSplash ? (
          <WebSplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <AppContent />
        )}
      </ServiceProvider>
    </Router>
  );
};

export default App;
