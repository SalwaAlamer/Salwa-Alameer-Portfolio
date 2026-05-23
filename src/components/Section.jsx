import { motion } from 'framer-motion';

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#6EA8D6]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-[#2D3748] sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export function staggerContainer(delay = 0) {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.08,
      },
    },
  };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
