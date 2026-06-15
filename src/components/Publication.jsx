import { FaBook, FaAward } from 'react-icons/fa';
import './Publication.css';

export default function Publication() {
  return (
    <section id="publication">
      <div className="section">
        <h2 className="section-title grad-text">Publication</h2>

        <div className="pub-card card">
          <div className="pub-top">
            <div className="pub-icon">
              <FaBook />
            </div>
            <div className="pub-badge">
              <FaAward /> IEEE 2025
            </div>
          </div>

          <h3 className="pub-title">
            Advanced Pneumonia Detection in Chest X-Rays via Capsule Networks Integrated with
            Transformer Architectures and Dynamic Routing Attention Mechanisms
          </h3>

          <p className="pub-venue">
            Published in <strong>IEEE</strong>, 2025
          </p>

          <p className="pub-abstract">
            This paper presents a novel hybrid deep learning framework combining Capsule Networks
            with Transformer architectures for improved pneumonia detection in chest X-rays.
            The Dynamic Routing Attention mechanism enhances interpretability by highlighting
            clinically relevant regions, achieving superior accuracy over traditional CNN-based
            approaches while reducing false negatives in clinical screening.
          </p>

          <div className="pub-tags">
            <span className="tag">Capsule Networks</span>
            <span className="tag">Transformers</span>
            <span className="tag">Medical Imaging</span>
            <span className="tag">Deep Learning</span>
            <span className="tag">Attention Mechanisms</span>
            <span className="tag">Computer Vision</span>
          </div>
        </div>
      </div>
    </section>
  );
}
