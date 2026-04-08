import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Grid3X3, 
  Layers, 
  Wrench,
  Truck,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HardHat,
  Zap,
  Phone
} from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    { 
      title: "Rebar Cutting & Bending", 
      icon: <Scissors />, 
      desc: "CNC precision cutting and bending from 6mm to 32mm rebar. Every angle up to 180° with micro-accuracy.",
      price: "From GHS 2.50/cut",
      features: ["6mm - 32mm capacity", "±0.5mm accuracy", "Any angle", "Same-day service"],
      popular: true
    },
    { 
      title: "Stirrups & Links", 
      icon: <Grid3X3 />, 
      desc: "Pre-fabricated stirrups and links for columns, beams, and slabs. Ready to install on arrival.",
      price: "From GHS 5/pc",
      features: ["Multiple sizes", "Ready to install", "Bulk discounts", "24hr turnaround"],
      popular: false
    },
    { 
      title: "Column & Beam Cages", 
      icon: <Layers />, 
      desc: "Complete structural cages fabricated to engineering drawings. Load-bearing certified.",
      price: "Custom Quote",
      features: ["Engineering approved", "Load certified", "On-site assembly", "Quality guaranteed"],
      popular: true
    },
    { 
      title: "Foundation Mesh", 
      icon: <Grid3X3 />, 
      desc: "Heavy-duty foundation mesh and slab reinforcement. Perfect grid patterns for solid bases.",
      price: "From GHS 180/sqm",
      features: ["Grid patterns", "Heavy gauge", "Corrosion resistant", "Quick install"],
      popular: false
    },
    { 
      title: "On-Site Installation", 
      icon: <Wrench />, 
      desc: "Expert fixing and installation services. Our team places and ties your steel professionally.",
      price: "Free Site Visit",
      features: ["Certified fixers", "Daily progress", "Quality control", "Timely completion"],
      popular: false
    },
    { 
      title: "Supply & Delivery", 
      icon: <Truck />, 
      desc: "Fast, reliable delivery across Ghana. Supply only or supply and fix options available.",
      price: "Ghana Wide",
      features: ["Same-day delivery", "Track in real-time", "Insurance included", "Nationwide"],
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-40 overflow-hidden bg-black">
      {/* Subtle Background - No more intense glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,85,0,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,85,0,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
            <Zap className="text-orange-500" size={16} />
            <span className="text-orange-500 text-sm font-medium tracking-wide">Premium Steel Services</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Precision steel fabrication backed by CNC technology and decades of structural engineering expertise
          </p>
        </div>

        {/* Services Grid - Clean Card Design */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full group">
                {/* Main Card - No intense glow, just a clean border on hover */}
                <div className={`relative h-full bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border transition-all duration-500 ${
                  hoveredCard === idx 
                    ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' 
                    : 'border-white/10'
                }`}>
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-5 right-5">
                      <div className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider shadow-sm">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Icon Section */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === idx ? 'scale-110' : ''
                    }`}>
                      <div className="text-white">
                        {React.cloneElement(service.icon, { size: 24 })}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    hoveredCard === idx ? 'text-orange-500' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features List - Simplified */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-zinc-500 text-xs bg-white/5 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-5 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-zinc-500 text-xs uppercase tracking-wider">Starting from</span>
                        <p className="text-lg font-bold text-orange-500">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      hoveredCard === idx 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}>
                      <span className="flex items-center justify-center gap-2">
                        Request Quote
                        <ArrowRight size={14} className={`transition-transform duration-300 ${
                          hoveredCard === idx ? 'translate-x-1' : ''
                        }`} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Cleaner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-orange-500 mb-1">500+</div>
            <div className="text-zinc-400 text-xs">Projects Completed</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-orange-500 mb-1">98%</div>
            <div className="text-zinc-400 text-xs">Client Satisfaction</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-orange-500 mb-1">24hr</div>
            <div className="text-zinc-400 text-xs">Avg Turnaround</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-orange-500 mb-1">Ghana</div>
            <div className="text-zinc-400 text-xs">Nationwide</div>
          </div>
        </div>

        {/* CTA Banner - Cleaner Design */}
        <div className="relative rounded-2xl overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-700">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative p-10 text-center border border-white/10 rounded-2xl bg-white/5">
            <HardHat className="text-orange-500 w-10 h-10 mx-auto mb-5" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-6 text-sm">
              Get a free quote within 2 hours. Our team is ready to help you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 inline-flex items-center hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                <span className="font-bold uppercase tracking-wider text-white text-sm">Get Free Quote</span>
                <ArrowRight size={16} className="ml-2 text-white" />
              </a>
              <a href="tel:+233537194106" className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/5 transition-all inline-flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span className="font-bold text-white text-sm">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Services;