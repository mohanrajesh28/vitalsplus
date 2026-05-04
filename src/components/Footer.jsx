import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/Group 221.png';
import qrCodeImage from '../assets/qr_code.png';
import vadaliLogo from '../assets/image.webp';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-glow"></div>
            <div className="container">
                <div className="footer-top">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="footer-brand"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="footer-logo"
                        >
                            <img src={logoImage} alt="VitalsPlus Logo" style={{ height: '36px' }} />
                            <span>Vitals+</span>
                        </motion.div>
                        <p>Your family's health journey, simplified. Built with precision, designed for care.</p>
                        <div className="footer-brand-bottom">
                            <div className="footer-qr-wrapper">
                                <div className="qr-code-square">
                                    <img src={qrCodeImage} alt="Download VitalsPlus App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div className="qr-text">
                                    <strong>Scan to download</strong>
                                    <span>Available on iOS & Android</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="footer-links-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="link-group"
                        >
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/#features">Features</Link></li>
                                <li><Link to="/#how-it-works">How it works</Link></li>
                                <li><Link to="/#families">Family Care</Link></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="link-group"
                        >
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="https://vadali.in">About Us</Link></li>
                                <li><Link to="/support">Contact</Link></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2026 Vitals+. All rights reserved.
                    </div>
                    <div className="footer-developed">
                        <span className="developed-text">Developed by</span>
                        <a
                            href="https://vadali.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="developed-button"
                        >
                            <img src={vadaliLogo} alt="Vadali logo" />
                        </a>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="back-to-top"
                        aria-label="Scroll back to the top of the page"
                    >
                        Back to top ↑
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
