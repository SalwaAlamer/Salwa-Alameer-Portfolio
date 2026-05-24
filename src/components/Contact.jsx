import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { contactLinks } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Let's Connect" title="A clean path to reach me.">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 lg:grid-cols-3"
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
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition duration-300 hover:border-[#6EA8D6]/50 hover:shadow-xl hover:shadow-[#6EA8D6]/15 dark:border-[#A2C2E1]/15 dark:bg-[#111928]/72 dark:shadow-black/20 dark:hover:border-[#6EA8D6]/45 dark:hover:shadow-[#6EA8D6]/10"
              aria-label={`Open ${item.label}`}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#A2C2E1]/70 to-transparent opacity-80 dark:via-[#6EA8D6]/45" />
              <div className="flex items-center justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#A2C2E1]/30 bg-[#A2C2E1]/18 text-[#2D3748] transition-colors duration-300 group-hover:bg-[#6EA8D6]/20 dark:border-[#6EA8D6]/25 dark:bg-[#6EA8D6]/12 dark:text-[#A2C2E1]">
                    <Icon size={21} />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-[#2D3748] dark:text-[#E7EEF7]">{item.label}</span>
                    <span className="mt-1 block text-sm font-medium text-slate-500 dark:text-slate-400">{item.helper}</span>
                  </span>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E2E8F0] text-[#6EA8D6] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#6EA8D6]/50 group-hover:bg-[#6EA8D6]/10 dark:border-[#A2C2E1]/15 dark:bg-white/[0.04]">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </Section>
  );
}
