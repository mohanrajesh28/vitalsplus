import { motion, AnimatePresence } from 'motion/react';
import {
    FileText, Brain, TrendingUp, Users, AlertCircle, ShieldCheck, Check, X, AlertTriangle, Activity, Smartphone, Globe,
    HeartPulse, Stethoscope, Pill, Hospital, FlaskConical, Syringe, ClipboardCheck, Microscope,
    Thermometer, BriefcaseMedical, Baby, ShieldPlus, Send, Zap, Wallet, Disc, Gem, Share2, Sun,
    Clock, Calendar, Copy, FileChartPie, Sliders, Bell, User, ArrowRight, Search
} from 'lucide-react';
import ScrollingTags from '../components/ScrollingTags';
import ShapeGrid from '../components/ShapeGrid';
import Waves from '../components/Waves';
import AppleLogoImg from '../assets/Icons:Logos/Apple_logo_black.svg.png';
import AndroidLogoImg from '../assets/Icons:Logos/android.png';
import ai1 from '../assets/ai/ai1.png';
import ai2 from '../assets/ai/ai2.png';
import ai3 from '../assets/ai/ai3.png';
import LogoImage from '../assets/Logo.png';
import '../styles/LandingPage.css';

const features = [
    { icon: <FileText size={16} />, text: 'PDF Upload' },
    { icon: <Brain size={16} />, text: 'AI Analysis' },
    { icon: <TrendingUp size={16} />, text: 'Trend Graphs' },
    { icon: <Users size={16} />, text: 'Family Profiles' },
    { icon: <AlertCircle size={16} />, text: 'Abnormal Alerts' },
    { icon: <ShieldCheck size={16} />, text: 'HIPAA Secure' },
];

const comparisonData = [
    { feature: 'AI Report Analysis', vitals: true, SamsungHealth: false, Fitbit: false, GoogleFit: false },
    { feature: 'Plain English Explanations', vitals: true, SamsungHealth: false, Fitbit: false, GoogleFit: false },
    { feature: 'Abnormal Value Alerts', vitals: true, SamsungHealth: 'partial', Fitbit: 'partial', GoogleFit: 'partial' },
    { feature: 'Trend Graphs', vitals: true, SamsungHealth: true, Fitbit: true, GoogleFit: true },
    { feature: 'Family Profiles', vitals: true, SamsungHealth: false, Fitbit: false, GoogleFit: false },
    { feature: 'PDF Upload', vitals: true, SamsungHealth: false, Fitbit: 'partial', GoogleFit: 'partial' },
    { feature: 'Report Comparison', vitals: true, SamsungHealth: false, Fitbit: false, GoogleFit: false },
    { feature: 'Works Offline', vitals: true, SamsungHealth: true, Fitbit: 'partial', GoogleFit: 'partial' },
];

const testimonials = [
    { name: "Anjali M.", role: "Parenthood", content: "VitalsPlus saved me so much time. I used to keep all my kids' reports in a physical folder. Now it's all visual and clear." },
    { name: "Vikram S.", role: "Health Enthusiast", content: "The trend graphs are amazing. I can see my cholesterol dropping month by month after my diet overhaul." },
    { name: "Dr. Sameer", role: "General Physician", content: "I recommend this to my patients. It makes it so much easier for them to show me their health history." },
    { name: "Lata R.", role: "Caretaker", content: "Managing my elderly parents' health is no longer a headache. The alerts for abnormal values are a lifesaver." },
    { name: "Karan P.", role: "Fitness Coach", content: "The AI summaries actually make sense. No more Googling scary medical terms at midnight." },
    { name: "Sara J.", role: "Working Professional", content: "Clean design, fast upload, and HIPAA secure. Exactly what I was looking for my family." },
];

export default function LandingPage() {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <Waves lineColor="rgba(0, 0, 0, 0.12)" backgroundColor="transparent" />
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="hero-content"
                    >
                        <h1 className="hero-title" aria-label="Build your Health journey with vitals">
                            {["Build", "your"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    style={{ display: 'inline-block', marginRight: i === 1 ? 0 : '0.2em' }}
                                    aria-hidden="true"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <br aria-hidden="true" />
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="hero-title-row"
                                aria-hidden="true"
                            >
                                Health journey
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="hero-handwritten-text"
                                >
                                    *with vitals+
                                </motion.span>
                            </motion.span>
                        </h1>
                        <p className="hero-subtitle">
                            Every feature in Vitals+ is designed to turn confusing medical <br />
                            data into clear, actionable insights — for you and your whole family.
                        </p>

                        <ScrollingTags items={features} />
                    </motion.div>
                </div>
            </section>

            {/* App Preview Section - Positioned exactly below hero */}
            <section id="app-preview" className="app-preview-horizontal">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="preview-horizontal-content"
                    >
                        <div className="preview-video-wrap">
                            <div className="mobile-frame-horizontal">
                                <div className="mobile-notch"></div>
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="mobile-video"
                                    title="VitalsPlus mobile app showing clinical report scanning"
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-app-on-a-smartphone-screen-40242-large.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div className="preview-downloads-horizontal">
                            <div className="download-text">
                                <h3>Take charge of your health journey</h3>
                                <p>Available for iOS and Android</p>
                            </div>
                            <div className="download-buttons-flex">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="app-download-btn outline"
                                    aria-label="Download VitalsPlus on the App Store"
                                >
                                    <img src={AppleLogoImg} alt="Apple logo" className="btn-icon" />
                                    <div className="btn-label">
                                        <span>Download for</span>
                                        <strong>iOS</strong>
                                    </div>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="app-download-btn outline"
                                    aria-label="Get VitalsPlus on Google Play"
                                >
                                    <img src={AndroidLogoImg} alt="Android logo" className="btn-icon" />
                                    <div className="btn-label">
                                        <span>Download for</span>
                                        <strong>Android</strong>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dribbble Style Feature Grid */}
            <section id="features" className="dribbble-feature-section">
                <div className="container">
                    <div className="section-header centered">
                        <div className="section-tag">Features</div>
                        <h2 className="section-title">Know all the features</h2>
                        <p className="section-subtitle">A professional-grade experience for managing your family's vital data.</p>
                    </div>

                    <div className="dribbble-cards-grid">
                        {/* Card 1: AI Insight */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="dribbble-card card-blue"
                        >
                            <div className="card-illustration card-white-block">
                                <img 
                                    src={ai1}
                                    alt="AI Analysis" 
                                    className="feature-card-img"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="card-text-content">
                                <h3>AI Report Analysis</h3>
                                <p>Instantly scan and understand complex lab reports in plain, simple English.</p>
                                <div className="card-footer-link">
                                    <a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        <strong>Learn More</strong><ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Trend Monitor */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="dribbble-card card-amber"
                        >
                            <div className="card-illustration card-white-block">
                                <img 
                                    src={ai2}
                                    alt="Health Tracking" 
                                    className="feature-card-img"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="card-text-content">
                                <h3>Health Trend Tracking</h3>
                                <p>Track your health timeline with beautiful, interactive visualizations and patterns.</p>
                                <div className="card-footer-link">
                                    <a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        <strong>Learn More</strong><ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                            
                        {/* Card 3: Family Hub */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="dribbble-card card-emerald"
                        >
                            <div className="card-illustration card-white-block">
                                <img 
                                    src={ai3}
                                    alt="Family Health" 
                                    className="feature-card-img"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="card-text-content">
                                <h3><a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Family Health Vault</a></h3>
                                <p>One secure digital home for every family member's medical history & vitals.</p>
                                <div className="card-footer-link">
                                    <a href="https://www.gitbook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                                        <strong>Learn More</strong><ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="comparison-section">
                <div className="container">
                     <div className="section-header centered">
                        <div className="section-tag">Comparison</div>
                        <h2 className="section-title">Vitals+ vs everything else</h2>
                        <p className="section-subtitle">See why families choose Vitals+ over paper files, scattered apps, and hospital portals.</p>
                    </div>

                    <div className="comparison-grid-container">
                        <div className="comparison-grid">
                            {/* Feature Labels Column */}
                            <div className="grid-column labels-column">
                                <div className="grid-header-cell"></div>
                                {comparisonData.map((row, i) => (
                                    <div className="grid-cell label-cell" key={i}>{row.feature}</div>
                                ))}
                            </div>
                            
                            {/* VitalsPlus Highlighted Column */}
                            <div className="grid-column highlight-column">
                                <div className="grid-header-cell highlight-header">
                                    <div className="header-brand">
                                        <div className="brand-logo-hex logo-vitals">
                                            <img src={LogoImage} alt="VitalsPlus logo" className="brand-logo-img" />
                                        </div>
                                        <span className="brand-name">Vitals+</span>
                                        <span className="best-tag">BEST CHOICE</span>
                                    </div>
                                </div>
                                {comparisonData.map((row, i) => (
                                    <div className="grid-cell highlight-cell" key={i}>
                                        <div className="check-bg">
                                            <Check size={18} className="icon-blue" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Other Columns */}
                            {[
                                { name: "Samsung Health", color: "#ffff", icon: <img src="src/assets/Icons:Logos/samsung.png" alt="VitalsPlus logo" className="brand-logo-img" />, dataKey: 'samsunghealth' },
                                { name: "FitBit", color: "#fff", icon: <img src="src/assets/Icons:Logos/fitbit.png" alt="VitalsPlus logo" className="brand-logo-img" />, dataKey: 'fitbit' },
                                { name: "Google Fit", color: "#fff", icon: <img src="src/assets/Icons:Logos/googlefit.png" alt="VitalsPlus logo" className="brand-logo-img" />, dataKey: 'googlefit' },
                                { name: "My Fitness Pal", color: "#fff", icon: <img src="src/assets/Icons:Logos/unnamed.jpg" alt="VitalsPlus logo" className="brand-logo-img" />, dataKey: 'legacy' }
                            ].map((col, ci) => (
                                <div className="grid-column" key={ci}>
                                    <div className="grid-header-cell">
                                        <div className="header-brand">
                                            <div className="brand-logo-hex" style={{ backgroundColor: col.color }}>
                                                {col.icon}
                                            </div>
                                            <span className="brand-name">{col.name}</span>
                                        </div>
                                    </div>
                                    {comparisonData.map((row, i) => (
                                        <div className="grid-cell" key={i}>
                                            {row[col.dataKey] === true ? <Check size={20} className="icon-blue" /> :
                                             row[col.dataKey] === 'partial' ? <AlertTriangle size={20} className="icon-gray" /> :
                                             <X size={20} className="icon-gray" />}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Wall of Love Section */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header centered">
                        <div className="section-tag">WALL OF LOVE</div>
                        <h2 className="section-title">Loved by families everywhere</h2>
                    </div>
                    <div className="testimonials-scroll">
                        <div className="testimonials-track">
                            {testimonials.concat(testimonials).map((t, i) => (
                                <div key={i} className="test-card">
                                    <p className="test-content">"{t.content}"</p>
                                    <div className="test-footer">
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
