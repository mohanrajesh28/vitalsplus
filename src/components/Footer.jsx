import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Globe, Users, QrCode } from 'lucide-react';
import logoImage from '../assets/Group 221.png';
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
                            <span>VitalsPlus</span>
                        </motion.div>
                        <p>Your family's health journey, simplified. Built with precision, designed for care.</p>
                        <div className="footer-brand-bottom">
                            <div className="social-links">
                                <motion.a
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    href="#" className="social-icon"
                                    aria-label="VitalsPlus on the Web"
                                >
                                    <Globe size={20} aria-hidden="true" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    href="#" className="social-icon"
                                    aria-label="VitalsPlus Activity Feed"
                                >
                                    <Activity size={20} aria-hidden="true" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    href="#" className="social-icon"
                                    aria-label="Connect with our Community"
                                >
                                    <Users size={20} aria-hidden="true" />
                                </motion.a>
                            </div>

                            <div className="footer-qr-wrapper">
                                <div className="qr-code-square">
                                    <QrCode size={48} strokeWidth={1.5} />
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
                                <li><Link to="/#pricing">Billing</Link></li>
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
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="link-group"
                        >
                            <h4>Legal</h4>
                            <ul>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms of Service</Link></li>
                                <li><Link to="/">HIPAA Compliance</Link></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2026 VitalsPlus. All rights reserved.
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
