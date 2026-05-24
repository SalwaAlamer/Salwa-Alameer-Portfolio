import { Target } from 'lucide-react';
import { Section } from './Section.jsx';

export default function Impact() {
  return (
    <Section id="impact" eyebrow="Impact Statement" title="Technology with Purpose" className="py-16 sm:py-20">
      <div className="glass-panel grid gap-6 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[#2D3748] text-[#A2C2E1] shadow-xl shadow-slate-900/15 transition-colors duration-300 dark:bg-[#E7EEF7] dark:text-[#0D1320] dark:shadow-black/20">
          <Target size={28} />
        </div>
        <p className="max-w-4xl text-xl leading-9 text-slate-600 dark:text-slate-300">
          I do not see AI as only models, code, or metrics. I see it as a tool for solving problems that affect
          people, cities, and communities. My goal is to build intelligent systems that are useful, reliable, and
          meaningful in the real world.
        </p>
      </div>
    </Section>
  );
}
