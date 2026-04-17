import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Brain, TrendingUp, Users, AlertCircle, ShieldCheck, Check, X, AlertTriangle, Activity, Smartphone, Globe,
    HeartPulse, Stethoscope, Pill, Hospital, FlaskConical, Syringe, ClipboardCheck, Microscope,
    Thermometer, BriefcaseMedical, Baby, ShieldPlus, Send, Zap, Wallet, Disc, Gem, Share2, Sun,
    Clock, Calendar, Copy, FileChartPie, Sliders, Bell, User
} from 'lucide-react';
import ScrollingTags from '../components/ScrollingTags';
import BorderGlow from '../components/BorderGlow';
import ShapeGrid from '../components/ShapeGrid';
import logoImage from '../assets/Group 221.png';
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
    { feature: 'AI Report Analysis', vitals: true, paper: false, app: false, portal: false },
    { feature: 'Plain English Explanations', vitals: true, paper: false, app: false, portal: false },
    { feature: 'Abnormal Value Alerts', vitals: true, paper: false, app: 'partial', portal: false },
    { feature: 'Trend Graphs', vitals: true, paper: false, app: 'partial', portal: 'partial' },
    { feature: 'Family Profiles', vitals: true, paper: false, app: false, portal: false },
    { feature: 'PDF Upload', vitals: true, paper: false, app: 'partial', portal: false },
    { feature: 'Report Comparison', vitals: true, paper: false, app: false, portal: false },
    { feature: 'Works Offline', vitals: true, paper: true, app: false, portal: 'partial' },
];

const testimonials = [
    { name: "Anjali M.", role: "Parenthood", content: "VitalsPlus saved me so much time. I used to keep all my kids' reports in a physical folder. Now it's all visual and clear." },
    { name: "Vikram S.", role: "Health Enthusiast", content: "The trend graphs are amazing. I can see my cholesterol dropping month by month after my diet overhaul." },
    { name: "Dr. Sameer", role: "General Physician", content: "I recommend this to my patients. It makes it so much easier for them to show me their health history." },
    { name: "Lata R.", role: "Caretaker", content: "Managing my elderly parents' health is no longer a headache. The alerts for abnormal values are a lifesaver." },
    { name: "Karan P.", role: "Fitness Coach", content: "The AI summaries actually make sense. No more Googling scary medical terms at midnight." },
    { name: "Sara J.", role: "Working Professional", content: "Clean design, fast upload, and HIPAA secure. Exactly what I was looking for my family." },
];

const pricingPlans = [
    { name: "Basic", price: "Free", features: ["1 Family Profile", "5 Reports / Month", "1 yr Trend History", "Email Support"], current: false },
    { name: "Plus", price: "₹499", period: "/mo", features: ["5 Family Profiles", "Unlimited Reports", "Lifetime History", "Priority Support", "AI Deep Insights"], current: true },
    { name: "Family", price: "₹999", period: "/mo", features: ["Unlimited Profiles", "Unlimited Reports", "Advanced Sharing", "24/7 Support", "Family Health Score"], current: false },
];

export default function LandingPage() {
    return (
        <div className="landing-page">
            {/* Aurora Background Glows */}
            <div className="aurora-glow glow-1"></div>
            <div className="aurora-glow glow-2"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="hero-content"
                    >
                        <div className="hero-banner">
                            <span className="banner-tag">New</span>
                            <span className="banner-text">Update on 24th April →</span>
                        </div>
                        <div className="section-tag">✨ All Features</div>
                        <h1 className="hero-title" aria-label="Built your Health journey with vitals">
                            {["Built", "your"].map((word, i) => (
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
                                    *with vitals
                                </motion.span>
                            </motion.span>
                        </h1>
                        <p className="hero-subtitle">
                            Every feature in VitalsPlus is designed to turn confusing medical <br />
                            data into clear, actionable insights — for you and your whole family.
                        </p>

                        <ScrollingTags items={features} />
                    </motion.div>
                </div>
                <div className="hero-bg-dots">
                    <ShapeGrid
                        direction="diagonal"
                        speed={0.3}
                        borderColor="rgba(148, 163, 184, 0.15)"
                        hoverFillColor="rgba(37, 99, 235, 0.1)"
                        squareSize={40}
                        shape="hexagon"
                        hoverTrailAmount={15}
                    />
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
                                <h3>Take control of your health today</h3>
                                <p>Available for iOS and Android</p>
                            </div>
                            <div className="download-buttons-flex">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="app-download-btn outline"
                                    aria-label="Download VitalsPlus on the App Store"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                        alt=""
                                        style={{ width: 24, height: 24, filter: 'invert(1)' }}
                                        referrerPolicy="no-referrer"
                                    />
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
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/250px-Android_robot.svg.png"
                                        alt=""
                                        style={{ width: 24, height: 24 }}
                                        referrerPolicy="no-referrer"
                                    />
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

            {/* Trusted By Section (Medical Arc Marquee) */}
            <section className="trusted-by-arc">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="arc-header"
                    >
                        <p className="arc-label">
                            Trusted by over <span className="text-blue">1,500</span> families and health professionals.
                        </p>
                    </motion.div>

                    <div className="arc-marquee-wrapper">
                        <div className="arc-marquee-mask">
                            <motion.div
                                className="arc-marquee-track"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[
                                    { icon: <HeartPulse size={24} />, bg: '#fee2e2', color: '#ef4444', label: 'Pulse' },
                                    { icon: <Stethoscope size={24} />, bg: '#f1f5f9', color: '#64748b', label: 'Clinic' },
                                    { icon: <Pill size={24} />, bg: '#fffbeb', color: '#f59e0b', label: 'Pharma' },
                                    { icon: <Hospital size={24} />, bg: '#eff6ff', color: '#2563eb', label: 'Health' },
                                    { icon: <FlaskConical size={24} />, bg: '#fdf2f8', color: '#ec4899', label: 'Labs' },
                                    { icon: <Activity size={24} />, bg: '#f0f9ff', color: '#0ea5e9', label: 'Vital' },
                                    { icon: <Microscope size={24} />, bg: '#f5f3ff', color: '#8b5cf6', label: 'Science' },
                                    { icon: <ShieldPlus size={24} />, bg: '#ecfdf5', color: '#10b981', label: 'Safety' },
                                ].concat([
                                    { icon: <HeartPulse size={24} />, bg: '#fee2e2', color: '#ef4444', label: 'Pulse' },
                                    { icon: <Stethoscope size={24} />, bg: '#f1f5f9', color: '#64748b', label: 'Clinic' },
                                    { icon: <Pill size={24} />, bg: '#fffbeb', color: '#f59e0b', label: 'Pharma' },
                                    { icon: <Hospital size={24} />, bg: '#eff6ff', color: '#2563eb', label: 'Health' },
                                    { icon: <FlaskConical size={24} />, bg: '#fdf2f8', color: '#ec4899', label: 'Labs' },
                                    { icon: <Activity size={24} />, bg: '#f0f9ff', color: '#0ea5e9', label: 'Vital' },
                                    { icon: <Microscope size={24} />, bg: '#f5f3ff', color: '#8b5cf6', label: 'Science' },
                                    { icon: <ShieldPlus size={24} />, bg: '#ecfdf5', color: '#10b981', label: 'Safety' },
                                ]).map((logo, i) => (
                                    <div
                                        key={i}
                                        className="arc-marquee-item"
                                        style={{
                                            backgroundColor: logo.bg,
                                            color: logo.color
                                        }}
                                    >
                                        <div className="arc-item-inner">
                                            {logo.icon}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Feature 01 */}
            <section id="features" className="feature-section-alt">
                <div className="container">
                    <div className="feature-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="feature-text"
                        >
                            <div className="feature-num">🧬 Core Feature 01</div>
                            <h2>Upload any medical report in seconds</h2>
                            <p>Simply share any PDF lab report from your phone, email, or files app. VitalsPlus extracts all values automatically — no manual typing required.</p>
                            <ul className="feature-list" role="list">
                                <li><FileText size={18} /> Works with all lab report formats — blood work, urine, lipid panels, thyroid, and more</li>
                                <li><Brain size={18} /> AI reads handwritten and printed reports alike</li>
                                <li><ShieldPlus size={18} /> Reports stored securely and organized by date & category</li>
                                <li><Clock size={18} /> Access any report instantly, any time</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="feature-image"
                        >
                            <div className="mockup-container report-theme">
                                <div className="mockup-report">
                                    <div className="report-header">
                                        <div className="report-title">Blood Work Report</div>
                                        <div className="ai-badge">✓ AI Analyzed</div>
                                    </div>
                                    <div className="report-content">
                                        <div className="report-info">
                                            <strong>Complete Blood Count</strong> Dr. Mehta • June 14, 2025 • Apollo Labs
                                        </div>
                                        <div className="ai-summary-callout">
                                            <div className="summary-icon">💡</div>
                                            <div className="summary-text">
                                                <strong>AI Summary:</strong> Your hemoglobin and WBC are within normal range. Cholesterol is slightly elevated — monitor diet and consider a follow-up in 3 months.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Feature 02 */}
            <section className="feature-section-main">
                <div className="container">
                    <div className="feature-grid reverse">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="feature-text"
                        >
                            <div className="feature-num">📈 Core Feature 02</div>
                            <h2>Beautiful trend graphs for every metric</h2>
                            <p>See exactly how your health evolves over time. VitalsPlus automatically plots date-wise trends for every value extracted from your reports.</p>
                            <ul className="feature-list" role="list">
                                <li><Activity size={18} /> Track Blood Sugar, Hemoglobin, Cholesterol, BP, and 50+ other values</li>
                                <li><Calendar size={18} /> Weekly, monthly, and yearly views</li>
                                <li><Zap size={18} /> Color-coded lines for normal / borderline / abnormal ranges</li>
                                <li><Copy size={18} /> Compare any two reports side-by-side</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="feature-image highlight"
                        >
                            <div className="mockup-container trends-theme">
                                <div className="mockup-trends">
                                    <div className="trends-header">
                                        <div className="trends-tabs">
                                            <span>HbA1c</span>
                                            <span className="active">Blood Sugar</span>
                                        </div>
                                        <div className="trends-title">Health Trends 📊</div>
                                    </div>
                                    <div className="trends-data-row">
                                        <div className="trend-stat">
                                            <span className="mo">Mo Ago 6</span>
                                            <span className="val">mg/dL 102</span>
                                            <span className="status normal">Normal</span>
                                        </div>
                                        <div className="trend-stat">
                                            <span className="mo">Mo Ago 3</span>
                                            <span className="val">mg/dL 108</span>
                                            <span className="status normal">Normal</span>
                                        </div>
                                        <div className="trend-stat">
                                            <span className="mo">Current</span>
                                            <span className="val">mg/dL 118</span>
                                            <span className="status watch">Watch</span>
                                        </div>
                                    </div>
                                    <div className="trends-chart">
                                        <div className="chart-title">Blood Sugar — Last 7 Months</div>
                                        <div className="chart-area">
                                            <svg viewBox="0 0 400 100" className="chart-svg">
                                                <path d="M0,80 Q100,75 200,60 T400,30 V100 H0 Z" fill="rgba(37, 99, 235, 0.08)" />
                                                <path d="M0,80 Q100,75 200,60 T400,30" fill="none" stroke="#2563eb" strokeWidth="2" />
                                            </svg>
                                            <div className="chart-xaxis">
                                                <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-alert-bar">
                                        <strong>Trend Alert:</strong> Your blood sugar has increased by 📈 15% over 6 months. Consider tracking post-meal readings and consulting your doctor.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Feature 03 */}
            <section className="families-section">
                <div className="container">
                    <div className="feature-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="feature-text"
                        >
                            <div className="feature-num">👨‍👩‍👧‍👦 Core Feature 03</div>
                            <h2>Manage your entire family's health in one place</h2>
                            <p>Create profiles for every family member — parents, children, grandparents. Switch between them instantly and track each person's unique health journey.</p>
                            <ul className="feature-list" role="list">
                                <li><Users size={18} /> Unlimited family profiles under one account</li>
                                <li><FileChartPie size={18} /> Each profile has its own reports, trends, and insights</li>
                                <li><Sliders size={18} /> Set age-specific normal ranges per profile</li>
                                <li><Bell size={18} /> Get notified when a family member has an abnormal result</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="feature-image"
                        >
                            <div className="mockup-container family-theme">
                                <div className="mockup-family">
                                    <div className="family-header">
                                        <div className="family-title">👥 Family Profiles</div>
                                        <div className="add-member-btn">+</div>
                                    </div>
                                    <div className="family-list" role="list" aria-label="Family health profiles">
                                        <div className="family-item" role="listitem">
                                            <div className="avatar" aria-hidden="true" style={{ background: '#e0f2fe' }}>
                                                <User size={20} color="#0369a1" />
                                            </div>
                                            <div className="info">
                                                <strong>Ravi Kumar</strong>
                                                <span>You • 34 years • 8 reports</span>
                                            </div>
                                            <div className="status-pill watch">Watch</div>
                                        </div>
                                        <div className="family-item" role="listitem">
                                            <div className="avatar" aria-hidden="true" style={{ background: '#fef3c7' }}>
                                                <span style={{ fontSize: '18px' }}>👩</span>
                                            </div>
                                            <div className="info">
                                                <strong>Priya Kumar</strong>
                                                <span>Spouse • 31 years • 5 reports</span>
                                            </div>
                                            <div className="status-pill normal">Normal</div>
                                        </div>
                                        <div className="family-item" role="listitem">
                                            <div className="avatar" aria-hidden="true" style={{ background: '#fee2e2' }}>
                                                <span style={{ fontSize: '18px' }}>👴</span>
                                            </div>
                                            <div className="info">
                                                <strong>Rajesh (Dad)</strong>
                                                <span>Father • 62 years • 12 reports</span>
                                            </div>
                                            <div className="status-pill alert">Alert</div>
                                        </div>
                                        <div className="family-item" role="listitem">
                                            <div className="avatar" aria-hidden="true" style={{ background: '#dcfce7' }}>
                                                <span style={{ fontSize: '18px' }}>👵</span>
                                            </div>
                                            <div className="info">
                                                <strong>Latha (Mom)</strong>
                                                <span>Mother • 59 years • 9 reports</span>
                                            </div>
                                            <div className="status-pill normal">Normal</div>
                                        </div>
                                    </div>
                                    <div className="family-alert-card">
                                        <div className="alert-content">
                                            <span className="icon">🔔</span>
                                            <span><strong>Alert: Rajesh's HbA1c reading from June 10 is above the recommended range. Tap to view details.</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Everything in VitalsPlus - Static Grid Version */}
            <section id="how-it-works" className="all-features-section">
                <div className="container">
                    <div className="section-header centered left-aligned">
                        <div className="section-tag-pill">📋 Complete Feature List</div>
                        <h2 className="section-title-huge">Everything in <span>VitalsPlus</span></h2>
                        <p className="section-subtitle-muted">8 powerful capabilities built to give you full control over your health data.</p>
                    </div>

                    <div className="features-static-grid">
                        {[
                            {
                                id: "01",
                                icon: "📩",
                                title: "PDF Report Upload",
                                desc: "Upload any lab report PDF from your device, email, or cloud storage instantly."
                            },
                            {
                                id: "02",
                                icon: "📂",
                                title: "Organized Viewing",
                                desc: "Reports sorted by date, category, and family member. Find anything in seconds."
                            },
                            {
                                id: "03",
                                icon: "📖",
                                title: "Simplified Insights",
                                desc: "Every medical term decoded into plain English so you actually understand your results."
                            },
                            {
                                id: "04",
                                icon: "🚦",
                                title: "Abnormal Detection",
                                desc: "Automatic color-coded flags for values outside normal ranges — never miss a critical marker."
                            },
                            {
                                id: "05",
                                icon: "⚖️",
                                title: "Vitals Tracking",
                                desc: "Manually log and track Weight, Blood Pressure, Blood Sugar, and more from a single dashboard."
                            },
                            {
                                id: "06",
                                icon: "📅",
                                title: "Trend Graphs",
                                desc: "Date-wise visual charts showing how every health metric changes over time."
                            },
                            {
                                id: "07",
                                icon: "🔄",
                                title: "Report Comparison",
                                desc: "Compare any two reports side-by-side to track progress between doctor visits."
                            },
                            {
                                id: "08",
                                icon: "👨‍👩‍👧‍👦",
                                title: "Family Management",
                                desc: "Multiple profiles in one account. Manage health records for every family member easily."
                            }
                        ].map((f, i) => (
                            <div key={i} className="feature-grid-card">
                                <div className="card-num-small">{f.id}</div>
                                <div className="card-emoji-large">{f.icon}</div>
                                <h3 className="card-title-bold">{f.title}</h3>
                                <p className="card-desc-muted">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="comparison-section">
                <div className="container">
                    <div className="section-header centered">
                        <div className="section-tag">📊 Comparison</div>
                        <h2 className="section-title">VitalsPlus vs everything else</h2>
                        <p className="section-subtitle">See why families choose VitalsPlus over paper files, scattered apps, and hospital portals.</p>
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
                            <BorderGlow
                                className="grid-column highlight-column"
                                glowColor="210 100 50"
                                fillOpacity={0.12}
                                borderRadius={16}
                                animated={true}
                                glowIntensity={1.2}
                            >
                                <div className="grid-header-cell highlight-header">
                                    <div className="header-brand">
                                        <div className="brand-logo-hex logo-vitals">
                                            <img src={logoImage} alt="VitalsPlus Logo" style={{ height: '28px' }} />
                                        </div>
                                        <span className="brand-name">VitalsPlus</span>
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
                            </BorderGlow>

                            {/* Other Columns */}
                            {[
                                { name: "Paper Files", color: "#F3BA2F", icon: <Activity size={24} color="white" />, dataKey: 'paper' },
                                { name: "Other Apps", color: "#0052FF", icon: <Smartphone size={24} color="white" />, dataKey: 'app' },
                                { name: "Hos Portals", color: "#000000", icon: <Globe size={24} color="white" />, dataKey: 'portal' },
                                { name: "Legacy SW", color: "#5835FF", icon: <TrendingUp size={24} color="white" />, dataKey: 'legacy' }
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
                        <div className="section-tag">❤️ WALL OF LOVE</div>
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

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-header centered">
                        <div className="section-tag">💰 PRICING</div>
                        <h2 className="section-title">Health tracking for every family</h2>
                    </div>
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, i) => (
                            <motion.article
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`pricing-card ${plan.current ? 'premium' : ''}`}
                                aria-labelledby={`plan-name-${i}`}
                            >
                                <h3 id={`plan-name-${i}`}>{plan.name}</h3>
                                <div className="price-wrap">
                                    <span className="price">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                                <ul className="plan-features" aria-label={`${plan.name} plan features`}>
                                    {plan.features.map((f, fi) => (
                                        <li key={fi}><Check size={16} aria-hidden="true" /> {f}</li>
                                    ))}
                                </ul>
                                <button
                                    className={`plan-btn ${plan.current ? 'primary' : ''}`}
                                    aria-label={`Select ${plan.name} plan`}
                                >
                                    {plan.name === 'Basic' ? 'Get Started' : 'Upgrade Now'}
                                </button>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
