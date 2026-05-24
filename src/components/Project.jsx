import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, GitBranchIcon } from 'lucide-react';
import { projects } from '../data/portfolioData.js';
import { fadeUp, Section, staggerContainer } from './Section.jsx';

function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7 }}
      className="glass-panel overflow-hidden rounded-[2rem]"
    >
      <div className={`${featured ? 'bg-[#2D3748] text-white dark:bg-[#111928]' : 'bg-white/60 text-[#2D3748] dark:bg-white/8 dark:text-[#E7EEF7]'} p-6 sm:p-8`}>
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${featured ? 'text-[#A2C2E1]' : 'text-[#6EA8D6]'}`}>
          {project.subtitle}
        </p>
        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-3xl font-semibold">{project.name}</h3>
            <p className={`mt-4 max-w-3xl leading-7 ${featured ? 'text-white/72' : 'text-slate-600 dark:text-slate-300'}`}>
              {project.description}
            </p>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ECECEC] px-5 py-3 text-sm font-semibold text-[#2D3748] transition hover:bg-[#A2C2E1] dark:bg-[#E7EEF7] dark:text-[#0D1320]"
            >
              <GitBranchIcon size={17} />
              GitHub
            </a>
          )}
        </div>
      </div>

      {project.visuals && (
        <div className="grid gap-4 px-6 pt-6 sm:px-8 sm:pt-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/50 shadow-lg shadow-slate-900/5 dark:border-[#A2C2E1]/15 dark:bg-white/8">
            <img src={project.visuals[0].src} alt={project.visuals[0].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {project.visuals.slice(1).map((visual) => (
              <div key={visual.src} className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/50 shadow-lg shadow-slate-900/5 dark:border-[#A2C2E1]/15 dark:bg-white/8">
                <img src={visual.src} alt={visual.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 rounded-2xl bg-white/60 p-4 dark:bg-white/8">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#6EA8D6]" />
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight}</p>
            </div>
          ))}
        </div>

        <div className="grid content-start gap-5">
          {project.metrics && (
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              className="grid grid-cols-2 gap-4"
            >
              {project.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-[1.6rem] border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-[#A2C2E1]/15 dark:bg-white/8"
                >
                  <p className="text-3xl font-semibold text-[#2D3748] dark:text-[#E7EEF7]">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-[#A2C2E1]/15 dark:bg-white/8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <ArrowUpRight size={22} className="text-[#6EA8D6]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-[#ECECEC]/75 px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-white/70 dark:bg-white/8 dark:text-slate-300 dark:ring-[#A2C2E1]/15">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Project() {
  return (
    <Section
      id="project"
      eyebrow="Selected Work"
      title="Selected work for AI impact, smart infrastructure, and professional visibility."
    >
      <div className="grid gap-8">
        {projects.map((item, index) => (
          <ProjectCard key={item.name} project={item} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}
