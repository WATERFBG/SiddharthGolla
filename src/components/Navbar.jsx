import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const links = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Publication', 'Videos'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo grad-text">Siddharth Golla</span>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
        </button>

        <ul className={`nav-links ${open ? 'visible' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <Link
                to={l.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="active"
                onClick={() => setOpen(false)}
              >
                {l}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:gssai2003@gmail.com"
              className="btn btn-primary nav-cta"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
