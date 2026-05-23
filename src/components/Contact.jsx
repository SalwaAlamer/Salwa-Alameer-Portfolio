import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { contactLinks, profile } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to COOP, internship, and early-career AI opportunities.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
          <Send size={31} className="mb-6 text-[#6EA8D6]" />
          <h3 className="text-2xl font-semibold">Let’s connect</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Recruiters and technology teams can reach Salwa directly for AI, data, software development,
            digitalization, and intelligent systems opportunities.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2D3748] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-[#6EA8D6] hover:shadow-[#6EA8D6]/30"
          >
            Contact Me
            <ArrowRight size={17} />
          </a>
        </div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                variants={fadeUp}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-[1.5rem] border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:border-[#A2C2E1]"
              >
                <Icon size={22} className="mb-4 text-[#6EA8D6]" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                <p className="mt-2 break-words font-semibold text-[#2D3748]">{item.value}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
