import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { HrmsSpotlight } from './components/HrmsSpotlight/HrmsSpotlight';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ResumeModal } from './components/ResumeModal/ResumeModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <HrmsSpotlight />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
