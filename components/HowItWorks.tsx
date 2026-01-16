import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Personalize Your Blueprint',
    description: 'Select your manifestation goal or define a custom one. Our AI analyzes your energetic signature to ensure the code resonates with your biological rhythm.',
    animClass: 'animate-[rotate-cw_8s_linear_infinite]'
  },
  {
    number: '02',
    title: 'AI Subconscious Engineering',
    description: 'Our proprietary algorithm generates a unique audio-visual script using hypnotic language and binaural beats to penetrate deep subconscious barriers.',
    animClass: 'animate-[rotate-ccw_10s_linear_infinite]'
  },
  {
    number: '03',
    title: 'Begin Your 21-Day Neural Reset',
    description: 'Listen to your custom audio each night. In the theta state, your mind absorbs the new programming, effortlessly rewriting outdated neural pathways.',
    animClass: 'animate-[rotate-cw_8s_linear_infinite]'
  },
  {
    number: '04',
    title: 'Manifest Your New Reality',
    description: "As your neural pathways realign, your reality mirrors your new code, attracting opportunities that vibrate at your newly engineered frequency level.",
    animClass: 'animate-[rotate-ccw_10s_linear_infinite]'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        {/* Refined Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight whitespace-nowrap">
            The Science of Manifestation, Engineered.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed tracking-wide px-4">
            This isn't magic. It's a precise, four-step process <br className="hidden md:inline" /> of Quantum Alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/40 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl shadow-black/50 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col items-start min-h-[380px]"
            >
              <div className="relative flex items-center justify-center h-16 w-16 mb-6">
                <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-md transition-all duration-500 group-hover:bg-amber-500/20 group-hover:blur-lg"></div>
                
                <div className={`absolute inset-0 rounded-full ${step.animClass}`}>
                  <div 
                    className="absolute inset-0 rounded-full p-[1.5px]" 
                    style={{ 
                      background: 'conic-gradient(transparent 0%, transparent 40%, rgb(180, 83, 9) 60%, rgb(245, 158, 11) 80%, rgb(254, 240, 138) 100%)',
                      WebkitMask: 'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
                      mask: 'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)'
                    }}
                  ></div>
                </div>

                <div className="relative h-12 w-12 bg-neutral-900 rounded-full flex items-center justify-center z-10 shadow-2xl border border-white/5 group-hover:border-amber-500/30 transition-colors duration-500">
                  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm font-sans tracking-tighter group-hover:via-amber-400 transition-all duration-500">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-lg xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-4 tracking-tight group-hover:from-yellow-100 group-hover:via-amber-400 transition-all duration-500 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-light text-base md:text-lg text-left w-full">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;