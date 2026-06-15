import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const roles = ['Data Scientist', 'ML Engineer', 'Business Analyst', 'AI Researcher'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero" id="about">
      <div className="hero-bg-orbs">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="grad-text">Siddharth Golla</span>
        </h1>

        <h2 className="hero-role">
          <span className="typed">{displayed}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-bio">
          M.Tech CSE (Business Analytics) student at VIT Chennai, passionate about
          building intelligent systems — from predictive ML models and deep learning
          architectures to real-time IoT analytics dashboards.
        </p>

        <div className="hero-contacts">
          <a href="tel:9032740753" className="contact-chip">
            <FaPhone /> 9032740753
          </a>
          <a href="mailto:gssai2003@gmail.com" className="contact-chip">
            <FaEnvelope /> gssai2003@gmail.com
          </a>
          <span className="contact-chip">
            <FaMapMarkerAlt /> Vijayawada, AP
          </span>
        </div>

        <div className="hero-actions">
          <Link to="projects" smooth duration={500} offset={-70}>
            <button className="btn btn-primary">View Projects</button>
          </Link>
          <a href="mailto:gssai2003@gmail.com" className="btn btn-outline">
            <FaEnvelope /> Contact Me
          </a>
          <a
            href="https://github.com/gssai2003"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="avatar-ring">
          <div className="avatar-inner">
            <span className="avatar-initials grad-text">SG</span>
          </div>
          <svg className="ring-svg" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="8 6" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="floating-stat stat1">
          <span className="stat-val">3+</span>
          <span className="stat-label">ML Projects</span>
        </div>
        <div className="floating-stat stat2">
          <span className="stat-val">IEEE</span>
          <span className="stat-label">Published</span>
        </div>
        <div className="floating-stat stat3">
          <span className="stat-val">74.5%</span>
          <span className="stat-label">Model Accuracy</span>
        </div>
      </div>
    </section>
  );
}
