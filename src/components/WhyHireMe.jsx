import { motion } from 'framer-motion';
import { reasons } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function WhyHireMe() {
  return (
    <Section id="why-hire-me" eyebrow="Why Hire Me" title="Ready to contribute to teams building useful technology." className="bg-[#EEF5FB]/80">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-7">
          <p className="text-lg leading-8 text-slate-600">
            I combine AI knowledge with practical implementation. I can move from idea to data preparation,
            model development, dashboard design, and deployment thinking while keeping the end user and real-world
            value in focus.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            I understand how to present technical work professionally, care about usability and impact, and I am
            ready to contribute, learn fast, and grow in a COOP environment aligned with digital transformation and
            Saudi Vision 2030.
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
              <motion.div key={reason.title} variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }} className="rounded-[1.5rem] border border-white/80 bg-white/65 p-5 shadow-lg shadow-slate-900/5 backdrop-blur">
                <Icon size={23} className="mb-4 text-[#6EA8D6]" />
                <p className="font-semibold leading-6 text-[#2D3748]">{reason.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
