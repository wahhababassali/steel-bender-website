import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe, 
  Phone, 
  MessageCircle,
  Facebook,
  Youtube
} from 'lucide-react';

const Footer = ({ scrollTo, openAboutPage }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={22} />, color: "hover:text-pink-500", bgColor: "hover:bg-pink-500", link: "https://instagram.com" },
    { name: "Facebook", icon: <Facebook size={22} />, color: "hover:text-blue-500", bgColor: "hover:bg-blue-500", link: "https://facebook.com" },
    { name: "LinkedIn", icon: <Linkedin size={22} />, color: "hover:text-blue-400", bgColor: "hover:bg-blue-400", link: "https://linkedin.com" },
    { name: "Twitter", icon: <Twitter size={22} />, color: "hover:text-sky-500", bgColor: "hover:bg-sky-500", link: "https://twitter.com" },
    { name: "WhatsApp", icon: <MessageCircle size={22} />, color: "hover:text-green-500", bgColor: "hover:bg-green-500", link: "https://wa.me/233537194106" },
  ];

  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center space-x-2 mb-6 cursor-pointer" 
              onClick={() => scrollTo('home')}
            >
              <img 
                src="/logo.svg" 
                alt="BendTech Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-black tracking-tighter uppercase">
                BEND<span className="text-orange-600">TECH</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed italic mb-6">
              Ghana's premier steel bending and fabrication experts. 
              Quality structural steel works for construction projects across West Africa.
            </p>
            
            {/* Contact Numbers */}
            <div className="flex flex-col gap-3">
              <a href="tel:+233241573496" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Phone size={14} className="text-orange-500 group-hover:text-white" />
                </div>
                <span className="font-medium">+233 24 157 3496</span>
              </a>
              <a href="https://wa.me/233537194106" className="flex items-center gap-3 text-zinc-400 hover:text-green-500 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle size={14} className="text-green-500 group-hover:text-white" />
                </div>
                <span className="font-medium">+233 53 719 4106</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="font-black uppercase tracking-widest text-xs mb-8 text-orange-600">Navigation</h5>
            <ul className="space-y-3">
              {['Home', 'About Me', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => item === 'About Me' ? openAboutPage() : scrollTo(item.toLowerCase())}
                    className="text-zinc-400 text-sm font-medium hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-black uppercase tracking-widest text-xs mb-8 text-orange-600">Services</h5>
            <ul className="space-y-3">
              {['Steel Beam Bending', 'Rebar Processing', 'Structural Fabrication', 'Iron Works', 'Welding Services'].map((service, idx) => (
                <li key={idx}>
                  <button className="text-zinc-400 text-sm font-medium hover:text-white transition-colors relative group">
                    {service}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Hub - Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h5 className="font-black uppercase tracking-widest text-xs mb-3 text-orange-600">Connect With Us</h5>
            <p className="text-zinc-500 text-sm">Follow us for the latest projects and steel bending tips!</p>
          </div>
          
          {/* Social Media Icons - Clean Horizontal Layout */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-transparent ${social.bgColor}`}>
                  <div className={`text-zinc-400 transition-colors duration-300 group-hover:text-white ${social.color}`}>
                    {social.icon}
                  </div>
                </div>
                
                {/* Social Name - Appears on Hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  <span className="text-[10px] font-bold text-white bg-black/80 px-2 py-1 rounded">
                    {social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
          <span>© {currentYear} BendTech Ghana. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .social-icon:hover {
          animation: float 0.5s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;