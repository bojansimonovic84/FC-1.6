
import React, { useState } from 'react';
import { MANIFESTATION_GOALS } from '../constants';
import { playSound } from '../services/audioService';

/**
 * 🔥 GDE DA PASTE-UJEŠ LINKOVE ZA VIDEA 🔥
 * ---------------------------------------
 * Ovde dole u objektu 'GOAL_VIDEOS' zameni brojeve svojim Vimeo linkovima.
 */
const GOAL_VIDEOS: Record<string, string> = {
  'weight-loss': 'https://vimeo.com/1140902781?share=copy&fl=sv&fe=ci#t=0',
  'confidence': 'https://vimeo.com/1140246129?share=copy&fl=sv&fe=ci#t=0',
  'success': 'https://vimeo.com/1140248200?share=copy&fl=sv&fe=ci#t=0',
  'health': 'https://vimeo.com/1140902781?share=copy&fl=sv&fe=ci#t=0',
  'love': 'https://vimeo.com/1140248046?share=copy&fl=sv&fe=ci#t=0',
  'custom': 'https://vimeo.com/1134981517?share=copy&fl=sv&fe=ci#t=0'
};

const getVimeoId = (input: string) => {
  const match = input.match(/(?:videos\/|vimeo\.com\/|channels\/.*\/|groups\/.*\/videos\/|album\/.*\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
  return match ? match[1] : input;
};

const VisualizeSuccess = () => {
  const [activeGoalId, setActiveGoalId] = useState('success');
  const currentVideoId = getVimeoId(GOAL_VIDEOS[activeGoalId]);
  const activeGoal = MANIFESTATION_GOALS.find(g => g.id === activeGoalId);

  const handleGoalSelect = (id: string) => {
    playSound('click');
    setActiveGoalId(id);
  };

  return (
    <section className="py-20 sm:py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight">
            Visualize Your New Reality
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Select an energetic blueprint to preview the neural projection of your target frequency.
          </p>
        </div>

        {/* Video Player Area */}
        <div className="max-w-5xl mx-auto mb-16 px-4 relative">
          <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.9)] bg-black/60 backdrop-blur-3xl">
            <iframe 
              key={currentVideoId}
              src={`https://player.vimeo.com/video/${currentVideoId}?autoplay=1&muted=1&loop=1&controls=1&background=0`} 
              className="w-full h-full object-cover scale-[1.01]" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen 
              title="Visualization Preview"
            ></iframe>
            
            <div className="absolute top-8 left-8 flex items-center gap-4 pointer-events-none">
                <div className={`w-3 h-3 rounded-full animate-ping ${activeGoalId === 'custom' ? 'bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)]' : 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,1)]'}`}></div>
                <div className="bg-black/60 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-xl">
                  <span className="text-[10px] text-white font-black tracking-[0.3em] uppercase">NEURAL LOCK: {activeGoal?.title}</span>
                </div>
            </div>
          </div>
        </div>

        {/* Navigation Pills - LUXURY NARROW STYLE */}
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4">
          {MANIFESTATION_GOALS.map((goal) => {
            const isActive = activeGoalId === goal.id;
            const isCustom = goal.id === 'custom';
            
            const activeBg = isCustom 
              ? 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700 text-black border-transparent shadow-[0_0_50px_rgba(45,212,191,0.6)]' 
              : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black border-transparent shadow-[0_0_50px_rgba(245,158,11,0.5)]';
            
            const inactiveStyle = isCustom
              ? 'bg-teal-950/20 border-teal-500/30 text-teal-400 hover:border-teal-400 hover:bg-teal-900/40'
              : 'bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:bg-black/70 hover:text-white';

            return (
              <button
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className={`
                  relative flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-700 group overflow-hidden
                  ${isActive 
                    ? `is-active ${activeBg} scale-110 z-10 font-black` 
                    : `${inactiveStyle} font-bold`
                  }
                `}
              >
                {/* Active sparkles for custom quantum tab */}
                {isCustom && isActive && (
                  <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:12px_12px] animate-[custom-sparkles_1.5s_linear_infinite]"></div>
                )}

                <div className="shrink-0 relative z-10">
                  <goal.icon 
                    className={`w-5 h-5 transition-all duration-500
                      ${isActive 
                        ? 'text-black' 
                        : (isCustom ? 'text-teal-400' : 'text-amber-500/80 group-hover:text-amber-400')
                      }
                    `} 
                  />
                </div>
                
                <span className={`relative z-10 text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap leading-none ${isActive ? 'text-black' : ''}`}>
                  {goal.title}
                </span>

                {/* Internal Highlight Glow */}
                {isActive && (
                   <div className={`absolute inset-0 blur-3xl opacity-30 ${isCustom ? 'bg-white' : 'bg-yellow-200'}`}></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Goal Description Display */}
        <div className="mt-16 max-w-4xl mx-auto text-center animate-fade-in" key={activeGoalId}>
            <p className="text-gray-300 text-xl md:text-3xl font-light italic leading-relaxed tracking-tight px-8">
              "{activeGoal?.description}"
            </p>
            <div className={`h-0.5 w-24 mx-auto mt-8 rounded-full ${activeGoalId === 'custom' ? 'bg-teal-500' : 'bg-amber-500'} opacity-30`}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes custom-sparkles {
          0% { background-position: 0px 0px; opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { background-position: 24px 24px; opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default VisualizeSuccess;
