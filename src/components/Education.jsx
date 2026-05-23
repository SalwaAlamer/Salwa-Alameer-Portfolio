import { BookOpenCheck, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData.js';
import { Section } from './Section.jsx';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic excellence in Computer Science and AI." className="bg-white/35">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-7">
          <GraduationCap size={34} className="mb-6 text-[#6EA8D6]" />
          <h3 className="text-2xl font-semibold">{education.degree}</h3>
          <p className="mt-3 text-lg text-slate-600">{education.university}</p>
          <div className="mt-8 rounded-[1.4rem] bg-[#2D3748] p-5 text-white">
            <p className="text-sm text-white/60">GPA</p>
            <p className="mt-1 text-4xl font-semibold">{education.gpa}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/60 p-7 shadow-lg shadow-slate-900/5 backdrop-blur">
          <div className="mb-6 flex items-center gap-3">
            <BookOpenCheck size={24} className="text-[#6EA8D6]" />
            <h3 className="text-xl font-semibold">Relevant Coursework</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <div key={course} className="rounded-2xl bg-[#ECECEC]/75 p-4 font-semibold text-slate-600 ring-1 ring-white/70">
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
