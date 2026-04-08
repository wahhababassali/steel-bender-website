import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  const projects = [
    {
      title: "Steel Wire Reinforcement",
      category: "Construction",
      image: "https://media.istockphoto.com/id/1258020136/photo/construction-workers-working-site-with-pincers.jpg?s=612x612&w=0&k=20&c=vrU9yc3-Uo6bOHL4dOQ7KsSZWqG69-FSGBEZYOjJnqY=",
    },
    {
      title: "Iron Bar Binding",
      category: "Reinforcement",
      image: "https://media.istockphoto.com/id/1258020475/photo/workers-hands-using-iron-wire-for-securing-iron-bars-with-wire-rod-for-reinforcement-iron.jpg?s=612x612&w=0&k=20&c=fuOad4qzqNk9OVisGzZYge2A7f7NTgx8-getc7qBKxE=",
    },
    {
      title: "Concrete Rebar Connection",
      category: "Structural",
      image: "https://media.istockphoto.com/id/1313792555/photo/reinforced-concrete-construction-techniques-the-photo-of-connecting-the-iron-placed-in-the.jpg?s=612x612&w=0&k=20&c=u37Uw5BnUdOjcbvXY26KyK1AZuC9ZEovRR3l6UhcP7s=",
    },
    {
      title: "Steel Framework Installation",
      category: "Industrial",
      image: "https://media.istockphoto.com/id/485672009/photo/builder-worker-installing-steel-work.jpg?s=612x612&w=0&k=20&c=k_xk4bXCRpjfk9Z28KiDXCxWK38vmJgCqt25qjrRz1A=",
    },
    {
      title: "Rebar On The Construction site",
      category: "Structural",
      image: "https://media.istockphoto.com/id/1408669061/photo/rebars-on-the-construction-site.jpg?s=612x612&w=0&k=20&c=9XA-Lkv5Pl0tVWPqIdAuuj8-a7gDS7n6j6M0KSfSYic=",
    },
    {
      title: "Custom Steel Bending",
      category: "Steel Bending",
      image: "/images/photo4.jpg",
    },
    {
      title: "Precision Fabrication",
      category: "Construction",
      image: "/images/photo1.jpg",
    },
    {
      title: "Industrial Steel Work",
      category: "Steel Work",
      image: "/images/photo5.jpg",
    },
    {
      title: "Custom Fabrication",
      category: "Fabrication",
      image: "/images/photo3.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setAnimatedItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    document.querySelectorAll('.portfolio-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`mb-20 text-center md:text-left transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h4 className="text-orange-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm">
            Our Work
          </h4>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-600 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`portfolio-item break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                animatedItems.includes(String(index)) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                transitionProperty: 'opacity, transform, box-shadow'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ minHeight: '280px', maxHeight: '500px' }}
                  alt={project.title}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <span className="text-orange-400 font-bold uppercase text-[11px] tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;