import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, GitBranchIcon, Mail, ScanSearch } from 'lucide-react';
import { impactPillars, profile } from '../data/portfolioData.js';

export default function Hero() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const backgroundY = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28 sm:pt-32">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_24%,rgba(162,194,225,0.42),transparent_34%),radial-gradient(ellipse_at_82%_18%,rgba(110,168,214,0.22),transparent_30%),linear-gradient(180deg,#ECECEC_0%,#EEF4F8_56%,#ECECEC_100%)]"
      />
      <div className="section-shell grid items-center gap-10 pb-14 sm:gap-12 sm:pb-20 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-base font-semibold text-[#6EA8D6] sm:text-lg">{profile.title}</p>
          <h1 className="max-w-4xl text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-[#2D3748] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:mt-7 sm:text-lg">{profile.subtext}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#project"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2D3748] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-[#6EA8D6] hover:shadow-[#6EA8D6]/30"
            >
              View Projects
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/75 px-6 py-3.5 text-sm font-semibold text-[#2D3748] shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:border-[#6EA8D6] hover:shadow-[#6EA8D6]/20"
            >
              <Mail size={17} />
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] px-6 py-3.5 text-sm font-semibold text-[#2D3748] transition hover:border-[#6EA8D6] hover:bg-white/70"
            >
              <GitBranchIcon size={17} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[31rem] lg:max-w-none"
        >
          <motion.div
            className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="rounded-[1.5rem] bg-[#2D3748] p-5 text-white shadow-2xl shadow-slate-900/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Featured intelligent system</p>
                  <h2 className="mt-2 text-2xl font-semibold">SafeRoad AI</h2>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#A2C2E1]/18 text-[#A2C2E1]">
                  <ScanSearch size={22} />
                </span>
              </div>
              <div className="mt-7 grid gap-3">
                {['YOLOv8 detection pipeline', 'Severity and confidence analytics', 'Streamlit monitoring dashboard'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-white/85">{item}</span>
                      <span className="flex shrink-0 items-end gap-1.5 rounded-full border border-[#A2C2E1]/20 bg-[#A2C2E1]/10 px-2.5 py-2 shadow-inner shadow-white/5">
                        {[0, 1, 2].map((bar) => (
                          <motion.span
                            key={bar}
                            className="w-1.5 rounded-full bg-[#A2C2E1] shadow-[0_0_12px_rgba(162,194,225,0.65)]"
                            initial={false}
                            animate={reduceMotion ? undefined : { height: [8 + bar * 3, 15 - bar * 2, 8 + bar * 3] }}
                            transition={{ duration: 2.2, delay: index * 0.16 + bar * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ height: `${8 + bar * 3}px` }}
                          />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-6 hidden grid-cols-4 gap-3 sm:grid lg:grid-cols-2">
            {impactPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.label} className="rounded-3xl border border-white/70 bg-white/60 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
                  <Icon size={20} className="mb-3 text-[#6EA8D6]" />
                  <p className="text-sm font-semibold text-[#2D3748]">{pillar.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
