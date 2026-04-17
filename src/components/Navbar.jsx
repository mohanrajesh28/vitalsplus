import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/Group 221.png';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src={logoImage} alt="VitalsPlus Logo" style={{ height: '36px' }} />
                    VitalsPlus
                </Link>

                <div className="nav-links-wrap">
                    <div className="nav-links">
                        <Link to="/#features">Features</Link>
                        <Link to="/#how-it-works">How it Works</Link>
                        <Link to="/#families-section">For Families</Link>
                        <Link to="/support">Support</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
