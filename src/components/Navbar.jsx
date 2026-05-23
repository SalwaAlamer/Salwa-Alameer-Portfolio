import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GitBranchIcon, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolioData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/65 px-3.5 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-5 sm:py-3"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5 font-semibold text-[#2D3748] sm:gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-white/90 bg-[#ECECEC] shadow-sm shadow-slate-900/10 sm:h-11 sm:w-11">
            <img
              src={profile.logo}
              alt="Salwa Alameer SA logo"
              className="h-full w-full object-cover"
              width="44"
              height="44"
            />
          </span>
          <span className="max-w-[10rem] truncate text-sm sm:max-w-none sm:text-base">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-[#2D3748]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] text-[#2D3748] transition hover:border-[#6EA8D6] hover:bg-[#A2C2E1]/20"
            aria-label="Open Salwa Alameer's GitHub"
          >
            <GitBranchIcon size={18} />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#2D3748] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#6EA8D6] hover:shadow-[#6EA8D6]/30"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#A2C2E1]/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
