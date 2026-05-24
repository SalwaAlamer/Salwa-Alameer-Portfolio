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
  headline: 'Building Intelligent AI Systems for Safer, Smarter Communities',
  subtext:
    'I build AI-powered solutions that turn data into real-world impact. My work focuses on computer vision, intelligent monitoring, and digital tools that support safer infrastructure, smarter decisions, and technology-driven progress.',
  email: 'salwaalameer5@gmail.com',
  phone: '0533650908',
  linkedin: 'https://linkedin.com/in/salwa-al-ameer',
  github: 'https://github.com/SalwaAlamer',
  logo: '/assets/salwa-sa-logo.png',
  saudiSymbol: '/assets/saudi-symbol.jpg',
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
      'SafeRoad AI was built to address a real infrastructure challenge: road hazards that can affect safety, comfort, and maintenance response. The system uses computer vision to detect potholes, estimate severity, visualize results, and support data-driven road safety decisions.',
    highlights: [
      'Supports faster identification of road hazards.',
      'Helps transform visual road data into actionable insights.',
      'Combines AI detection, severity analysis, monitoring, and reporting.',
      'Demonstrates how computer vision can contribute to smart infrastructure.',
      'Aligns with Saudi Vision 2030 goals for innovation, safety, and digital transformation.',
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
    name: 'Personal Portfolio Website - Building My Digital Identity',
    subtitle: 'Building My Digital Presence',
    description:
      'Designed and developed a modern responsive portfolio website to showcase my AI projects, skills, academic background, and professional identity. The website was built to support COOP applications, recruiter visibility, and long-term career growth.',
    highlights: [
      'Designed and developed a responsive personal portfolio website.',
      'Built reusable React components and centralized project content.',
      'Created a clean visual identity using soft colors, custom branding, and modern animations.',
      'Deployed the website using GitHub and Vercel with a stable public link.',
      'Built the website to support COOP applications, recruiter visibility, and long-term career growth.',
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
    text: 'I focus on building solutions that solve meaningful problems and create real-world value.',
    icon: Rocket,
  },
  {
    title: 'AI & Computer Vision Foundation',
    text: 'I have hands-on experience with computer vision pipelines, model evaluation, dashboards, and practical AI deployment.',
    icon: Eye,
  },
  {
    title: 'End-to-End Thinking',
    text: 'I can move from problem analysis to implementation, testing, visualization, and presentation.',
    icon: Gauge,
  },
  {
    title: 'Professional Digital Presence',
    text: 'I understand how to present work through GitHub, documentation, portfolio design, and deployed applications.',
    icon: Award,
  },
  {
    title: 'Ready for COOP Growth',
    text: 'I am eager to learn, contribute, receive feedback, and grow in a professional technology environment.',
    icon: UsersRound,
  },
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
