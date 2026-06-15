import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="section">
        <h2 className="section-title grad-text">Education</h2>
        <div className="edu-card card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-body">
            <h3 className="edu-degree">M.Tech (Integrated) CSE — Business Analytics</h3>
            <p className="edu-school">Vellore Institute of Technology, Chennai</p>
            <div className="edu-meta">
              <span><FaCalendarAlt /> 2021 – 2026</span>
              <span><FaMapMarkerAlt /> Chennai, TN</span>
            </div>
            <p className="edu-desc">
              Specializing in Business Analytics with a strong foundation in machine learning,
              deep learning, data engineering, and statistical modeling. Active researcher
              with a published IEEE paper in medical imaging AI.
            </p>
            <div className="edu-tags">
              <span className="tag">Machine Learning</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">Business Analytics</span>
              <span className="tag">Data Engineering</span>
              <span className="tag">Statistical Modeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
