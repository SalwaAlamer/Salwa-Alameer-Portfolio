import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Courses from './components/Courses.jsx';
import WhyHireMe from './components/WhyHireMe.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { profile } from './data/portfolioData.js';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#ECECEC] text-[#2D3748]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[8] grid place-items-center overflow-hidden">
        <img
          src={profile.saudiSymbol}
          alt=""
          className="w-[145vw] max-w-[82rem] opacity-[0.028] mix-blend-multiply blur-[0.35px] sm:w-[105vw] lg:w-[78vw]"
        />
      </div>
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Courses />
        <WhyHireMe />
        <Contact />
      </main>
      <div className="relative z-[2]">
        <Footer />
      </div>
    </div>
  );
}
