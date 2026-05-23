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
  headline: 'Building intelligent AI solutions for safer and smarter real-world systems.',
  subtext:
    'Computer Science graduate with an Artificial Intelligence focus, strong academic performance, and hands-on experience building real-world computer vision systems using YOLOv8, PyTorch, OpenCV, and Streamlit.',
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
  { label: 'Project', href: '#project' },
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

export const project = {
  name: 'SafeRoad AI',
  subtitle: 'AI-Based Pothole Detection System',
  github: 'https://github.com/SalwaAlamer/SafeRoad-AI',
  description:
    'An end-to-end AI-powered road hazard detection system designed to detect potholes, classify severity, visualize results, and support smarter road safety decisions.',
  highlights: [
    'Developed a real-time road hazard detection system using YOLOv8.',
    'Built the full ML pipeline from data collection and preprocessing to model evaluation and deployment.',
    'Processed 1,000+ road images using cleaning and augmentation techniques.',
    'Built an interactive Streamlit dashboard for detection visualization, confidence tracking, severity trend analysis, and performance monitoring.',
    'Designed to support smart infrastructure and road safety goals aligned with Saudi Vision 2030.',
  ],
  metrics: [
    { label: 'Accuracy', value: '99.5%' },
    { label: 'Precision', value: '100%' },
    { label: 'Recall', value: '99.5%' },
    { label: 'F1 Score', value: '99.7%' },
  ],
  technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit', 'Pandas', 'Matplotlib'],
};

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
  { title: 'Strong CS and AI foundation', icon: GraduationCap },
  { title: 'High GPA and academic excellence', icon: Award },
  { title: 'Practical AI project experience', icon: Rocket },
  { title: 'Real-world computer vision systems', icon: Eye },
  { title: 'Dashboards and monitoring tools', icon: Gauge },
  { title: 'Aligned with Vision 2030 digital transformation', icon: TrendingUp },
  { title: 'Fast learner and detail-oriented contributor', icon: Sparkles },
  { title: 'Ready to collaborate in technology teams', icon: UsersRound },
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
