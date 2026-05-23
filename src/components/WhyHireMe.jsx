import { motion } from 'framer-motion';
import { reasons } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function WhyHireMe() {
  return (
    <Section id="why-hire-me" eyebrow="Why Hire Me" title="Ready to contribute to COOP teams building useful technology." className="bg-[#EEF5FB]">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-7">
          <p className="text-lg leading-8 text-slate-600">
            Salwa brings a strong Computer Science and Artificial Intelligence background, high academic
            performance, and practical experience developing a complete computer vision system from data
            preparation through dashboard delivery.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            For COOP and internship roles, she offers the blend recruiters look for: technical curiosity,
            hands-on execution, a detail-oriented working style, and motivation to contribute to digital
            transformation initiatives aligned with Saudi Vision 2030.
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
