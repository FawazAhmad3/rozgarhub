import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import BecomeTasker from './pages/BecomeTasker';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
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
      </div>
    </Router>
  );
};

export default App;
