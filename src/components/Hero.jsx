import React, { useEffect, useState } from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight, Phone, Shield, Zap } from 'lucide-react';

const Hero = ({ scrollTo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/2158001056/photo/bent-rebar.jpg?s=612x612&w=0&k=20&c=ZMjHYv0bGNAerlsixdbK9zC8O7gfOYZDVCoX7OYt4PQ=')] bg-cover bg-center bg-no-repeat scale-110 animate-slow-zoom" />
        
        {/* Overlay Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Small Badge */}
          <div className={`mb-8 transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 bg-orange-600/10 backdrop-blur-sm border border-orange-600/30 rounded-full px-4 py-2">
              <Zap size={14} className="text-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Steel Reinforcement Specialists</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-8xl font-black leading-[1.1] uppercase mb-8 tracking-tighter transition-all duration-1000 delay-400 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Building The
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Backbone Of
              </span>
              <svg className="absolute -bottom-3 left-0 w-full" height="4" viewBox="0 0 300 4" fill="none">
                <path d="M0 2 L300 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Construction
            </span>
          </h1>

          {/* Description */}
          <p className={`text-zinc-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed border-l-3 border-orange-600 pl-6 transition-all duration-1000 delay-600 transform ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Professional rebar bending, cutting, and fixing for residential slabs to industrial foundations. 
            Every bend engineered for strength, every delivery on time.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-5 mb-12 transition-all duration-1000 delay-800 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => scrollTo('contact')} 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-5 font-black uppercase tracking-wider rounded-full shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <div className="relative flex items-center gap-2">
                <span className="text-white">Get a Quote</span>
                <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button 
              onClick={() => scrollTo('portfolio')} 
              className="group bg-white/5 backdrop-blur-md border border-white/20 px-10 py-5 font-black uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>View Projects</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap gap-6 transition-all duration-1000 delay-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-orange-500" />
              <span className="text-zinc-500 text-xs uppercase tracking-wider">SANS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span className="text-zinc-500 text-xs uppercase tracking-wider">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-orange-500" />
              <span className="text-zinc-500 text-xs uppercase tracking-wider">10+ Years Exp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons - Enhanced */}
      <div className={`absolute bottom-8 left-8 z-30 transition-all duration-1000 delay-1200 transform ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <div className="flex flex-col gap-4">
          <div className="w-px h-12 bg-orange-600/50 mx-auto" />
          <div className="flex flex-col gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 group">
              <Instagram size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 group">
              <Linkedin size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 group">
              <Twitter size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
          </div>
          <div className="w-px h-12 bg-orange-600/50 mx-auto" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 right-8 z-30 transition-all duration-1000 delay-1200 transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-orange-600 to-transparent animate-scroll" />
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Custom Animations */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(20px); opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;