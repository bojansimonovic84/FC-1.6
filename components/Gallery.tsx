import React from 'react';

const galleryImages = [
    'bg-[url(https://images.unsplash.com/photo-1534447677768-64489b3418b7?q=80&w=2070&auto=format&fit=crop)]', // Abstract light trails
    'bg-[url(https://images.unsplash.com/photo-1608622206338-2c286d525fde?q=80&w=1932&auto=format&fit=crop)]', // Gold liquid texture
    'bg-[url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop)]', // Colorful gradient waves
    'bg-[url(https://images.unsplash.com/photo-1619286483758-1a48c71509a2?q=80&w=1974&auto=format&fit=crop)]', // Neural network / space
];

const Gallery = () => {
  return (
    <section className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight whitespace-nowrap">
            The Digital Experience
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed tracking-wide px-4">
            Each visualization is a bespoke piece of digital art, <br className="hidden md:inline" /> engineered to resonate with your unique goal.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageClass, index) => (
             <div key={index} className="aspect-square relative group">
                <div className="absolute -inset-1 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className={`relative w-full h-full rounded-2xl bg-cover bg-center shadow-2xl transition-all duration-1000 group-hover:scale-[1.02] border border-white/10 ${imageClass}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;