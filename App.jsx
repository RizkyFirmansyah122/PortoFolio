import React, { useState } from 'react';
import {
  ArrowUpRight,
  Copy,
  Check,
  Sun,
  Moon,
  FileText,
  Award,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  X,
  Printer,
  ChevronRight,
  Layers,
  Code2,
  Cpu,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Network,
  Globe,
  Languages,
  BookCheck,
  Github,
  Linkedin,
  Download
} from 'lucide-react';

// ==========================================
// STREAMLINED DATA
// ==========================================

const VIUME_CELLS = [
  {
    id: 'c1',
    label: 'HSIL',
    conf: '0.96',
    x: 24,
    y: 28,
    w: 18,
    h: 22,
    r: 6,
    showInBaseline: true,
    duplicateBox: { x: 26, y: 31, w: 17, h: 21, conf: '0.68' }
  },
  {
    id: 'c2',
    label: 'ASC-H (Micro)',
    conf: '0.93',
    x: 62,
    y: 22,
    w: 14,
    h: 18,
    r: 4,
    showInBaseline: false // Missed by standard YOLO without CBAM
  },
  {
    id: 'c3',
    label: 'LSIL',
    conf: '0.98',
    x: 46,
    y: 58,
    w: 22,
    h: 26,
    r: 8,
    showInBaseline: true,
    duplicateBox: { x: 43, y: 55, w: 23, h: 27, conf: '0.79' }
  },
  {
    id: 'c4',
    label: 'ASC-US',
    conf: '0.91',
    x: 16,
    y: 64,
    w: 15,
    h: 19,
    r: 4.5,
    showInBaseline: false // Missed by standard YOLO
  }
];

const EXPERIENCE = [
  {
    period: '08/2025 – 01/2026',
    role: 'Machine Learning Researcher (Thesis)',
    org: 'Lab AI, YARSI University',
    points: [
      'Led research on CBAM-integrated YOLOv5x and Weighted Boxes Fusion (WBF) for high-sensitivity cervical cancer screening on 1GB+ Whole Slide Images.',
      'Validated diagnostic recall with the Head of Anatomical Pathology and deployed the model into the ViuMe clinical web platform.'
    ]
  },
  {
    period: '02/2025 – 07/2025',
    role: 'Machine Learning Engineer Intern',
    org: 'E-Health Laboratory, YARSI University',
    points: [
      'Conducted exploratory data analysis (EDA), large-scale medical image curation, and statistical benchmarking (Precision, Recall, mAP).',
      'Collaborated with clinical stakeholders to translate object detection outputs into actionable screening workflows.'
    ]
  },
  {
    period: '04/2025 – 07/2025',
    role: 'Teaching Assistant (AI & OOP)',
    org: 'YARSI University',
    points: [
      'Mentored undergraduate cohorts in Machine Learning model optimization and end-to-end deployment across local and server environments.',
      'Designed practical lab modules and evaluated final projects for Object-Oriented Programming and Artificial Intelligence courses.'
    ]
  },
  {
    period: 'International Honor',
    role: 'Winner — PRAGMA 41 Hackathon',
    org: 'Thammasat University, Thailand',
    isHighlight: true,
    points: [
      'Architected and pitched a functional AI cervical cell screening platform during an intensive 16-hour international hackathon.',
      'Collaborated across a diverse cross-cultural team of undergraduate (S1) and master’s (S2) students to deliver an award-winning prototype.'
    ]
  }
];

// ==========================================
// 1. VERIFIED CREDENTIALS DATA
// ==========================================
const CREDENTIALS = [
  {
    id: 'aws-ai',
    title: 'AWS Certified AI Practitioner',
    issuerFull: 'Amazon Web Services (AWS)',
    issuerShort: 'AWS',
    metric: '719',
    metricLabel: 'Score',
    credentialId: '094acc012d084cb48586746e2413d270',
    verifyVia: 'AWS CertMetrics Portal',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/094acc012d084cb48586746e2413d270',
    isFeatured: true,
    colSpan: 'md:col-span-2',
    icon: Sparkles,
    tags: ['Generative AI', 'Foundation Models', 'ML Lifecycle', 'Responsible AI'],
    description: 'Official AWS cloud certification validating mastery in generative AI fundamentals, foundation model selection, ML lifecycle management, AI security, and responsible AI governance on AWS.'
  },
  {
    id: 'citi-ethics',
    title: 'CITI Program — Conflicts of Interest',
    issuerFull: 'Collaborative Institutional Training Initiative',
    issuerShort: 'CITI Program',
    metric: 'Verified',
    metricLabel: 'Status',
    credentialId: '65757705',
    verifyVia: 'CITI Online Registry',
    url: 'https://www.citiprogram.org/verify/?wf851fa0d-c354-495b-8e94-9ef6982e75c4-65757705',
    isFeatured: false,
    colSpan: 'md:col-span-1',
    icon: ShieldCheck,
    tags: ['Research Ethics', 'COI Governance', 'Biomedical AI'],
    description: 'International certification in scientific research ethics, conflict of interest governance, and human-subject safety compliance standards for AI research.'
  },
  {
    id: 'ccna-switching',
    title: 'CCNAv7: Switching, Routing & Wireless',
    issuerFull: 'Cisco Networking Academy',
    issuerShort: 'Cisco NetAcad',
    metric: 'Certified',
    metricLabel: 'Status',
    credentialId: null,
    verifyVia: 'Official Certificate PDF',
    url: 'https://drive.google.com/file/d/1tIllbLqBsfssymPCVP0nr03VEZwuAM5G/view?usp=drive_link',
    isFeatured: false,
    colSpan: 'md:col-span-1',
    icon: Network,
    tags: ['VLAN & Inter-VLAN', 'STP / EtherChannel', 'WLAN Security'],
    description: 'Enterprise-level certification in VLAN design, inter-VLAN routing, redundancy protocols, wireless LAN infrastructure, and network security hardening.'
  },
  {
    id: 'ccna-intro',
    title: 'CCNAv7: Introduction to Networks',
    issuerFull: 'Cisco Networking Academy',
    issuerShort: 'Cisco NetAcad',
    metric: 'Certified',
    metricLabel: 'Status',
    credentialId: null,
    verifyVia: 'Official Certificate PDF',
    url: 'https://drive.google.com/file/d/1U00oB0HT8jStm019lOnxY7DKUfk_0FZL/view?usp=drive_link',
    isFeatured: false,
    colSpan: 'md:col-span-1',
    icon: Globe,
    tags: ['OSI & TCP/IP Models', 'IPv4 / IPv6', 'Network Security'],
    description: 'Foundational networking certification covering OSI and TCP/IP models, IP subnetting, device security, and core transport layer protocols.'
  },
  {
    id: 'toeic',
    title: 'TOEIC Listening & Reading',
    issuerFull: 'ETS Global',
    issuerShort: 'ETS',
    metric: '540',
    metricLabel: 'Score',
    credentialId: null,
    verifyVia: 'Official Score Report PDF',
    url: 'https://drive.google.com/file/d/1ws4JK6reGNfkIDD-W6wy7wQ9qyQgJzwl/view?usp=drive_link',
    isFeatured: false,
    colSpan: 'md:col-span-1',
    icon: Languages,
    tags: ['Listening', 'Reading', 'Business English'],
    description: 'Standardized ETS global benchmark assessing professional English proficiency in workplace listening and business reading comprehension for international environments.'
  }
];

// ==========================================
// 2. TECHNICAL STACK (3-COLUMN CLEAN GRID)
// ==========================================
const TECH_STACK = [
  {
    category: 'AI & Computer Vision',
    icon: Cpu,
    summary: 'Deep learning architectures, computer vision pipelines, and model evaluation metrics.',
    skills: [
      'PyTorch',
      'TensorFlow',
      'YOLOv5 / v8 / v10',
      'CBAM Attention',
      'Weighted Boxes Fusion (WBF)',
      'Vision-Language Models (VLM)',
      'Scikit-learn',
      'Offline Evaluation (OPE, WIS, DR)'
    ]
  },
  {
    category: 'Backend & Cloud Infrastructure',
    icon: Layers,
    summary: 'High-concurrency APIs, relational & document databases, containerization, and cloud infrastructure.',
    skills: [
      'Python',
      'FastAPI',
      'Flask REST API',
      'SQL',
      'PostgreSQL',
      'MongoDB Atlas',
      'Docker',
      'AWS',
      'GPU Parallel Processing'
    ]
  },
  {
    category: 'Frontend & Data Analytics',
    icon: Code2,
    summary: 'Type-safe user interfaces, statistical analysis, and interactive data visualization.',
    skills: [
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Pandas',
      'NumPy',
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn'
    ]
  }
];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeProjectTab, setActiveProjectTab] = useState('viume'); // 'viume' | 'receipt'
  const [viumeStage, setViumeStage] = useState('ours'); // 'raw' | 'baseline' | 'ours'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const isDark = theme === 'dark';

  const copyEmail = () => {
    navigator.clipboard.writeText('rizky80firmansyah@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 selection:bg-emerald-500/20 selection:text-emerald-400 ${
        isDark ? 'bg-[#0A0A0B] text-zinc-100' : 'bg-[#FAFAFA] text-zinc-900'
      }`}
      style={{
        fontFamily:
          '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-mono-code {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>

      {/* ==========================================
          MINIMALIST STICKY HEADER
      ========================================== */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
          isDark
            ? 'bg-[#0A0A0B]/85 border-[#222226]'
            : 'bg-[#FAFAFA]/85 border-zinc-200'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono-code text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            RFS<span className="text-emerald-500">.</span>
          </button>

          <div className="flex items-center space-x-1 sm:space-x-6">
            <nav className="hidden sm:flex items-center space-x-6 text-sm">
              {[
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Credentials', id: 'credentials' },
                { label: 'Stack', id: 'stack' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`transition-colors font-medium ${
                    isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2.5 pl-2">
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-400 hover:text-zinc-100'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4 stroke-[1.5]" /> : <Moon className="w-4 h-4 stroke-[1.5]" />}
              </button>

              <button
                onClick={() => setIsCvOpen(true)}
                title="Preview Resume"
                className={`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-400 hover:text-zinc-100'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Preview</span>
              </button>

              <a
                href="/Rizky_Firmansyah_CV.pdf"
                download="Rizky_Firmansyah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors shadow-xs ${
                  isDark
                    ? 'bg-zinc-100 text-zinc-900 border-zinc-100 hover:bg-white'
                    : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
                }`}
              >
                <Download className="w-3.5 h-3.5 stroke-[2]" />
                <span>Resume / CV</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ==========================================
          SINGLE-COLUMN FOCUSED CONTAINER
      ========================================== */}
      <main className="max-w-4xl mx-auto px-6">
        
        {/* ==========================================
            1. HERO SECTION
        ========================================== */}
        <section className="py-16 sm:py-24 border-b border-zinc-800/40">
          {/* Status Pill */}
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full border text-xs mb-8 bg-emerald-500/5 border-emerald-500/20 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for AI / ML Engineering Roles</span>
          </div>

          {/* Main Name & Role */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Rizky Firmansyah Sipahutar
          </h1>

          <p
            className={`text-lg sm:text-xl leading-relaxed max-w-2xl mb-6 font-normal ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            <span className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>
              AI & Computer Vision Engineer
            </span>{' '}
            building production-ready deep learning systems—from high-sensitivity clinical pathology screening to multimodal document intelligence.
          </p>

          <p
            className={`text-sm sm:text-base leading-relaxed max-w-2xl mb-8 ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Computer Science graduate from YARSI University specializing in taking architectures like{' '}
            <span className="font-mono-code text-xs px-1.5 py-0.5 rounded bg-zinc-500/10">
              YOLOv5x + CBAM + WBF
            </span>{' '}
            and{' '}
            <span className="font-mono-code text-xs px-1.5 py-0.5 rounded bg-zinc-500/10">
              Vision-Language Models
            </span>{' '}
            from research validation into reliable web applications using Python, SQL, and modern cloud pipelines.
          </p>

          {/* 3 Clean Highlight Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              'B.Sc. Computer Science, YARSI (3.77 GPA)',
              'AWS Certified AI Practitioner (Score: 719)',
              'Winner, PRAGMA 41 Hackathon (Thailand)'
            ].map((pill) => (
              <div
                key={pill}
                className={`px-3.5 py-1.5 rounded-lg border font-mono-code text-xs ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-300'
                    : 'bg-white border-zinc-200 text-zinc-700 shadow-2xs'
                }`}
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Primary Actions & Direct Contact Links */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-sm flex items-center space-x-2 transition-colors shadow-xs"
            >
              <span>View Selected Work</span>
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Direct Download CV Action */}
            <a
              href="/Rizky_Firmansyah_CV.pdf"
              download="Rizky_Firmansyah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium flex items-center space-x-2 transition-colors ${
                isDark
                  ? 'bg-[#121215] border-emerald-500/40 text-emerald-400 hover:border-emerald-500/70 hover:bg-emerald-500/5'
                  : 'bg-white border-emerald-500/40 text-emerald-700 hover:border-emerald-500/70 hover:bg-emerald-50'
              }`}
            >
              <Download className="w-4 h-4 stroke-[2]" />
              <span>Download CV</span>
            </a>

            {/* Email Direct Action */}
            <a
              href="mailto:rizky80firmansyah@gmail.com"
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium flex items-center space-x-2 transition-colors ${
                isDark
                  ? 'bg-[#121215] border-[#222226] text-zinc-200 hover:border-zinc-700 hover:text-white'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:border-zinc-300'
              }`}
            >
              <Mail className="w-4 h-4 stroke-[1.5] text-zinc-400" />
              <span>Email</span>
            </a>

            {/* WhatsApp Direct Action */}
            <a
              href="http://wa.me/6281380482452"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium flex items-center space-x-2 transition-colors ${
                isDark
                  ? 'bg-[#121215] border-[#222226] text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-400'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:border-emerald-500/40 hover:text-emerald-700'
              }`}
            >
              <MessageSquare className="w-4 h-4 stroke-[1.5] text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn Direct Action */}
            <a
              href="http://www.linkedin.com/in/rizky-firmansyah-sipahutar-a9a9b6287"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium flex items-center space-x-1.5 transition-colors ${
                isDark
                  ? 'bg-transparent border-[#222226] text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
                  : 'bg-transparent border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>

            {/* GitHub Direct Action */}
            <a
              href="https://github.com/RizkyFirmansyah122"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium flex items-center space-x-1.5 transition-colors ${
                isDark
                  ? 'bg-transparent border-[#222226] text-zinc-400 hover:text-zinc-100 hover:border-zinc-700'
                  : 'bg-transparent border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>

            {/* Copy Email Helper */}
            <button
              onClick={copyEmail}
              title="Copy email to clipboard"
              className={`p-2.5 rounded-lg border text-sm font-medium transition-colors ${
                isDark
                  ? 'bg-[#121215] border-[#222226] text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-500 stroke-[2]" />
              ) : (
                <Copy className="w-4 h-4 stroke-[1.5]" />
              )}
            </button>
          </div>
        </section>

        {/* ==========================================
            2. SELECTED WORK (CLEAN TABBED SHOWCASE)
        ========================================== */}
        <section id="projects" className="py-16 sm:py-24 border-b border-zinc-800/40 scroll-mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-1">Selected Work</h2>
              <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Production AI systems with interactive architectural previews.
              </p>
            </div>

            {/* Clean Project Switcher Tabs */}
            <div
              className={`inline-flex p-1 rounded-xl border ${
                isDark ? 'bg-[#121215] border-[#222226]' : 'bg-zinc-100 border-zinc-200'
              }`}
            >
              <button
                onClick={() => setActiveProjectTab('viume')}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeProjectTab === 'viume'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-white text-zinc-900 shadow-xs'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                01. ViuMe Pathology AI
              </button>
              <button
                onClick={() => setActiveProjectTab('receipt')}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeProjectTab === 'receipt'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-white text-zinc-900 shadow-xs'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                02. Receipt VLM Parser
              </button>
            </div>
          </div>

          {/* ------------------------------------------
              TAB 1: VIUME CLINICAL PATHOLOGY
          ------------------------------------------ */}
          {activeProjectTab === 'viume' && (
            <div
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                isDark ? 'bg-[#121215] border-[#222226]' : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-800/40">
                <div>
                  <div className="font-mono-code text-xs text-emerald-500 mb-1">
                    YOLOv5x + CBAM Attention + Weighted Boxes Fusion
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    ViuMe — Clinical Cervical Cancer Screening
                  </h3>
                </div>

                <a
                  href="https://viume.yarsi.ai/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs transition-colors shrink-0 self-start sm:self-auto shadow-xs"
                >
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>

              {/* 3 Concise Summary Points */}
              <ul className={`space-y-3 text-sm sm:text-base mb-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">01</span>
                  <span>
                    Processed <strong className={isDark ? 'text-white' : 'text-black'}>1GB+ Whole Slide Images (WSI)</strong> from private clinical datasets using systematic cropping, standardization, and Roboflow annotation.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">02</span>
                  <span>
                    Integrated <strong className={isDark ? 'text-white' : 'text-black'}>CBAM attention</strong> and <strong className={isDark ? 'text-white' : 'text-black'}>Weighted Boxes Fusion (WBF)</strong> into YOLOv5x to accurately localize small, clustered abnormal cervical cells.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">03</span>
                  <span>
                    Validated diagnostic sensitivity with the Head of Anatomical Pathology and deployed into <strong className={isDark ? 'text-white' : 'text-black'}>ViuMe</strong> for real-time clinical decision support.
                  </span>
                </li>
              </ul>

              {/* Simplified Interactive Demo Frame */}
              <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-4 sm:p-6 text-zinc-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <span className="font-mono-code text-xs text-zinc-400">
                    INTERACTIVE PREVIEW: Toggle model pipeline stage
                  </span>

                  {/* 3-Button Segmented Control */}
                  <div className="inline-flex p-1 rounded-lg bg-zinc-900 border border-zinc-800 font-mono-code text-xs">
                    {[
                      { id: 'raw', label: 'Raw Image' },
                      { id: 'baseline', label: 'Standard YOLO' },
                      { id: 'ours', label: 'YOLOv5x + CBAM + WBF' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setViumeStage(btn.id)}
                        className={`px-3 py-1.5 rounded-md transition-colors ${
                          viumeStage === btn.id
                            ? 'bg-emerald-500 text-zinc-950 font-semibold'
                            : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clean Pathology Visual Canvas */}
                <div className="relative w-full h-64 sm:h-72 rounded-lg border border-zinc-800/80 bg-[#0D0E12] overflow-hidden select-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <radialGradient id="cbamGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#0D0E12" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Subtle Grid */}
                    <g stroke="rgba(255,255,255,0.03)" strokeWidth="0.3">
                      <line x1="25" y1="0" x2="25" y2="100" />
                      <line x1="50" y1="0" x2="50" y2="100" />
                      <line x1="75" y1="0" x2="75" y2="100" />
                      <line x1="0" y1="33" x2="100" y2="33" />
                      <line x1="0" y1="66" x2="100" y2="66" />
                    </g>

                    {/* Render Simulated Cells */}
                    {VIUME_CELLS.map((cell) => {
                      const cx = cell.x + cell.w / 2;
                      const cy = cell.y + cell.h / 2;

                      return (
                        <g key={cell.id}>
                          {/* CBAM Attention Aura in 'ours' mode */}
                          {viumeStage === 'ours' && (
                            <circle cx={cx} cy={cy} r={cell.r * 2.4} fill="url(#cbamGlow)" />
                          )}

                          {/* Cytoplasm */}
                          <ellipse
                            cx={cx}
                            cy={cy}
                            rx={cell.r * 1.3}
                            ry={cell.r}
                            fill="rgba(244, 63, 94, 0.14)"
                            stroke="rgba(244, 63, 94, 0.35)"
                            strokeWidth="0.4"
                          />

                          {/* Nucleus */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={cell.r * 0.5}
                            fill="rgba(225, 29, 72, 0.65)"
                          />

                          {/* Baseline YOLO Boxes (Shows duplicate overlaps & misses micro cells) */}
                          {viumeStage === 'baseline' && cell.showInBaseline && (
                            <>
                              <rect
                                x={cell.x}
                                y={cell.y}
                                width={cell.w}
                                height={cell.h}
                                fill="none"
                                stroke="#F59E0B"
                                strokeWidth="0.6"
                              />
                              {cell.duplicateBox && (
                                <rect
                                  x={cell.duplicateBox.x}
                                  y={cell.duplicateBox.y}
                                  width={cell.duplicateBox.w}
                                  height={cell.duplicateBox.h}
                                  fill="none"
                                  stroke="#EF4444"
                                  strokeWidth="0.5"
                                  strokeDasharray="1.5,1"
                                />
                              )}
                            </>
                          )}

                          {/* Proposed YOLOv5x + CBAM + WBF Boxes */}
                          {viumeStage === 'ours' && (
                            <rect
                              x={cell.x}
                              y={cell.y}
                              width={cell.w}
                              height={cell.h}
                              fill="rgba(16, 185, 129, 0.05)"
                              stroke="#10B981"
                              strokeWidth="0.7"
                            />
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Clean Floating Confidence Labels */}
                  {viumeStage === 'baseline' &&
                    VIUME_CELLS.map((cell) =>
                      cell.showInBaseline ? (
                        <div
                          key={cell.id}
                          style={{ left: `${cell.x}%`, top: `${cell.y - 8}%` }}
                          className="absolute px-1.5 py-0.5 rounded-xs bg-amber-500 text-zinc-950 font-mono-code text-[10px] font-semibold"
                        >
                          {cell.label} (Overlapping Box)
                        </div>
                      ) : (
                        <div
                          key={cell.id}
                          style={{ left: `${cell.x}%`, top: `${cell.y - 8}%` }}
                          className="absolute px-1.5 py-0.5 rounded-xs bg-red-950/90 border border-red-500/50 text-red-300 font-mono-code text-[10px]"
                        >
                          Missed Micro Cell
                        </div>
                      )
                    )}

                  {viumeStage === 'ours' &&
                    VIUME_CELLS.map((cell) => (
                      <div
                        key={cell.id}
                        style={{ left: `${cell.x}%`, top: `${cell.y - 8}%` }}
                        className="absolute px-1.5 py-0.5 rounded-xs bg-emerald-500 text-zinc-950 font-mono-code text-[10px] font-semibold shadow-xs"
                      >
                        {cell.label} · {cell.conf}
                      </div>
                    ))}
                </div>

                {/* Single Concise Status Line */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono-code text-xs text-zinc-400 pt-3 border-t border-zinc-800/80">
                  <span>
                    {viumeStage === 'raw' &&
                      'Status: Unannotated 1024×1024 WSI patch with small dysplastic cells.'}
                    {viumeStage === 'baseline' &&
                      'Status: Standard YOLO misses 2 micro-scale cells and produces duplicate overlapping boxes.'}
                    {viumeStage === 'ours' &&
                      'Status: CBAM recovers micro-scale abnormal cells while WBF fuses overlapping predictions (4/4 detected).'}
                  </span>
                  <span className="text-emerald-400 shrink-0">Recall Priority Mode</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'PyTorch', 'YOLOv5x / v8 / v10', 'CBAM Attention', 'Weighted Boxes Fusion', 'Roboflow', 'ViuMe Web'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md font-mono-code text-xs border ${
                        isDark
                          ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* ------------------------------------------
              TAB 2: INTELLIGENT RECEIPT DIGITIZATION
          ------------------------------------------ */}
          {activeProjectTab === 'receipt' && (
            <div
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                isDark ? 'bg-[#121215] border-[#222226]' : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-800/40">
                <div>
                  <div className="font-mono-code text-xs text-emerald-500 mb-1">
                    Vision-Language Models (VLM) & Pydantic Validation
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Intelligent Receipt Digitization & Accounting
                  </h3>
                </div>

                <a
                  href="https://intelligent-receipt-digitization-ac.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs transition-colors shrink-0 self-start sm:self-auto shadow-xs"
                >
                  <span>Try Live Web App</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>

              {/* 3 Concise Summary Points */}
              <ul className={`space-y-3 text-sm sm:text-base mb-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">01</span>
                  <span>
                    Built a multimodal parser using <strong className={isDark ? 'text-white' : 'text-black'}>Vision-Language Models (VLMs)</strong> to extract messy handwritten invoices into strict <strong className={isDark ? 'text-white' : 'text-black'}>Pydantic JSON schemas</strong>.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">02</span>
                  <span>
                    Engineered custom validation logic to isolate partial <strong className={isDark ? 'text-white' : 'text-black'}>down-payments (DP)</strong> and prevent reseller debt carry-over double-counting.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-mono-code text-xs mt-1">03</span>
                  <span>
                    Deployed a full-stack verification interface (<strong className={isDark ? 'text-white' : 'text-black'}>Next.js, TypeScript</strong>) on Vercel & Render with automated Google Sheets/Drive data pipelines.
                  </span>
                </li>
              </ul>

              {/* Clean 2-Column Interactive Demo Card */}
              <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-4 sm:p-6 text-zinc-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <span className="font-mono-code text-xs text-zinc-400">
                    RECONCILIATION PREVIEW: Handwritten Reseller Invoice
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-code text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2]" />
                    <span>Double-Counting Prevented</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Stylized Receipt Input Summary */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-[#0E0E12] flex flex-col justify-between">
                    <div>
                      <div className="font-mono-code text-[11px] text-zinc-500 pb-2 mb-3 border-b border-dashed border-zinc-800">
                        INPUT: HANDWRITTEN NOTA (AGEN BERKAH)
                      </div>

                      <div className="space-y-2.5 text-xs font-mono-code">
                        <div className="flex justify-between text-zinc-300">
                          <span>Items Subtotal (New Order)</span>
                          <span>Rp 1.450.000</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                          <span>+ Old Debt Carry-Over (Bon Lama)</span>
                          <span>Rp 200.000</span>
                        </div>
                        <div className="flex justify-between text-zinc-400 pt-1 border-t border-zinc-800">
                          <span>Written Grand Total on Paper</span>
                          <span>Rp 1.650.000</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                          <span>- Paid Down Payment (DP Tunai)</span>
                          <span>Rp 500.000</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400 leading-relaxed">
                      Standard OCR blindly records <strong className="text-zinc-200">Rp 1.650.000</strong> as new revenue, double-counting the Rp 200.000 old debt.
                    </div>
                  </div>

                  {/* Right: Clean Pydantic JSON Output */}
                  <div className="p-4 rounded-lg border border-zinc-800 bg-[#070709] font-mono-code text-xs overflow-x-auto">
                    <div className="text-[11px] text-zinc-500 pb-2 mb-2 border-b border-zinc-800">
                      OUTPUT: PYDANTIC VALIDATED SCHEMA
                    </div>
                    <pre className="text-emerald-400 leading-relaxed text-[11px]">
{`{
  "merchant": "Agen Berkah",
  "new_order_subtotal": 1450000,
  "reconciliation": {
    "old_debt_isolated": 200000,
    "down_payment_paid": 500000,
    "net_new_receivable": 950000,
    "ending_balance": 1150000
  },
  "schema_valid": true,
  "sheets_sync": "ROW_APPENDED"
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Vision-Language Models', 'Pydantic', 'Next.js', 'TypeScript', 'Google Sheets & Drive API', 'GCP Auth', 'Vercel & Render'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md font-mono-code text-xs border ${
                        isDark
                          ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </section>

        {/* ==========================================
            3. EXPERIENCE & ACHIEVEMENTS (CLEAN TIMELINE)
        ========================================== */}
        <section id="experience" className="py-16 sm:py-24 border-b border-zinc-800/40 scroll-mt-16">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-1">Experience & Achievements</h2>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Research, engineering internships, and international hackathon recognition.
            </p>
          </div>

          <div className="space-y-10">
            {EXPERIENCE.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start"
              >
                {/* Left: Date / Period */}
                <div className="sm:col-span-4 font-mono-code text-xs pt-1 text-zinc-500">
                  {item.isHighlight ? (
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                      <Award className="w-3.5 h-3.5 stroke-[1.5]" />
                      <span>{item.period}</span>
                    </span>
                  ) : (
                    <span>{item.period}</span>
                  )}
                </div>

                {/* Right: Role & Concise Points */}
                <div className="sm:col-span-8">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <div className={`text-sm mb-3 ${isDark ? 'text-emerald-400/90' : 'text-emerald-700 font-medium'}`}>
                    {item.org}
                  </div>
                  <ul className={`space-y-2 text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <span className="text-zinc-500 mt-1.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            4. VERIFIED CERTIFICATIONS & CREDENTIALS
            (ENHANCED INTERACTIVE BENTO GRID)
        ========================================== */}
        <section id="credentials" className="py-16 sm:py-24 border-b border-zinc-800/40 scroll-mt-16">
          {/* ── SECTION HEADER ── */}
          <div className="mb-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono-code mb-4 ${isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Official Institutional Verification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Verified Certifications & Credentials
            </h2>
            <p className={`text-sm max-w-xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Industry-accredited certifications with direct one-click authentication links to official verification registries and score reports.
            </p>
          </div>

          {/* ── FEATURED CARD: AWS (Full-width highlight) ── */}
          {CREDENTIALS.filter(c => c.isFeatured).map((cred) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={cred.id}
                className={`rounded-2xl border p-6 sm:p-8 mb-5 relative overflow-hidden transition-all duration-200 ${
                  isDark
                    ? 'bg-gradient-to-br from-emerald-500/[0.07] via-[#121215] to-[#121215] border-emerald-500/35 ring-1 ring-emerald-500/20'
                    : 'bg-gradient-to-br from-emerald-50/80 via-white to-white border-emerald-300/60 ring-1 ring-emerald-100 shadow-sm'
                }`}
              >
                {/* Decorative background glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 relative">
                  {/* Left column */}
                  <div className="flex-1 min-w-0">
                    {/* Issuer row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400' : 'bg-emerald-100 border-emerald-200 text-emerald-700'}`}>
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <p className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-widest">{cred.issuerFull}</p>
                        <p className="font-mono-code text-[10px] text-emerald-500 font-medium">{cred.verifyVia}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                      {cred.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 max-w-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {cred.description}
                    </p>

                    {/* Competency tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cred.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-1 rounded-md font-mono-code text-[11px] border ${isDark ? 'bg-zinc-900/70 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Credential ID pill */}
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono-code text-[10px] ${isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span>Credential ID: {cred.credentialId}</span>
                    </div>
                  </div>

                  {/* Right column — Score box + Verify button */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
                    {/* Score display */}
                    <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl border ${isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'}`}>
                      <span className={`font-mono-code text-[9px] uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Score</span>
                      <span className="font-mono-code text-3xl font-bold text-emerald-500 leading-none">{cred.metric}</span>
                      <span className={`font-mono-code text-[9px] mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>/ 1000</span>
                    </div>

                    {/* Verify CTA */}
                    <a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono-code text-xs font-bold transition-colors shadow-sm whitespace-nowrap"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Verify Credential</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ── SECONDARY GRID: 2-column uniform cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.filter(c => !c.isFeatured).map((cred) => {
              const IconComponent = cred.icon;
              return (
                <div
                  key={cred.id}
                  className={`group rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                    isDark
                      ? 'bg-[#121215] border-[#222226] hover:border-zinc-700 hover:bg-[#16161a]'
                      : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Header row: Icon + Issuer + Metric */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg border transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30' : 'bg-zinc-100 border-zinc-200 text-zinc-600 group-hover:text-emerald-600'}`}>
                          <IconComponent className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <div>
                          <p className="font-mono-code text-[10px] text-zinc-500 uppercase tracking-wider">{cred.issuerShort}</p>
                          <p className="font-mono-code text-[9px] text-emerald-500">{cred.verifyVia}</p>
                        </div>
                      </div>
                      <div className={`text-right shrink-0 px-2.5 py-1 rounded-md border font-mono-code ${isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                        <p className={`text-[9px] uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{cred.metricLabel}</p>
                        <p className={`text-sm font-bold leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{cred.metric}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-sm font-bold tracking-tight mb-2 leading-snug ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      {cred.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {cred.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cred.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded font-mono-code text-[9px] border ${isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Credential ID (if exists) */}
                    {cred.credentialId && (
                      <div className={`inline-flex items-center gap-1 font-mono-code text-[10px] mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                        <span>ID: {cred.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Verify Button */}
                  <div className={`mt-4 pt-3 border-t ${isDark ? 'border-zinc-800/60' : 'border-zinc-100'}`}>
                    <a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-3 rounded-lg font-mono-code text-xs font-semibold flex items-center justify-between transition-all duration-150 ${
                        isDark
                          ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                          : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 stroke-[2] text-emerald-500" />
                        <span>Verify Credential</span>
                      </span>
                      <ArrowUpRight className="w-3 h-3 stroke-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            5. TECHNICAL STACK (3-COLUMN CLEAN GRID)
        ========================================== */}
        <section id="stack" className="py-16 sm:py-24 border-b border-zinc-800/40 scroll-mt-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-1">Technical Stack</h2>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Production technologies, frameworks, backend infrastructure, and analytical toolsets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TECH_STACK.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.category}
                  className={`p-6 rounded-2xl border flex flex-col justify-between ${
                    isDark ? 'bg-[#121215] border-[#222226]' : 'bg-white border-zinc-200 shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-2.5 mb-3">
                      <div
                        className={`p-2 rounded-lg border ${
                          isDark
                            ? 'bg-zinc-900 border-zinc-800 text-emerald-400'
                            : 'bg-zinc-50 border-zinc-200 text-emerald-600'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 stroke-[1.5]" />
                      </div>
                      <h3 className="font-semibold text-sm tracking-tight">{group.category}</h3>
                    </div>

                    <p className={`text-xs mb-5 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {group.summary}
                    </p>
                  </div>

                  {/* Monospace Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/40">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md font-mono-code text-xs border transition-colors ${
                          isDark
                            ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300'
                            : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-emerald-500/40 hover:text-emerald-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            6. MINIMALIST FOOTER
        ========================================== */}
        <footer className="py-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold tracking-tight mb-2">
                Let’s build reliable AI systems together.
              </h2>
              <div className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono-code ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <a
                  href="mailto:rizky80firmansyah@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  rizky80firmansyah@gmail.com
                </a>
                <span>•</span>
                <a
                  href="http://wa.me/6281380482452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +62 813-8048-2452 (WhatsApp)
                </a>
                <span>•</span>
                <span>Bekasi, Indonesia</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* WhatsApp Button */}
              <a
                href="http://wa.me/6281380482452"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs flex items-center space-x-1.5 transition-colors shrink-0 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
                <span>WhatsApp</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href="http://www.linkedin.com/in/rizky-firmansyah-sipahutar-a9a9b6287"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300'
                }`}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/RizkyFirmansyah122"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300'
                }`}
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>

              {/* Download CV Button */}
              <a
                href="/Rizky_Firmansyah_CV.pdf"
                download="Rizky_Firmansyah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300'
                }`}
              >
                <Download className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Download CV</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className={`px-3 py-2 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                  isDark
                    ? 'bg-[#121215] border-[#222226] text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[2] text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 stroke-[1.5] text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className={`mt-12 pt-6 border-t text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${isDark ? 'border-zinc-900 text-zinc-500' : 'border-zinc-200 text-zinc-500'}`}>
            <span>© {new Date().getFullYear()} Rizky Firmansyah Sipahutar.</span>
            <span className="font-mono-code">B.Sc. Computer Science — YARSI University</span>
          </div>
        </footer>
      </main>

      {/* ==========================================
          CLEAN PRINTABLE RESUME MODAL
      ========================================== */}
      {isCvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div
            className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 ${
              isDark ? 'bg-[#121215] border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/60">
              <div>
                <h3 className="text-lg font-bold">Rizky Firmansyah Sipahutar</h3>
                <p className="text-xs text-zinc-400 font-mono-code">
                  AI & Computer Vision Engineer · GPA 3.77/4.00
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono-code text-zinc-500 mt-1">
                  <span>rizky80firmansyah@gmail.com</span>
                  <span>•</span>
                  <span>+62 813-8048-2452</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="/Rizky_Firmansyah_CV.pdf"
                  download="Rizky_Firmansyah_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs flex items-center space-x-1.5 transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2]" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                      : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-black'
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setIsCvOpen(false)}
                  className="p-1.5 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
              <div>
                <div className="font-mono-code text-xs text-emerald-500 uppercase mb-1">Summary</div>
                <p className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                  Computer Science graduate from YARSI University (GPA 3.77/4.00) specializing in Artificial Intelligence, Deep Learning, and Computer Vision. Experienced in taking AI architectures from dataset curation to production deployment using Python and SQL.
                </p>
              </div>

              <div>
                <div className="font-mono-code text-xs text-emerald-500 uppercase mb-2">Verified Credentials</div>
                <div className="space-y-2.5">
                  {CREDENTIALS.map((c) => (
                    <div key={c.id} className="flex justify-between items-baseline text-xs border-b border-zinc-800/40 pb-1.5">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-emerald-400 transition-colors flex items-center space-x-1"
                      >
                        <span>{c.title}</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500 inline" />
                      </a>
                      <span className="font-mono-code text-zinc-400 ml-2 shrink-0">{c.metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono-code text-xs text-emerald-500 uppercase mb-2">Experience</div>
                <div className="space-y-3">
                  {EXPERIENCE.map((e, i) => (
                    <div key={i}>
                      <div className="font-semibold">
                        {e.role} — <span className="font-normal text-zinc-400">{e.org} ({e.period})</span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-zinc-400 text-xs">
                        {e.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
