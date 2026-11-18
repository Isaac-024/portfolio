import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Phase 1 Opening Screens
import LoadingScreen from './components/LoadingScreen';
import DiveInScreen from './components/DiveInScreen';

// Phase 2 Main Portfolio Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import FeaturedProjects from './components/FeaturedProjects';
import EditingCategories from './components/EditingCategories';
import SoftwareSkills from './components/SoftwareSkills';
import Collaboration from './components/Collaboration';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  // Opening flow stages: 'loading' -> 'divein' -> 'main'
  const [stage, setStage] = useState('loading');
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-white selection:text-black">
      {/* Opening Experience */}
      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <LoadingScreen key="loading" onReady={() => setStage('divein')} />
        )}
        {stage === 'divein' && (
          <DiveInScreen key="divein" onDiveIn={() => setStage('main')} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Homepage (Visible once stage === 'main') */}
      {stage === 'main' && (
        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <AboutMe />
            <FeaturedProjects onSelectProject={(p) => setActiveModalProject(p)} />
            <EditingCategories />
            <SoftwareSkills />
            <Collaboration />
            <ContactSection />
          </main>
          <Footer />

          {/* Modal player for projects/categories */}
          <VideoModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        </div>
      )}
    </div>
  );
}
