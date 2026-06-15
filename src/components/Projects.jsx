import { FaBrain, FaHeartbeat, FaUsers } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    icon: <FaUsers />,
    color: '#8b5cf6',
    title: 'Employee Attrition Risk Prediction',
    subtitle: 'HR Analytics · Machine Learning',
    description:
      'Machine learning-based HR analytics system predicting employee attrition using 10,000 employee records and 35 behavioral, demographic, and job-related features.',
    highlights: [
      'Implemented Logistic Regression, Random Forest, and Gradient Boosting models with SMOTE balancing',
      'Built preprocessing pipelines and risk scoring for proactive retention analysis',
      'Streamlit web app with single/batch prediction, HR recommendation engine, downloadable reports',
    ],
    tags: ['Python', 'Scikit-learn', 'SMOTE', 'Streamlit', 'Pandas', 'Matplotlib'],
  },
  {
    icon: <FaBrain />,
    color: '#00d4ff',
    title: 'Pneumonia Detection (Capsule + Transformer)',
    subtitle: 'Medical AI · Deep Learning',
    description:
      'Hybrid deep learning architecture for pneumonia detection from chest X-rays, outperforming traditional CNN-based models in accuracy and interpretability.',
    highlights: [
      'Capsule Networks + Transformers for advanced feature extraction from X-rays',
      'Dynamic Routing Attention to highlight critical regions, improving interpretability',
      'Reduced false negatives, supporting faster and more reliable clinical screening',
    ],
    tags: ['TensorFlow', 'Capsule Networks', 'Transformers', 'Computer Vision', 'Python'],
    badge: 'IEEE Published',
  },
  {
    icon: <FaHeartbeat />,
    color: '#ec4899',
    title: 'Stress Analytics using Wearables',
    subtitle: 'IoT · Real-Time Analytics',
    description:
      'Real-time stress detection system integrating HR, GSR, and temperature sensors with ESP32 wearable devices and a live analytics dashboard.',
    highlights: [
      'Trained LightGBM model on WESAD dataset using engineered physiological features',
      'Achieved 74.5% accuracy on unseen users with cross-subject generalization',
      'Deployed live dashboard with actionable stress monitoring and analytics insights',
    ],
    tags: ['LightGBM', 'ESP32', 'IoT', 'WESAD', 'Python', 'Streamlit'],
    stat: '74.5% Accuracy',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <h2 className="section-title grad-text">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card card">
              {p.badge && <div className="project-badge">{p.badge}</div>}
              {p.stat && <div className="project-badge stat-badge">{p.stat}</div>}

              <div className="proj-icon" style={{ background: `${p.color}18`, borderColor: `${p.color}40`, color: p.color }}>
                {p.icon}
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-subtitle">{p.subtitle}</p>
              <p className="proj-desc">{p.description}</p>

              <ul className="proj-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
