import React from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';

const Navbar = ({ 
  scrolled, 
  activeTab, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollTo, 
  openAboutPage 
}) => {
  const navItems = ['home', 'about', 'services', 'portfolio', 'contact'];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/95 py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            <img 
              src="/logo.svg" 
              alt="BendTech Logo" 
              className="w-10 h-10 md:w-12 md:h-12 transition-transform hover:rotate-90"
            />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">
              BEND<span className="text-orange-600">TECH</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => item === 'about' ? openAboutPage() : scrollTo(item)}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-colors ${
                  activeTab === item ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item === 'about' ? 'About Me' : item}
              </button>
            ))}
            <a 
              href="https://wa.me/yournumber" 
              className="bg-orange-600 px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-10 right-10 text-white"
          >
            <X size={40} />
          </button>
          <div className="flex flex-col items-center space-y-10">
            {navItems.map(item => (
              <button 
                key={item} 
                onClick={() => item === 'about' ? openAboutPage() : scrollTo(item)} 
                className="text-5xl font-black uppercase italic tracking-tighter hover:text-orange-600 transition-colors"
              >
                {item === 'about' ? 'About Me' : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

