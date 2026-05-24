import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { courses } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function Courses() {
  return (
    <Section id="courses" eyebrow="Continuous Learning" title="Growing across deep learning, data, and AI career pathways.">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {courses.map((course) => (
          <motion.div key={course} variants={fadeUp} whileHover={{ y: -5 }} className="flex gap-4 rounded-[1.6rem] border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-900/5 backdrop-blur">
            <BadgeCheck size={22} className="mt-0.5 shrink-0 text-[#6EA8D6]" />
            <p className="font-semibold leading-7 text-[#2D3748]">{course}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
