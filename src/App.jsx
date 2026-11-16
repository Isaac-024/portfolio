import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import IntroVideoOverlay from './components/IntroVideoOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import EditingCategories from './components/EditingCategories';
import FeaturedProjects from './components/FeaturedProjects';
import SoftwareSkills from './components/SoftwareSkills';
import Collaboration from './components/Collaboration';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  // Show intro video automatically on opening the website
  const [showIntro, setShowIntro] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCompleteIntro = () => {
    setShowIntro(false);
  };

  const handleOpenReel = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 relative selection:bg-purple-600 selection:text-white">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* 2. Intro Video / Opening Experience (Automatic Full-Screen Intro) */}
      <IntroVideoOverlay
        isOpen={showIntro}
        onComplete={handleCompleteIntro}
      />

      {/* 3. Navigation Bar */}
      <Navbar onOpenReel={handleOpenReel} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 2 & 1. Hero Section */}
        <Hero onOpenReel={handleOpenReel} />

        {/* 4. About Me Section */}
        <AboutMe />

        {/* 5. My Editing Categories */}
        <EditingCategories onSelectVideo={(project) => setSelectedVideo(project)} />

        {/* 6. Featured Projects */}
        <FeaturedProjects onSelectVideo={(project) => setSelectedVideo(project)} />

        {/* 7. Software & Skills */}
        <SoftwareSkills />

        {/* 8. Collaboration Section */}
        <Collaboration />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Full-Screen Video Modal Player */}
      <VideoModal
        project={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
