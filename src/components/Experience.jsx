import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        <h2 className="section-title grad-text">Experience</h2>

        <div className="timeline">
          <div className="timeline-item card">
            <div className="tl-header">
              <div className="tl-icon">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="tl-role">Data Analyst Intern</h3>
                <p className="tl-company">Codegnan</p>
                <div className="tl-meta">
                  <span><FaCalendarAlt /> Aug 2023 – Oct 2023</span>
                  <span><FaMapMarkerAlt /> Vijayawada, AP</span>
                </div>
              </div>
            </div>

            <ul className="tl-points">
              <li>
                Developed a <strong>voice-controlled automation system</strong> using embedded integration,
                enabling hands-free control of devices.
              </li>
              <li>
                Quickly adapted to new tools and development workflows,
                <strong> accelerating implementation and delivery</strong>.
              </li>
            </ul>

            <div className="tl-tags">
              <span className="tag">Embedded Systems</span>
              <span className="tag">Voice Automation</span>
              <span className="tag">Python</span>
              <span className="tag">IoT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
