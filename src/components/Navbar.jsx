import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logoImage from '../assets/Group 221.png';
import GetStartedModal from './GetStarted';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-get-started', handleOpen);
    return () => window.removeEventListener('open-get-started', handleOpen);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon-hex">
            <img src={logoImage} alt="VitalsPlus logo" className="logo-image" />
          </div>
          Vitals+
        </Link>
        
        <div className="nav-links-wrap">
          <div className="nav-links">
            <Link to="/#features">Features</Link>
            <Link to="/#app-preview">How it Works</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        
        <div className="nav-actions">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-launch"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
