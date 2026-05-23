import { BriefcaseBusinessIcon, GitBranchIcon, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/70 bg-[#E7E8EA] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-[#2D3748]">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">{profile.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] text-[#2D3748] transition hover:border-[#6EA8D6] hover:bg-[#A2C2E1]/20" aria-label="Email Salwa">
            <Mail size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] text-[#2D3748] transition hover:border-[#6EA8D6] hover:bg-[#A2C2E1]/20" aria-label="Open LinkedIn">
            <BriefcaseBusinessIcon size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] text-[#2D3748] transition hover:border-[#6EA8D6] hover:bg-[#A2C2E1]/20" aria-label="Open GitHub">
            <GitBranchIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
