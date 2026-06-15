import { FaEnvelope, FaPhone, FaGithub, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="grad-text footer-name">Siddharth Golla</span>
            <p className="footer-tagline">
              Building intelligent systems with data, ML & passion.
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:gssai2003@gmail.com" className="footer-link">
              <FaEnvelope /> gssai2003@gmail.com
            </a>
            <a href="tel:9032740753" className="footer-link">
              <FaPhone /> 9032740753
            </a>
            <a
              href="https://github.com/gssai2003"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          © {new Date().getFullYear()} Siddharth Golla. Built with{' '}
          <FaHeart className="heart" /> using React.js
        </p>
      </div>
    </footer>
  );
}
