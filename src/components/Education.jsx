import { BookOpenCheck, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData.js';
import { Section } from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic excellence in Computer Science and AI." className="bg-white/35 dark:bg-white/[0.04]">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-7">
          <GraduationCap size={34} className="mb-6 text-[#6EA8D6]" />
          <h3 className="text-2xl font-semibold">{education.degree}</h3>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{education.university}</p>
          <div className="mt-8 rounded-[1.4rem] bg-[#2D3748] p-5 text-white shadow-lg shadow-slate-900/10 dark:bg-[#E7EEF7] dark:text-[#0D1320] dark:shadow-black/20">
            <p className="text-sm text-white/60 dark:text-[#0D1320]/60">GPA</p>
            <p className="mt-1 text-4xl font-semibold">{education.gpa}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/60 p-7 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-[#A2C2E1]/15 dark:bg-white/[0.07] dark:shadow-black/20">
          <div className="mb-6 flex items-center gap-3">
            <BookOpenCheck size={24} className="text-[#6EA8D6]" />
            <h3 className="text-xl font-semibold text-[#2D3748] dark:text-[#E7EEF7]">Relevant Coursework</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <div key={course} className="rounded-2xl bg-[#ECECEC]/75 p-4 font-semibold text-slate-600 ring-1 ring-white/70 transition-colors duration-300 dark:bg-[#111928]/80 dark:text-slate-200 dark:ring-[#A2C2E1]/15">
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
