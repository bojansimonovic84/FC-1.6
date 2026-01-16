import React, { useState } from 'react';
import Button from './ui/Button';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlockClick = () => {
    setIsUnlocking(true);
    // Simulate a "second or little" wait as requested by user
    setTimeout(() => {
      onStart();
      setIsUnlocking(false);
    }, 1200);
  };

  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', // Man
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop', // Woman
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop', // Man
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop', // Woman
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop', // Man
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
        <h1 className="font-black tracking-tighter leading-tight select-none">
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 pb-1">
            The Secret Code to Your Desired Reality...
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] glow-text text-white uppercase tracking-tighter mt-1 md:mt-2">
            Has Been Cracked.
          </span>
        </h1>
        <p className="mt-6 md:mt-10 max-w-4xl mx-auto text-base md:text-xl lg:text-2xl text-white/70 px-4 font-light tracking-tight leading-snug">
          Discover the revolutionary AI-engineered system that reprograms your <br className="hidden md:inline" /> subconscious mind for wealth, health, and success while you sleep.
        </p>
        
        {/* VSL Section */}
        <div className="mt-10 md:mt-16 max-w-4xl mx-auto transition-all duration-700 ease-in-out hover:scale-[1.005] shadow-[0_5px_60px_-10px_rgba(245,158,11,0.5)] rounded-2xl overflow-hidden border border-white/10 relative group">
          <div className="relative aspect-video w-full bg-black/40 backdrop-blur-sm">
            <iframe 
              src={`https://player.vimeo.com/video/1135952700?autoplay=${isPlaying ? 1 : 0}&muted=0&loop=0&controls=1&autopause=0&background=0&title=0&byline=0&portrait=0`} 
              className="w-full h-full object-cover" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media" 
              allowFullScreen 
              title="Vimeo Video Player"
            ></iframe>

            {/* Play Overlay */}
            {!isPlaying && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-500 hover:bg-black/20"
              >
                <div className="relative group/btn transform transition-all duration-500 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full group-hover/btn:bg-amber-500/40 transition-all duration-500"></div>
                  <div className="relative flex items-center gap-5 bg-[#2a241a]/85 border border-amber-500/70 px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover/btn:border-amber-400 transition-all duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-amber-500 border-b-[8px] border-b-transparent ml-1 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
                    <span className="text-white text-sm md:text-lg font-bold tracking-tight uppercase whitespace-nowrap drop-shadow-md">
                      CLICK TO PLAY!
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-12 md:mt-16 px-2 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3 scale-90 md:scale-100">
            <div className="flex -space-x-3 items-center">
              {avatars.map((url, i) => (
                <div 
                  key={i} 
                  className="relative group/avatar"
                  style={{ animation: `avatar-float 3s ease-in-out infinite ${i * 0.4}s` }}
                >
                  <div className="absolute inset-0 rounded-full bg-amber-500/40 blur-md opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
                  <img 
                    src={url} 
                    alt="Customer" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-amber-500/80 object-cover shadow-[0_0_15px_rgba(245,158,11,0.3)] relative z-10"
                  />
                </div>
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-900 border-2 border-amber-500/80 flex items-center justify-center text-[10px] md:text-xs font-bold text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] relative z-10">
                +1.2k
              </div>
            </div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-amber-500/80 drop-shadow-sm">
              JOIN <span className="text-white">1,200+</span> PEOPLE WHO HAVE ALREADY UNLOCKED THEIR CODE
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Button 
              onClick={handleUnlockClick} 
              variant="pill-gold" 
              isLoading={isUnlocking}
              className="md:scale-110"
            >
              Unlock Your Code Now
            </Button>
          </div>

          <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500/40 font-bold animate-pulse">
            Neural Alignment Initialized
          </p>
        </div>
      </div>

      <style>{`
        @keyframes avatar-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;