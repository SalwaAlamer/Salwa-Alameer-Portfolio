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
  MapPinned,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  TrendingUp,
  UsersRound,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Salwa Alameer',
  title: 'AI & Computer Vision Computer Science Graduate',
  headline: 'AI & Computer Vision Developer Building Intelligent Solutions for Real-World Impact',
  subtext:
    'I build AI-powered systems that transform data into practical solutions. My work focuses on computer vision, intelligent monitoring, and digital tools that support safer, smarter, and more efficient communities.',
  email: 'salwaalameer5@gmail.com',
  phone: '0533650908',
  linkedin: 'https://linkedin.com/in/salwa-al-ameer',
  github: 'https://github.com/SalwaAlamer',
  logo: '/assets/salwa-sa-logo.png',
  saudiSymbol: '/assets/saudi-symbol.jpg',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
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
    name: 'SafeRoad AI',
    subtitle: 'AI-Based Pothole Detection System',
    github: 'https://github.com/SalwaAlamer/SafeRoad-AI',
    description:
      'I built an end-to-end AI-powered road hazard detection system to detect potholes, classify severity, visualize results, and support smarter road safety decisions.',
    highlights: [
      'Developed a real-time road hazard detection system using YOLOv8.',
      'Built the full ML pipeline from data collection and preprocessing to model evaluation and deployment.',
      'Processed 1,000+ road images using cleaning and augmentation techniques.',
      'Built an interactive Streamlit dashboard for detection visualization, confidence tracking, severity trend analysis, and performance monitoring.',
      'Designed the project to support smart infrastructure and road safety goals aligned with Saudi Vision 2030.',
    ],
    metrics: [
      { label: 'Accuracy', value: '99.5%' },
      { label: 'Precision', value: '100%' },
      { label: 'Recall', value: '99.5%' },
      { label: 'F1 Score', value: '99.7%' },
    ],
    technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit', 'Pandas', 'Matplotlib'],
  },
  {
    name: 'Personal Portfolio Website',
    subtitle: 'Building My Digital Presence',
    description:
      'Designed and developed a modern responsive portfolio website to showcase my AI projects, skills, academic background, and professional identity. The website was built to support COOP applications, recruiter visibility, and long-term career growth.',
    highlights: [
      'Built a responsive portfolio website that works across desktop, tablet, and mobile devices.',
      'Created a clean personal brand identity using custom visuals, soft colors, and professional UI/UX layout.',
      'Integrated sections for projects, skills, education, certifications, contact links, and CV download.',
      'Deployed the website using GitHub and Vercel with a stable public link for recruiters.',
      'Structured the project using reusable React components and centralized content data.',
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
  { title: 'I combine AI knowledge with practical implementation.', icon: GraduationCap },
  { title: 'I can build complete solutions from idea to deployment.', icon: Rocket },
  { title: 'I understand how to present technical work professionally.', icon: Award },
  { title: 'I care about impact, usability, and real-world value.', icon: Sparkles },
  { title: 'I build with smart infrastructure and digital transformation in mind.', icon: TrendingUp },
  { title: 'I am ready to contribute, learn fast, and grow in a COOP environment.', icon: UsersRound },
  { title: 'I can work across computer vision, dashboards, and monitoring tools.', icon: Gauge },
  { title: 'I bring a strong academic foundation with hands-on project experience.', icon: Eye },
];

export const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: 'LinkedIn', value: 'salwa-al-ameer', href: profile.linkedin, icon: Briefcase },
  { label: 'GitHub', value: 'SalwaAlamer', href: profile.github, icon: SquareTerminal },
  { label: 'Location Focus', value: 'Saudi Arabia COOP / Internship Opportunities', href: '#contact', icon: MapPinned },
];

export const impactPillars = [
  { label: 'Computer Vision', icon: Eye },
  { label: 'Intelligent Systems', icon: BrainCircuit },
  { label: 'Road Safety AI', icon: ShieldCheck },
  { label: 'Data Dashboards', icon: Database },
];
