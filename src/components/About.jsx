import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  User, 
  Award, 
  CheckCircle,
  Zap,
  Star,
  Briefcase,
  MapPin
} from 'lucide-react';

const About = ({ scrollTo, openAboutPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
    { number: "150+", label: "Projects Completed", icon: <CheckCircle size={20} /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star size={20} /> },
    { number: "24hr", label: "Fast Turnaround", icon: <Zap size={20} /> },
  ];

  return (
    <section id="about" className="relative py-40 overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[80px]" />
      </div>

      <div id="about-section" className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image Section - Enhanced */}
          <div className="relative">
            {/* Decorative Rings */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-orange-600/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-orange-600/20 rounded-full animate-pulse delay-1000" />
            
            {/* Main Image Container */}
            <div className="relative group">
              {/* Image Border Glow on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500" />
              
              <img 
                src="/images/wahhab.jpg" 
                className="relative w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-lg shadow-2xl" 
                alt="Wahhab A. Abulai - Steel Bending Expert" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              
              {/* Experience Badge - Floating */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-600 to-orange-500 p-6 shadow-2xl animate-bounce-slow hidden md:block rounded-lg">
                <Shield size={32} className="mb-2 text-black" />
                <p className="text-black font-black uppercase tracking-tighter text-sm leading-tight">
                  SANS <br /> CERTIFIED
                </p>
              </div>
            </div>
            
            {/* Name Badge - Mobile */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 rounded-full shadow-lg">
                <p className="text-black font-black uppercase tracking-wider text-sm">Wahhab A. Abulai</p>
              </div>
            </div>
          </div>

          {/* Content Section - Enhanced */}
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-600/20 rounded-full px-4 py-2">
              <Zap className="text-orange-500" size={14} />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Industry Expert</span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
              Meet <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Wahhab
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                  <path d="M0 2 L200 2" stroke="currentColor" strokeWidth="3" className="text-orange-600" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <MapPin size={14} className="text-orange-500" />
              Steel Bending Expert | Ghana
            </p>
            
            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-orange-600/20 font-serif">"</div>
              <p className="text-zinc-300 leading-relaxed text-lg italic border-l-4 border-orange-600 pl-6 py-2">
                I've been bending steel reinforcement for over 10 years — starting as an apprentice under my brother-in-law and now running my own crew.
              </p>
            </div>
            
            {/* Description */}
            <p className="text-zinc-400 leading-relaxed">
              I specialize in rebar bending, cutting, and fixing for residential slabs, commercial foundations, and industrial columns. 
              From 6mm stirrups to 32mm main bars, I work to SANS specifications. <span className="text-orange-500 font-medium">No shortcuts. No wasted steel. Just accurate bends delivered on time.</span>
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-orange-500 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-black text-white">{stat.number}</span>
                  </div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Quality Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Clock size={14} className="text-orange-500" />
                <span className="text-zinc-400 text-xs font-bold uppercase">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Shield size={14} className="text-orange-500" />
                <span className="text-zinc-400 text-xs font-bold uppercase">SANS Standards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Award size={14} className="text-orange-500" />
                <span className="text-zinc-400 text-xs font-bold uppercase">Quality Guaranteed</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={openAboutPage} 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full shadow-lg hover:shadow-orange-600/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-black font-black uppercase tracking-wider text-sm">Discover My Full Story</span>
                <ArrowRight className="text-black group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;