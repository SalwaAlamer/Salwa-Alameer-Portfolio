import { motion } from 'framer-motion';
import { reasons } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function WhyHireMe() {
  return (
    <Section id="why-hire-me" eyebrow="Why I Can Add Value" title="I bring more than technical skills." className="bg-[#EEF5FB]/80 dark:bg-white/5">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-7">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I bring more than technical skills. I bring curiosity, discipline, and the ability to turn an idea
            into a working product. I understand how to build, explain, and present technical solutions in a way
            that is clear, useful, and professional.
          </p>
        </div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }} className="rounded-[1.5rem] border border-white/80 bg-white/65 p-5 shadow-lg shadow-slate-900/5 backdrop-blur transition-colors duration-300 dark:border-[#A2C2E1]/15 dark:bg-white/[0.07] dark:shadow-black/20">
                <Icon size={23} className="mb-4 text-[#6EA8D6]" />
                <p className="font-semibold leading-6 text-[#2D3748] dark:text-[#E7EEF7]">{reason.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{reason.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
