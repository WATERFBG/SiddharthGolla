import { FaCode, FaChartBar, FaTools } from 'react-icons/fa';
import './Skills.css';

const skillGroups = [
  {
    icon: <FaCode />,
    title: 'Languages',
    color: '#00d4ff',
    skills: ['Python', 'SQL'],
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analysis & ML',
    color: '#8b5cf6',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'LightGBM'],
  },
  {
    icon: <FaChartBar />,
    title: 'Visualization & BI',
    color: '#ec4899',
    skills: ['Power BI', 'Tableau', 'Excel', 'Google Analytics', 'Jamovi'],
  },
  {
    icon: <FaTools />,
    title: 'Dev Tools',
    color: '#10b981',
    skills: ['GitHub', 'Git', 'Streamlit', 'Figma', 'Canva'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section">
        <h2 className="section-title grad-text">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group card">
              <div
                className="sg-icon"
                style={{
                  background: `${group.color}18`,
                  borderColor: `${group.color}40`,
                  color: group.color,
                }}
              >
                {group.icon}
              </div>
              <h3 className="sg-title">{group.title}</h3>
              <div className="sg-pills">
                {group.skills.map((s) => (
                  <span key={s} className="skill-pill" style={{ '--accent': group.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
