import { BrainCircuit, GraduationCap, Landmark } from 'lucide-react';
import { Section } from './Section.jsx';

const facts = [
  { label: 'AI Track', detail: 'Computer Science graduate', icon: GraduationCap },
  { label: 'GPA', detail: '4.92 / 5', icon: Landmark },
  { label: 'Focus', detail: 'Computer Vision and intelligent systems', icon: BrainCircuit },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Building practical AI with purpose.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am a Computer Science graduate specializing in Artificial Intelligence and Computer Vision. I am
            passionate about building practical AI systems that solve real problems, not just academic demos. My
            work is driven by the belief that technology should improve people's lives, support smarter
            infrastructure, and create measurable impact.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Through projects like SafeRoad AI, I explored how computer vision can help detect road hazards,
            support maintenance decisions, and contribute to safer communities. I aim to grow as an AI developer
            who combines technical depth, thoughtful design, and a strong sense of purpose aligned with Saudi
            Vision 2030.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="rounded-[1.5rem] border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-900/5 backdrop-blur transition-colors duration-300 dark:border-[#A2C2E1]/15 dark:bg-white/[0.07] dark:shadow-black/20">
                <Icon size={22} className="mb-4 text-[#6EA8D6]" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-400">{fact.label}</p>
                <p className="mt-2 font-semibold text-[#2D3748] dark:text-[#E7EEF7]">{fact.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
