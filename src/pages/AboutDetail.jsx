import React from 'react';
import { X, Lightbulb, Layers, CheckCircle, Wrench, Award, Shield, Clock, Building } from 'lucide-react';

const AboutDetail = ({ onBack, scrollTo }) => {
  const features = [
    { 
      icon: <Wrench size={32}/>, 
      title: "Rebar Expertise", 
      desc: "From 6mm stirrups to 32mm main bars - accurate bends to SANS specifications." 
    },
    { 
      icon: <Shield size={32}/>, 
      title: "Quality Guaranteed", 
      desc: "No shortcuts. No wasted steel. Every piece measured and bent precisely." 
    },
    { 
      icon: <Clock size={32}/>, 
      title: "On-Time Delivery", 
      desc: "Whether 1000 stirrups or full structural cages - delivered when promised." 
    },
    { 
      icon: <Building size={32}/>, 
      title: "All Project Sizes", 
      desc: "Residential slabs, commercial foundations, or high-rise columns." 
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Simple Nav for Detail Page */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={onBack}
          >
            <div className="w-10 h-10 bg-orange-600 flex items-center justify-center font-black text-xl">
              B
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">
              BEND<span className="text-orange-600">TECH</span>
            </span>
          </div>
          <button 
            onClick={onBack} 
            className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-orange-500 transition-colors"
          >
            <X size={18} /> Close
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <h4 className="text-orange-500 font-bold uppercase tracking-[0.5em] mb-4">About Me</h4>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
          The Steel Bending <br/> <span className="text-orange-600">Expert You Need</span>
        </h1>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-2xl font-bold text-zinc-300 leading-relaxed italic border-l-4 border-orange-600 pl-8">
              "I've been bending steel reinforcement for over 10 years — starting as an apprentice under my brother-in-law and now running my own crew."
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              I specialize in rebar bending, cutting, and fixing for residential slabs, commercial foundations, and industrial columns. From 6mm stirrups to 32mm main bars, I work to SANS specifications and engineering drawings. No shortcuts. No wasted steel. Just accurate bends delivered on time.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Whether you need 1000 stirrups or a complete structural cage for a high-rise, I bring the experience and reliability that keeps buildings standing.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10">
            <div className="border-b border-white/10 pb-6">
              <div className="text-6xl font-black text-orange-600 mb-2">10+</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Years Experience
              </div>
            </div>
            <div className="border-b border-white/10 pb-6">
              <div className="text-6xl font-black text-white mb-2">500+</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Projects Completed
              </div>
            </div>
            <div className="border-b border-white/10 pb-6">
              <div className="text-6xl font-black text-white mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Quality Guaranteed
              </div>
            </div>
            <div className="border-b border-white/10 pb-6">
              <div className="text-6xl font-black text-orange-600 mb-2">SANS</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Certified Standard
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 p-10 border border-white/5 hover:border-orange-600 transition-all"
            >
              <div className="text-orange-600 mb-6">{item.icon}</div>
              <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-32 text-center">
          <button 
            onClick={() => scrollTo('contact')} 
            className="bg-orange-600 px-12 py-6 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Get A Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;

