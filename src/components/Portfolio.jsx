import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight, GitBranch, Mail } from 'lucide-react';
import { useReveal, useTypewriter, useCountUp } from '../hooks/use-portfolio';
import Cursor from './Cursor';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publication', label: 'Publication' },
];

/* =================== NAV =================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#1e1e1e] bg-[#0a0a0a]/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-10">
        <button onClick={() => go('hero')} className="grid h-9 w-9 place-items-center border border-[#1e1e1e] font-mono text-xs font-bold tracking-tighter text-[#f0ede8] transition-colors hover:border-[#e8ff00] hover:text-[#e8ff00]">
          SG
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} className="nav-link font-mono text-xs uppercase tracking-widest">
              <span className="text-[#6b6b6b]">/</span> {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => go('contact')} className="group hidden items-center gap-2 rounded-full border border-[#f0ede8] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#f0ede8] transition-colors duration-300 hover:border-[#e8ff00] hover:bg-[#e8ff00] hover:text-black sm:inline-flex">
            Hire Me <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:rotate-45" />
          </button>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center border border-[#1e1e1e] text-[#f0ede8] lg:hidden">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#1e1e1e] bg-[#0a0a0a] lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4 sm:px-10">
            {NAV.map((n, i) => (
              <button key={n.id} onClick={() => go(n.id)} className="flex items-baseline gap-3 border-b border-[#161616] py-3 text-left">
                <span className="font-mono text-xs text-[#e8ff00]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-base text-[#f0ede8]">{n.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* =================== HERO =================== */
function Hero() {
  const role = useTypewriter(['Data Scientist', 'ML Engineer', 'Business Analyst', 'AI Researcher']);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1e1e1e] px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-[#f0ede8]">
            <span className="live-dot relative inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            Available for opportunities
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-[#6b6b6b] sm:inline">Portfolio · 2026 — Edition 01</span>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1400px] px-5 sm:mt-20 sm:px-10">
        <HeroName />
        <div className="hairline mt-8" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-y-4">
          <p className="font-mono text-sm text-[#6b6b6b] sm:text-base">
            <span className="text-[#f0ede8]">{role}</span>
            <span className="caret ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-[#e8ff00]" />
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">(Currently) M.Tech CSE — VIT Chennai</p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 px-5 sm:px-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="max-w-2xl text-lg leading-relaxed text-[#f0ede8] sm:text-xl">
          Building intelligent systems — from predictive ML models and deep learning architectures to real-time IoT analytics dashboards. M.Tech CSE (Business Analytics) student at VIT Chennai with an IEEE-published research record.
        </p>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
            <a href="tel:9032740753" className="text-[#f0ede8] transition-colors hover:text-[#e8ff00]">+91 90327 40753</a>
            <span className="text-[#1e1e1e]">/</span>
            <a href="mailto:gssai2003@gmail.com" className="text-[#f0ede8] transition-colors hover:text-[#e8ff00]">gssai2003@gmail.com</a>
            <span className="text-[#1e1e1e]">/</span>
            <span>Vijayawada, AP</span>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-2 bg-[#e8ff00] px-5 py-3 font-mono text-xs uppercase tracking-widest text-black transition-transform duration-300 hover:-translate-y-0.5">
              View Projects <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
            </button>
            <a href="https://github.com/gssai2003" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#1e1e1e] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[#f0ede8] transition-colors duration-300 hover:border-[#f0ede8]">
              <GitBranch size={13} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddharthagolla" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#1e1e1e] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[#f0ede8] transition-colors duration-300 hover:border-[#f0ede8]">
              <LinkedinIcon size={13} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-y border-[#1e1e1e]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-[#1e1e1e] px-5 sm:divide-y-0 sm:divide-x sm:px-10 md:grid-cols-3">
          <StatBlock value={4} suffix="+" label="Projects Shipped" />
          <StatBlock value={1} label="IEEE Published Research Paper" textValue prefix="IEEE · " />
          <StatBlock value={74.5} suffix="%" label="WESAD Model Accuracy" decimals={1} />
        </div>
      </div>

      <div className="overflow-hidden border-b border-[#1e1e1e] py-5">
        <Marquee items={['Python','TensorFlow','LightGBM','Streamlit','Pandas','Power BI','Scikit-learn','Transformers','Capsule Networks','IoT','Deep Learning','Business Analytics','ESP32','SQL','Tableau']} />
      </div>
    </section>
  );
}

function HeroName() {
  const ref = useReveal();
  return (
    <div ref={ref} className="r-up">
      <h1 className="font-black leading-none tracking-tighter" style={{ fontSize: 'clamp(3.5rem,12vw,11rem)' }}>
        <span className="block text-[#f0ede8]">SIDDHARTH</span>
        <span className="relative inline-block">
          <span className="text-[#f0ede8]">GOLLA</span>
          <span className="absolute -bottom-1 left-0 block w-full bg-[#e8ff00]" style={{ height: '8px' }} />
        </span>
      </h1>
    </div>
  );
}

function StatBlock({ value, suffix = '', prefix = '', label, decimals = 0, textValue = false }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref} className="px-2 py-8 sm:px-8">
      <p className="text-5xl font-black tracking-tight text-[#f0ede8] sm:text-6xl">
        {textValue ? (
          <span><span className="text-[#e8ff00]">{prefix}</span>{v >= value ? value : Math.round(v)}</span>
        ) : (
          <>{prefix}{v.toFixed(decimals)}<span className="text-[#e8ff00]">{suffix}</span></>
        )}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">{label}</p>
    </div>
  );
}

function Marquee({ items }) {
  const list = [...items, ...items];
  return (
    <div className="marquee-track">
      {list.map((s, i) => (
        <span key={i} className="flex items-center gap-8 px-6 text-2xl font-black uppercase tracking-tight text-[#f0ede8] sm:text-3xl">
          {s}<span className="text-[#e8ff00]">✦</span>
        </span>
      ))}
    </div>
  );
}

/* =================== ICONS =================== */
function LinkedinIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* =================== SECTION HEADER =================== */
function SectionHeader({ num, eyebrow, title }) {
  const ref = useReveal();
  return (
    <div className="mb-14 sm:mb-20">
      <div className="mb-3 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#e8ff00]">{num}</span>
        <span className="block h-px w-12 bg-[#e8ff00]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">{eyebrow}</span>
      </div>
      <div ref={ref} className="r-up overflow-hidden">
        <h2 className="font-black leading-none tracking-tighter text-[#f0ede8]" style={{ fontSize: 'clamp(2.25rem,6vw,5rem)' }}>{title}</h2>
      </div>
    </div>
  );
}

/* =================== EDUCATION =================== */
function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <SectionHeader num="01 — EDU" eyebrow="Academic" title="Studied / Learning." />
        <div ref={ref} className="r-up mt-12 grid items-start gap-10 lg:grid-cols-[180px_1fr]">
          <div className="text-7xl font-black leading-none tracking-tighter text-[#e8ff00] sm:text-8xl pt-1">'21<span className="text-[#333]">/</span>'26</div>
          <div>
            <h3 className="text-2xl font-bold leading-tight text-[#f0ede8] sm:text-3xl">M.Tech (Integrated) CSE — Business Analytics</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Vellore Institute of Technology · Chennai, TN</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#f0ede8]/80">Five-year integrated programme blending core computer science with business analytics — statistical modeling, ML systems, and applied data engineering.</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
              {['Machine Learning','Deep Learning','Business Analytics','Data Engineering','Statistical Modeling'].map((t) => (
                <span key={t} className="before:mr-2 before:text-[#e8ff00] before:content-['+']">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== EXPERIENCE =================== */
function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="border-t border-[#1e1e1e] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <SectionHeader num="02 — EXP" eyebrow="Work" title="Built / Shipped." />
        <div ref={ref} className="r-up border-t border-[#1e1e1e]">
          <div className="grid items-start gap-8 py-10 sm:grid-cols-[180px_1fr_auto] sm:py-14">
            <div>
              <p className="text-6xl font-black leading-none text-[#f0ede8] sm:text-7xl">2023</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Aug — Oct</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f0ede8] sm:text-3xl">Data Analyst Intern</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#e8ff00]">@ Codegnan</p>
              <ul className="mt-5 space-y-2 text-[#f0ede8]/80">
                {['Built a voice-controlled automation system integrating embedded hardware with a Python control layer.','Accelerated delivery cycles by automating repetitive analyst workflows and presenting live demos to clients.'].map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-2.5 inline-block h-px w-4 shrink-0 bg-[#e8ff00]" /><span className="leading-relaxed">{b}</span></li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
                {['Embedded Systems','Voice Automation','Python','IoT'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b] sm:text-right">Vijayawada, AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== PROJECTS =================== */
const FEATURE = {
  num: '01', title: 'Pneumonia Detection — Capsule × Transformer', category: 'Medical AI · Deep Learning',
  description: 'A hybrid deep-learning framework combining Capsule Networks with Transformer encoders for chest X-ray classification. Introduces a novel Dynamic Routing Attention mechanism that amplifies subtle pulmonary features and outperforms CNN baselines.',
  tags: ['TensorFlow','Capsule Networks','Transformers','Computer Vision','Python'], badge: 'IEEE Published · 2025',
};
const OTHER = [
  { num: '02', title: 'Employee Attrition Risk Prediction', category: 'HR Analytics · Machine Learning', description: 'Predictive system on 10,000 employee records across 35 features. Logistic Regression, Random Forest and Gradient Boosting with SMOTE class-balancing, shipped as an interactive Streamlit app.', tags: ['Python','Scikit-learn','SMOTE','Streamlit','Pandas'] },
  { num: '03', title: 'Stress Analytics — Wearables × IoT', category: 'IoT · Real-Time Analytics', description: 'Trained LightGBM on the WESAD physiological dataset achieving 74.5% accuracy. ESP32 wearable streams sensor data live into a real-time Streamlit dashboard.', tags: ['LightGBM','ESP32','WESAD','Streamlit','Python'] },
  { num: '04', title: 'Mana Avanigadda — Civic Governance Platform', category: 'Full-Stack · Civic Tech', description: 'Constituency-wide grievance reporting for Avanigadda, AP. Residents file problems with photos and track resolution; volunteers and mandal admins triage them through a role-based workflow backed by phone-OTP auth and Postgres-enforced constraints.', tags: ['React','Node.js','Express','PostgreSQL','Prisma','Cloudflare R2'], url: 'https://manaavanigadda.com/' },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-[#1e1e1e] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <SectionHeader num="03 — WORK" eyebrow="Selected" title="Things I've Built." />
        <FeatureCard p={FEATURE} />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {OTHER.map((p) => <ProjectCard key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ p }) {
  const ref = useReveal();
  const cardRef = useRef(null);
  const onMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = ''; };
  return (
    <div ref={ref} className="r-up">
      <article ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave} className="group grid gap-8 border border-[#1e1e1e] p-7 transition-all duration-300 hover:border-[#e8ff00]/30 sm:p-10 lg:grid-cols-[1fr_1.2fr]" style={{ transition: 'transform 0.3s ease, border-color 0.3s' }}>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-4">
            <span className="text-7xl font-black leading-none text-[#e8ff00] sm:text-8xl">{p.num}</span>
            {p.badge && <span className="inline-flex items-center gap-2 border border-[#e8ff00]/40 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-[#e8ff00]">★ {p.badge}</span>}
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">{p.category}</p>
            <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#f0ede8] sm:text-5xl">{p.title}</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <p className="text-base leading-relaxed text-[#f0ede8]/80 sm:text-lg">{p.description}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
            {p.tags.map((t) => <span key={t} className="before:mr-2 before:text-[#e8ff00] before:content-['+']">{t}</span>)}
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectCard({ p }) {
  const ref = useReveal();
  const cardRef = useRef(null);
  const onMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = ''; };
  const card = (
      <article ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave} className={`group flex h-full flex-col gap-6 border border-[#1e1e1e] p-7 sm:p-8 ${p.url ? 'hover:border-[#e8ff00]/40' : ''}`} style={{ transition: 'transform 0.3s ease, border-color 0.3s' }}>
        <div className="flex items-baseline justify-between">
          <span className="text-5xl font-black leading-none text-[#e8ff00]">{p.num}</span>
          <ArrowUpRight size={18} className="text-[#6b6b6b] transition-colors group-hover:text-[#e8ff00]" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">{p.category}</p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#f0ede8]">{p.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-[#f0ede8]/75">{p.description}</p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
          {p.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      </article>
  );
  return (
    <div ref={ref} className="r-up">
      {p.url ? (
        <a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.title} — open live site`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8ff00]">
          {card}
        </a>
      ) : card}
    </div>
  );
}

/* =================== SKILLS =================== */
const SKILL_GROUPS = [
  { name: 'Languages', items: ['Python','SQL','JavaScript'] },
  { name: 'Data Analysis & ML', items: ['Pandas','NumPy','Matplotlib','Seaborn','Scikit-learn','TensorFlow','LightGBM'] },
  { name: 'Visualization & BI', items: ['Power BI','Tableau','Excel','Google Analytics','Jamovi'] },
  { name: 'Dev Tools', items: ['GitHub','Git','Streamlit','Figma','Canva'] },
  { name: 'Video Editing', items: ['Premiere Pro','DaVinci Resolve','CapCut','After Effects','Color Grading','Motion Graphics'] },
  { name: 'Web & Full-Stack', items: ['React','Vite','Tailwind CSS','Node.js','Express','REST APIs','JWT Auth','PostgreSQL','Prisma','Supabase','Cloudflare R2','Netlify','Render'] },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-[#1e1e1e] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <SectionHeader num="04 — KIT" eyebrow="Toolbox" title="What I Use." />
      </div>
      <div className="border-t border-[#1e1e1e]">
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.name} className="group/strip relative border-b border-[#1e1e1e] transition-colors hover:bg-[#0f0f0f]">
            <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 py-3 sm:px-10">
              <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-[#e8ff00]">{String(i + 1).padStart(2, '0')}</span>
              <span className="hidden w-44 shrink-0 font-mono text-xs uppercase tracking-widest text-[#f0ede8] sm:block">{g.name}</span>
              <div className="relative flex-1 overflow-hidden">
                <div className="marquee-track marquee-track-slow" style={i % 2 === 1 ? { animationDirection: 'reverse' } : undefined}>
                  {[...g.items, ...g.items, ...g.items].map((s, j) => (
                    <span key={j} className="flex items-center gap-6 px-5 text-3xl font-black uppercase tracking-tight text-[#f0ede8] transition-colors group-hover/strip:text-[#e8ff00] sm:text-4xl">
                      {s}<span className="text-[#1e1e1e]">/</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =================== PUBLICATION =================== */
function Publication() {
  const ref = useReveal();
  return (
    <section id="publication" className="border-t border-[#1e1e1e] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <SectionHeader num="05 — DOC" eyebrow="Research" title="Published Paper." />
        <article ref={ref} className="r-up grid gap-10 lg:grid-cols-[160px_1fr_220px]">
          <div>
            <p className="text-7xl font-black leading-none text-[#e8ff00]">25</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">IEEE · 2025</p>
          </div>
          <div>
            <h3 className="text-2xl leading-snug text-[#f0ede8] sm:text-3xl sm:leading-snug">
              Advanced Pneumonia Detection in Chest X-Rays via Capsule Networks Integrated with Transformer Architectures and Dynamic Routing Attention Mechanisms.
            </h3>
            <p className="mt-6 max-w-3xl leading-relaxed text-[#f0ede8]/80">
              A hybrid deep learning framework that fuses Capsule Networks with Transformer encoders for robust chest X-ray analysis. A novel Dynamic Routing Attention mechanism amplifies discriminative spatial features — improving sensitivity to subtle pulmonary patterns and outperforming conventional CNN baselines.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
              {['Capsule Networks','Transformers','Medical Imaging','Deep Learning','Attention Mechanisms','Computer Vision'].map((t) => (
                <span key={t} className="before:mr-2 before:text-[#e8ff00] before:content-['+']">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* =================== FOOTER =================== */
function Footer() {
  const ref = useReveal();
  return (
    <footer id="contact" className="border-t border-[#1e1e1e]">
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-10 sm:py-36">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e8ff00]">06 — END</span>
          <span className="block h-px w-12 bg-[#e8ff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Contact</span>
        </div>
        <div ref={ref} className="r-up">
          <h2 className="font-black leading-none tracking-tighter text-[#f0ede8]" style={{ fontSize: 'clamp(2.5rem,9vw,8rem)' }}>
            LET'S WORK<br /><span className="text-[#6b6b6b]">TOGETHER</span><span className="text-[#e8ff00]">.</span>
          </h2>
        </div>
        <a href="mailto:gssai2003@gmail.com" className="mt-12 inline-flex max-w-full items-center gap-3 font-black leading-none tracking-tight text-[#f0ede8] transition-colors hover:text-[#e8ff00]" style={{ fontSize: 'clamp(1.5rem,5vw,3.5rem)' }}>
          <Mail className="hidden h-10 w-10 sm:block" />
          <span className="break-all underline decoration-[#1e1e1e] decoration-2 underline-offset-8 transition-colors hover:decoration-[#e8ff00]">gssai2003@gmail.com</span>
          <ArrowUpRight className="h-10 w-10 shrink-0" />
        </a>
        <div className="mt-16 grid gap-8 border-t border-[#1e1e1e] pt-10 sm:grid-cols-3">
          <div><p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Phone</p><a href="tel:9032740753" className="mt-2 block text-lg text-[#f0ede8] hover:text-[#e8ff00]">+91 90327 40753</a></div>
          <div><p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Location</p><p className="mt-2 text-lg text-[#f0ede8]">Vijayawada, Andhra Pradesh</p></div>
          <div><p className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">Currently</p><p className="mt-2 text-lg text-[#f0ede8]">M.Tech CSE — VIT Chennai</p></div>
        </div>
      </div>
      <div className="border-t border-[#1e1e1e]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-6 font-mono text-xs uppercase tracking-widest text-[#6b6b6b] sm:px-10">
          <p>© {new Date().getFullYear()} — Siddharth Golla / All rights reserved</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/gssai2003" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#e8ff00]"><GitBranch size={12} /> GitHub</a>
            <a href="https://www.linkedin.com/in/siddharthagolla" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#e8ff00]"><LinkedinIcon size={12} /> LinkedIn</a>
            <a href="mailto:gssai2003@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[#e8ff00]"><Mail size={12} /> Email</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#e8ff00]">↑ Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =================== PAGE =================== */
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f0ede8]">
      <Cursor />
      <Navbar />
      <div id="about"><Hero /></div>
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Publication />
      <Footer />
    </main>
  );
}
