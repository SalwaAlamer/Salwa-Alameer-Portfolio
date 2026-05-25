import {
  Award,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Code2,
  Database,
  Eye,
  Gauge,
  GraduationCap,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  SquareTerminal,
  UsersRound,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Salwa Alameer',
  title: 'AI & Computer Vision Computer Science Graduate',
  headline: 'Building Intelligent AI Systems for Safer, Smarter Communities',
  subtext:
    'I turn visual data into practical tools for detection, monitoring, and decision support. My work connects computer vision with clear interfaces that help people understand and act faster.',
  email: 'salwaalameer5@gmail.com',
  linkedin: 'https://linkedin.com/in/salwa-al-ameer',
  github: 'https://github.com/SalwaAlamer',
  logo: '/assets/salwa-sa-logo.png',
  saudiSymbol: '/assets/saudi-symbol-watermark.png',
  cv: '/assets/Salwa_Alameer_Resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Work', href: '#project' },
  { label: 'Education', href: '#education' },
  { label: "Let's Connect", href: '#contact' },
];

export const skills = [
  {
    category: 'Programming',
    icon: Code2,
    items: ['Python', 'Java', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: ['YOLOv8', 'PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning'],
  },
  {
    category: 'Web & UI',
    icon: Layers3,
    items: ['HTML', 'CSS', 'JavaScript', 'Streamlit'],
  },
  {
    category: 'Data Analytics',
    icon: BarChart3,
    items: ['Pandas', 'Matplotlib', 'Data Visualization', 'Dashboard Development', 'Performance Monitoring'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Jupyter Notebook'],
  },
];

export const projects = [
  {
    name: 'SafeRoad AI - From Detection to Safer Roads',
    subtitle: 'AI-Based Pothole Detection System',
    github: 'https://github.com/SalwaAlamer/SafeRoad-AI',
    description:
      'SafeRoad AI addresses a practical road-maintenance challenge: turning road images into structured hazard insights. The system detects potholes, estimates severity, visualizes results, and supports faster review.',
    highlights: [
      'Supports faster identification of road hazards.',
      'Transforms road imagery into actionable maintenance signals.',
      'Combines AI detection, severity analysis, monitoring, and reporting.',
      'Shows how computer vision can support safer infrastructure planning.',
      'Connects technical execution with Saudi Vision 2030 priorities for innovation and digital transformation.',
    ],
    metrics: [
      { label: 'Accuracy', value: '99.5%' },
      { label: 'Precision', value: '100%' },
      { label: 'Recall', value: '99.5%' },
      { label: 'F1 Score', value: '99.7%' },
    ],
    technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit', 'Pandas', 'Matplotlib'],
    visuals: [
      { src: '/assets/saferoad-detection.webp', alt: 'SafeRoad AI detection interface with pothole bounding boxes' },
      { src: '/assets/saferoad-dashboard.webp', alt: 'SafeRoad AI dashboard interface' },
      { src: '/assets/saferoad-analytics.webp', alt: 'SafeRoad AI performance analytics dashboard' },
    ],
  },
  {
    name: 'Waraq - Grade Any Exam in 10 Seconds',
    subtitle: 'AI-Powered Exam Grading Platform',
    github: 'https://github.com/SalwaAlamer/Waraq-Platform',
    description:
      'Waraq is an AI-powered handwritten exam grading platform using Gemini Vision, FastAPI, and Next.js. It extracts answers from exam papers, grades them semantically, provides bilingual feedback, and includes a teacher dashboard with analytics.',
    highlights: [
      'Supports handwritten exam upload for teacher review workflows.',
      'Uses Gemini Vision OCR to extract answers from exam papers.',
      'Applies AI-assisted grading with bilingual feedback.',
      'Includes a teacher dashboard for grading activity and student insights.',
      'Provides analytics and CSV export for easier reporting.',
    ],
    technologies: ['Next.js', 'FastAPI', 'Gemini Vision', 'SQLite', 'Tailwind CSS', 'Recharts', 'EasyOCR'],
  },
  {
    name: 'Personal Portfolio Website - Building My Digital Identity',
    subtitle: 'Building My Digital Presence',
    description:
      'Designed and developed this responsive portfolio as my professional digital identity, combining frontend engineering, UI/UX judgment, brand direction, and deployment practice.',
    highlights: [
      'Built reusable React components and centralized project content.',
      'Created a clean visual identity using soft colors, custom branding, and modern animations.',
      'Structured sections for selected work, technical strengths, education, learning, and contact.',
      'Prepared the site for GitHub and Vercel deployment with a stable recruiter-facing link.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Git', 'GitHub', 'Vercel'],
  },
];

export const education = {
  degree: 'Bachelor of Computer Science - Artificial Intelligence Track',
  university: 'Jazan University',
  gpa: '4.92 / 5',
  coursework: [
    'Data Structures and Algorithms',
    'Artificial Intelligence',
    'Computer Vision',
    'Database Systems',
    'Software Engineering',
  ],
};

export const courses = [
  'Deep Neural Networks with PyTorch - Coursera / IBM',
  'Neural Networks and Deep Learning - Coursera / DeepLearning.AI',
  'Data Science and AI Career Track - Satar Platform / Tuwaiq Academy',
  'Data Analysis Career Track - Satar Platform / Tuwaiq Academy',
];

export const reasons = [
  {
    title: 'Impact-Oriented Builder',
    text: 'I start from the problem, then shape the technical solution around what people actually need to see, decide, or improve.',
    icon: Rocket,
  },
  {
    title: 'AI & Computer Vision Foundation',
    text: 'I have hands-on experience with detection pipelines, model evaluation, dashboards, and deployment-ready project structure.',
    icon: Eye,
  },
  {
    title: 'End-to-End Thinking',
    text: 'I can move from analysis to implementation, testing, visualization, documentation, and presentation.',
    icon: Gauge,
  },
  {
    title: 'Professional Digital Presence',
    text: 'I care about how technical work is explained, designed, documented, and shared with professional audiences.',
    icon: Award,
  },
  {
    title: 'Ready for COOP Growth',
    text: 'I am eager to learn, contribute, receive feedback, and grow in a professional technology environment.',
    icon: UsersRound,
  },
];

export const contactLinks = [
  { label: 'Email', helper: 'Click to connect', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', helper: 'Open profile', href: profile.linkedin, icon: Briefcase },
  { label: 'GitHub', helper: 'View code', href: profile.github, icon: SquareTerminal },
];

export const impactPillars = [
  { label: 'Computer Vision', icon: Eye },
  { label: 'Intelligent Systems', icon: BrainCircuit },
  { label: 'Road Safety AI', icon: ShieldCheck },
  { label: 'Data Dashboards', icon: Database },
];
