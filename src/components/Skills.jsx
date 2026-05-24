import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Toolkit" title="The tools I use to turn AI ideas into working systems." className="bg-white/35 dark:bg-white/5">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
      >
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-[1.75rem] p-5 transition"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#A2C2E1]/25 text-[#2D3748]">
                <Icon size={23} />
              </div>
              <h3 className="text-lg font-semibold text-[#2D3748]">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/70 bg-[#ECECEC]/70 px-3 py-1.5 text-sm font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
