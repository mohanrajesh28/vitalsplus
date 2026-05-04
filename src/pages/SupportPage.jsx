import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FileText, Users, Brain, CreditCard, ShieldCheck, MessageCircle, ChevronDown, ChevronRight, Mail, Smartphone, LifeBuoy, TrendingUp } from 'lucide-react';
import '../styles/SupportPage.css';

const quickHelp = [
  { title: 'Uploading Reports', desc: 'Learn how to upload PDF lab reports, supported formats, and what happens after upload.', icon: <FileText className="icon-blue" /> },
  { title: 'Managing Family Profiles', desc: 'Add or remove family members, switch profiles, and manage permissions for each profile.', icon: <Users className="icon-orange" /> },
  { title: 'Reading Your Insights', desc: 'Understand AI-generated summaries, color codes, health trends, and what to do next.', icon: <Brain className="icon-purple" /> },
  { title: 'Billing & Subscription', desc: 'Manage your plan, change billing method, view invoices, or cancel your subscription.', icon: <CreditCard className="icon-green" /> },
  { title: 'Privacy & Security', desc: 'How your health data is stored, encrypted, and protected. HIPAA compliance details.', icon: <ShieldCheck className="icon-blue" /> },
  { title: 'Contact Support', desc: "Can't find your answer? Chat with our support team or submit a help ticket directly.", icon: <MessageCircle className="icon-orange" /> },
];

const faqs = [
  { q: 'What PDF formats does VitalsPlus support?', a: 'VitalsPlus supports all standard PDF formats from major diagnostic labs including Quest Diagnostics, Labcorp, and hospital portals. We also support clear photos of printed reports.' },
  { q: 'How long does report analysis take?', a: 'Most reports are analyzed in less than 60 seconds. Larger reports with multiple pages may take up to 2 minutes.' },
  { q: 'Can I upload reports for family members?', a: 'Yes! You can create multiple profiles under one account and upload reports specifically for each person.' },
  { q: 'What if my report isn\'t being read correctly?', a: 'If you encounter an error, you can flag the report for manual review by our team, or use the manual entry tool to correct specific values.' },
  { q: 'Is my health data secure?', a: 'Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your data is never sold to third parties.' },
  { q: 'Can I export or download my health data?', a: 'Yes, you can export your entire health history or specific trend graphs as a PDF or CSV at any time.' },
  { q: 'How do I reset my password?', a: 'Go to Account Settings > Security > Reset Password. You will receive an email with instructions.' },
  { q: 'How do I delete my account?', a: 'You can delete your account from the Profile settings. This will permanently erase all your data from our servers.' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="support-page">
      {/* Hero Search Section */}
      <section className="support-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="support-hero-content"
          >
            <h1>How can we help you?</h1>
            <p>Search our help center or browse articles below. Our team typically replies within 2 hours.</p>
            
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="Search for help... e.g. 'upload PDF', 'family profiles', 'export data'" />
              <button className="search-btn"><Search size={18} /></button>
            </div>
            
            <div className="status-indicators">
              <div className="status-item"><span className="dot green"></span> All systems operational</div>
              <div className="status-item"><span className="dot green"></span> AI Analysis: Online</div>
              <div className="status-item"><span className="dot green"></span> App (iOS/Android): Online</div>
              <div className="status-item"><span className="dot yellow"></span> Report processing: Minor delays</div>
              <a href="#" className="view-status">View Status Page →</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="quick-help">
        <div className="container">
          <div className="section-tag centered">🚀 QUICK HELP</div>
          <h2 className="section-title centered">What do you need <span>help with?</span></h2>
          
          <div className="quick-help-grid">
            {quickHelp.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="quick-help-card"
              >
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className="view-articles">View articles →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="section-tag">📬 GET IN TOUCH</div>
            <h2 className="section-title">Still need <span>help?</span></h2>
            <p className="section-subtitle">Our support team is here for you. Pick the channel that works best.</p>
            
            <div className="contact-methods">
              <div className="method-card">
                <div className="method-icon"><MessageCircle size={24} /></div>
                <div className="method-text">
                  <h4>Live Chat</h4>
                  <p>Chat with a real person from our team instantly. No bots, no waiting.</p>
                  <span className="status"><span className="dot green"></span> Online now — Avg response: 3 min</span>
                </div>
              </div>
              <div className="method-card">
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-text">
                  <h4>Email Support</h4>
                  <p>Send us a detailed message. We'll reply with a full resolution within 2-4 hours.</p>
                  <span className="email">support@vitalsplus.com</span>
                </div>
              </div>
              <div className="method-card">
                <div className="method-icon"><Smartphone size={24} /></div>
                <div className="method-text">
                  <h4>In-App Support</h4>
                  <p>Tap "Help" in the VitalsPlus app for context-aware support directly from your current screen.</p>
                  <span className="note">Available on iOS & Android</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Submit a Support Ticket</h3>
            <p>Fill in the details below and our team will get back to you promptly.</p>
            <form className="support-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Ravi" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Kumar" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="ravi@example.com" />
              </div>
              <div className="form-group">
                <label>Issue Category</label>
                <select>
                  <option>Select a category...</option>
                  <option>Uploading Reports</option>
                  <option>Family Profiles</option>
                  <option>Billing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Brief description of your issue" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your issue in detail. Include any error messages, steps to reproduce, or screenshots if helpful."></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Ticket</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-tag centered">❓ FAQ</div>
          <h2 className="section-title centered">Frequently asked <span>questions</span></h2>
          
          <div className="faq-grid">
            <div className="faq-col">
              <div className="faq-group-title"><LifeBuoy size={18} /> UPLOADS & REPORTS</div>
              {faqs.slice(0, 4).map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="faq-col">
              <div className="faq-group-title"><ShieldCheck size={18} /> PRIVACY & ACCOUNT</div>
              {faqs.slice(4, 8).map((faq, i) => {
                const index = i + 4;
                return (
                  <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      {faq.q}
                      <ChevronDown size={18} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="faq-answer"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Chat Button */}
      <div className="floating-chat">
        <MessageCircle size={24} />
        <span className="badge">1</span>
      </div>
    </div>
  );
}
