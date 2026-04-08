import React, { useState, useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Pages
import AboutDetail from './pages/AboutDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'about-detail'
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to update active tab and navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') return;
      
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Scroll to a specific section
  const scrollTo = (id) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Open About detail page
  const openAboutPage = () => {
    setCurrentPage('about-detail');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  // Go back to home
  const goBackHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Render About Detail Page
  if (currentPage === 'about-detail') {
    return (
      <>
        <AboutDetail onBack={goBackHome} scrollTo={scrollTo} />
      </>
    );
  }

  // Render Main Home Page
  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar 
        scrolled={scrolled}
        activeTab={activeTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollTo={scrollTo}
        openAboutPage={openAboutPage}
      />

      {/* Hero Section */}
      <Hero scrollTo={scrollTo} />

      {/* About Section */}
      <About scrollTo={scrollTo} openAboutPage={openAboutPage} />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer scrollTo={scrollTo} openAboutPage={openAboutPage} />
    </div>
  );
};

export default App;

