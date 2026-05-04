import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import '../styles/GetStarted.css';

export default function GetStartedModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="modal-overlay"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="get-started-modal"
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-content">
              <h2 className="modal-title">Get Started with Vitals+</h2>
              <p className="modal-subtitle">Download the app to start tracking you & family's health.</p>
              
              <div className="qr-code-container">
                <div className="qr-frame">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vitalsplus.app" 
                    alt="Scan to download VitalsPlus"
                    className="qr-image"
                  />
                </div>
                <p className="qr-instruction">Scan and download for iOS and Android</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
