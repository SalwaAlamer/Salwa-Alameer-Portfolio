import { BrainCircuit, GraduationCap, Landmark } from 'lucide-react';
import { Section } from './Section.jsx';

const facts = [
  { label: 'AI Track', detail: 'Computer Science graduate', icon: GraduationCap },
  { label: 'GPA', detail: '4.92 / 5', icon: Landmark },
  { label: 'Focus', detail: 'Computer Vision and intelligent systems', icon: BrainCircuit },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="My direction as a developer.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am a Computer Science graduate specializing in Artificial Intelligence and Computer Vision. I like
            working where models, interfaces, and clear thinking meet, especially when the result can help teams
            interpret data more quickly.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            SafeRoad AI shaped how I think about engineering: start with a visible problem, build a reliable
            pipeline, then present the output in a way people can actually use. My next goal is to keep growing in
            a COOP environment where I can contribute, learn from experienced teams, and build with discipline.
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
