import { BrainCircuit, GraduationCap, Landmark } from 'lucide-react';
import { Section } from './Section.jsx';

const facts = [
  { label: 'AI Track', detail: 'Computer Science graduate', icon: GraduationCap },
  { label: 'GPA', detail: '4.92 / 5', icon: Landmark },
  { label: 'Focus', detail: 'Computer Vision and intelligent systems', icon: BrainCircuit },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A technical profile with real-world AI direction.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600">
            Salwa Alameer is a Computer Science graduate from Jazan University specializing in Artificial
            Intelligence, with a strong GPA of 4.92/5 and a focused interest in computer vision, deep learning,
            and intelligent systems that solve practical problems.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            She is seeking COOP and internship opportunities where she can contribute to AI, data, software
            development, digitalization, and technology teams. Her work is shaped by a clear goal: building
            reliable real-world AI systems that support digital transformation and Saudi Vision 2030.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="rounded-[1.5rem] border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-900/5 backdrop-blur">
                <Icon size={22} className="mb-4 text-[#6EA8D6]" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{fact.label}</p>
                <p className="mt-2 font-semibold text-[#2D3748]">{fact.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
