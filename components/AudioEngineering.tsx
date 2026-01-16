
import React, { useState, useRef, useEffect } from 'react';
import { playSound, stopAllNeuralSounds } from '../services/audioService';
import { MANIFESTATION_GOALS } from '../constants';

/**
 * 🔥 GDE DA UBACIŠ SVOJE AUDIO FAJLOVE 🔥
 * ---------------------------------------
 * Zameni prazne stringove ('') u 'audioUrl' poljima sa tvojim linkovima ka zvukovima.
 * Ovde stavljaš snimke gde glas govori afirmacije preko binauralnih bitova.
 */
const AUDIO_SAMPLES = [
  { 
    id: 'financial', 
    title: 'Financial Abundance', 
    frequency: '4.5Hz Theta Inducer', 
    description: 'Bespoke affirmations for wealth attraction layered over deep theta waves to bypass critical filters.',
    audioUrl: '', 
    goalId: 'success'
  },
  { 
    id: 'confidence', 
    title: 'Unshakeable Confidence', 
    frequency: '12Hz Focus Beta', 
    description: 'Neural charisma protocols that imprint a high-status self-image through rhythmic cognitive priming.',
    audioUrl: '', 
    goalId: 'confidence'
  },
  { 
    id: 'body', 
    title: 'Perfect Body Alignment', 
    frequency: '2.5Hz Delta Sleep-Code', 
    description: 'Biological reprogramming for metabolic efficiency and instinctual healthy habit adoption.',
    audioUrl: '', 
    goalId: 'weight-loss'
  },
  { 
    id: 'health', 
    title: 'Vital Health & Energy', 
    frequency: '528Hz Love Frequency', 
    description: 'The ancient solfeggio tone for DNA repair, synchronized with cellular energy directives.',
    audioUrl: '', 
    goalId: 'health'
  },
  { 
    id: 'love', 
    title: 'Love & Harmony', 
    frequency: '6.3Hz Alpha Resonance', 
    description: 'Heart-centered frequency alignment to dissolve emotional blocks and attract high-vibrational partners.',
    audioUrl: '', 
    goalId: 'love'
  },
  { 
    id: 'custom', 
    title: 'Custom Blueprint', 
    frequency: 'Variable Quantum Phase', 
    description: 'Our senior engineers mix your specific personal intent with master-calibrated frequency layers.',
    audioUrl: '', 
    goalId: 'custom'
  },
];

const AudioEngineering = () => {
  const [activeSample, setActiveSample] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySample = (sample: typeof AUDIO_SAMPLES[0]) => {
    if (activeSample === sample.id) {
      stopPlayback();
      return;
    }

    stopPlayback();
    setActiveSample(sample.id);

    if (sample.audioUrl) {
      audioRef.current = new Audio(sample.audioUrl);
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      audioRef.current.onended = () => setActiveSample(null);
    } else {
      // Fallback na sintetizovani zvuk za test
      playSound('neural_init', sample.id);
      setTimeout(() => {
        if (activeSample === sample.id) setActiveSample(null);
      }, 8000);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    stopAllNeuralSounds();
    setActiveSample(null);
  };

  useEffect(() => {
    return () => stopPlayback();
  }, []);

  return (
    <section className="py-20 sm:py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-8 leading-tight tracking-tight">
            Neural Audio Engineering
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
            Our master engineers architect bespoke auditory landscapes where your 
            <span className="text-white font-bold"> specific voice directives</span> are precision-calibrated with 
            <span className="text-amber-500 font-black"> Theta, Alpha, and Delta wave induction</span> for total subconscious penetration.
          </p>
        </div>

        {/* Audio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {AUDIO_SAMPLES.map((sample) => {
            const isActive = activeSample === sample.id;
            const isCustom = sample.id === 'custom';
            const goalData = MANIFESTATION_GOALS.find(g => g.id === sample.goalId);
            const GoalIcon = goalData?.icon || (() => null);
            
            const activeStyle = isCustom 
              ? 'bg-gradient-to-br from-teal-400 to-teal-800 border-teal-300 shadow-[0_0_80px_rgba(45,212,191,0.6)] scale-[1.03] z-10' 
              : 'bg-amber-500/15 border-amber-500/60 shadow-[0_0_60px_rgba(245,158,11,0.2)] scale-[1.02] z-10';

            const inactiveStyle = isCustom
              ? 'bg-teal-950/20 border-teal-500/30 hover:border-teal-400 hover:bg-teal-900/40 animate-[custom-subtle-pulse_4s_ease-in-out_infinite]'
              : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-black/60';

            return (
              <div 
                key={sample.id}
                onClick={() => handlePlaySample(sample)}
                className={`relative group cursor-pointer p-8 rounded-[2.5rem] border transition-all duration-700 flex flex-col items-start min-h-[260px] overflow-hidden
                  ${isActive ? activeStyle : inactiveStyle}
                `}
              >
                {/* Visual Audio Wave Layer */}
                <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-1.5 px-10 opacity-20 pointer-events-none">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-full transition-all duration-700 ${isCustom ? 'bg-teal-300' : 'bg-amber-400'} ${isActive ? 'animate-wave-active' : 'h-1'}`}
                      style={{ 
                        animationDelay: `${i * 0.08}s`,
                        height: isActive ? `${Math.random() * 50 + 10}px` : '4px'
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2.5 rounded-xl transition-all duration-500 ${isActive ? (isCustom ? 'bg-black text-teal-400' : 'bg-amber-500 text-black shadow-lg shadow-amber-500/30') : (isCustom ? 'bg-teal-500/10 text-teal-400' : 'bg-white/5 text-amber-500/70')}`}>
                      {isActive ? (
                        <div className="flex gap-0.5">
                          <div className="w-1 h-4 bg-current animate-[pulse_0.8s_infinite_0s]"></div>
                          <div className="w-1 h-4 bg-current animate-[pulse_0.8s_infinite_0.2s]"></div>
                          <div className="w-1 h-4 bg-current animate-[pulse_0.8s_infinite_0.4s]"></div>
                        </div>
                      ) : (
                        <GoalIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors ${isActive ? 'text-white/80' : 'text-white/20'}`}>
                      {sample.frequency}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-3 transition-colors ${isActive ? 'text-white' : (isCustom ? 'text-teal-400' : 'text-amber-500/90')}`}>
                    {sample.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed font-medium mb-6 transition-colors ${isActive ? 'text-white/90' : 'text-white/30 group-hover:text-white/50'}`}>
                    {sample.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-ping' : (isCustom ? 'bg-teal-500/40' : 'bg-amber-500/40')}`}></div>
                    <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${isActive ? 'text-white' : (isCustom ? 'text-teal-400/70' : 'text-amber-500/60')}`}>
                      {isActive ? 'INITIALIZATION IN PROGRESS' : 'TEST NEURAL SEQUENCE'}
                    </span>
                  </div>
                </div>

                {/* Ambient Internal Glow */}
                {isActive && (
                  <div className={`absolute -inset-2 blur-3xl opacity-20 ${isCustom ? 'bg-teal-400' : 'bg-amber-400'}`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Disclaimer Card */}
        <div className="mt-20 max-w-4xl mx-auto p-10 rounded-[3rem] bg-black/70 border border-white/10 backdrop-blur-3xl shadow-2xl">
            <div className="flex flex-col items-center text-center">
                <div className="bg-amber-500/20 text-amber-500 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-6 border border-amber-500/30">
                    Proprietary Production Workflow
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl">
                  "Each affirmation is custom-scripted and synthesized using ultra-high fidelity neural voices. 
                  Our studio team then hand-masters the frequency layers, ensuring your brain remains in a suggestible 
                  Theta state while your specific life-directives are imprinted."
                </p>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes wave-active {
          0%, 100% { height: 12px; opacity: 0.2; }
          50% { height: 50px; opacity: 1; }
        }
        .animate-wave-active {
          animation: wave-active 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes custom-subtle-pulse {
          0%, 100% { border-color: rgba(45, 212, 191, 0.3); transform: scale(1); }
          50% { border-color: rgba(45, 212, 191, 0.7); transform: scale(1.01); }
        }
      `}</style>
    </section>
  );
};

export default AudioEngineering;
