
import React from 'react';
import { PRICING_PLANS } from '../constants';
import type { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

const CheckIcon = ({ colorClass = "text-amber-500" }) => (
    <svg className={`h-4 w-4 ${colorClass} mt-0.5 shrink-0`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const FloatingArrow = () => (
  <div className="absolute top-4 -right-24 lg:-right-72 hidden lg:block z-30 pointer-events-none">
    <div className="relative">
      <div className="absolute inset-0 bg-amber-500/10 blur-[50px] rounded-full"></div>
      <svg width="220" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-[float-swoop_4s_ease-in-out_infinite]">
        <path 
          d="M10 5C30 10 70 20 85 75M85 75L75 70M85 75L92 65" 
          stroke="url(#arrowGradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-6 right-10 w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,1)]"></div>
      <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-[ping_2s_infinite] shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
    </div>
  </div>
);

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center mb-12 px-4 relative">
          <div className="relative inline-block">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-amber-500 to-yellow-600 drop-shadow-sm mb-6 leading-tight tracking-tight">
                Choose Your Blueprint
              </h2>
              <FloatingArrow />
          </div>
          <div className="relative block">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
              Select the experience that aligns with your desired transformation. <br className="hidden md:inline" /> 
              Each tier is engineered for profound subconscious impact.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isBasic = idx === 0;
            const isPremium = plan.isPopular; // Middle plan
            const isUltimate = idx === 2;
            
            // Tier-specific styles - Strengthened colors
            const cardStyles = isPremium 
              ? 'border-amber-500 ring-2 ring-amber-500/30 scale-105 shadow-[0_0_100px_rgba(245,158,11,0.3)] bg-black/90' 
              : isUltimate 
                ? 'border-teal-500/60 shadow-[0_0_100px_rgba(45,212,191,0.3)] bg-black/90' 
                : 'border-amber-500/20 bg-black/70 hover:border-amber-500/50';

            const titleGradient = isPremium
              ? 'from-yellow-300 via-amber-400 to-amber-700' // Bold Gold for Most Popular
              : isUltimate
                ? 'from-teal-300 via-cyan-400 to-teal-600' // Turquoise/Platinum
                : 'from-amber-400 via-amber-500 to-amber-600'; // Strengthened Basic Gold

            const priceColor = isPremium
              ? 'text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.9)]'
              : isUltimate
                ? 'text-teal-400 drop-shadow-[0_0_25px_rgba(45,212,191,0.9)]'
                : 'text-amber-500';

            const checkColor = isUltimate ? 'text-teal-400' : 'text-amber-500';

            return (
              <div 
                key={plan.name} 
                className={`group relative flex flex-col rounded-[2.2rem] transition-all duration-700 backdrop-blur-3xl border ${cardStyles}`}
              >
                {/* Visual Accents */}
                {(isPremium || isBasic) && (
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-600/10 blur-[90px] rounded-full pointer-events-none"></div>
                )}
                {isUltimate && (
                  <>
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-teal-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                    {/* ZLATNE TACKICE - FINO PODEŠENA VELIČINA */}
                    <div className="absolute inset-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-amber-400 rounded-full animate-ping shadow-[0_0_20px_rgba(245,158,11,1)]"></div>
                      <div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.9)]"></div>
                    </div>
                  </>
                )}

                {/* Badges - MOVED UP TO BORDER AND INCREASED SPACING BELOW */}
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black text-[10px] font-black px-7 py-2 rounded-full uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-white/40 whitespace-nowrap block">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                {isUltimate && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-black text-[10px] font-black px-7 py-2 rounded-full uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(45,212,191,0.6)] border border-teal-300/50 whitespace-nowrap block">
                      QUANTUM MASTER
                    </span>
                  </div>
                )}

                <div className={`p-8 md:p-10 flex flex-col h-full ${isPremium || isUltimate ? 'pt-16 md:pt-20' : 'pt-10'}`}>
                  {/* Header Section */}
                  <div className="mb-8 text-center lg:text-left">
                    <h3 className={`text-lg md:text-xl font-black mb-4 tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-br ${titleGradient} drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]`}>
                      {plan.name}
                    </h3>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-baseline justify-center lg:justify-start gap-2">
                        <span className={`text-4xl md:text-6xl font-black tracking-tighter ${priceColor}`}>
                          €{plan.price}
                        </span>
                        <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isUltimate ? 'text-teal-500/50' : 'text-amber-500/50'}`}>Total</span>
                      </div>
                      <p className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${isUltimate ? 'text-teal-500/40' : 'text-amber-500/40'}`}>
                        Studio Engineering Included
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-10 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 group/item">
                        <CheckIcon colorClass={checkColor} />
                        <span className={`font-bold text-[13px] md:text-sm leading-tight tracking-tight transition-colors duration-300 ${isUltimate ? 'text-teal-100 group-hover/item:text-teal-300' : 'text-amber-100 group-hover/item:text-amber-300'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button Section */}
                  <div className="mt-auto">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className={`w-full py-4 md:py-5 rounded-xl text-[12px] font-black uppercase tracking-[0.35em] transition-all duration-500 group-hover:scale-[1.03] active:scale-95
                        ${isPremium 
                          ? 'bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-600 text-black shadow-xl shadow-amber-500/40 hover:shadow-amber-500/60' 
                          : isUltimate 
                            ? 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700 text-black shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60' 
                            : 'bg-transparent border-2 border-amber-500/60 text-amber-500 hover:bg-amber-500 hover:text-black'
                        }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                         {isUltimate && <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping shadow-[0_0_10px_rgba(245,158,11,1)]"></div>}
                         Select Plan
                         {isUltimate && <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping shadow-[0_0_10px_rgba(245,158,11,1)]"></div>}
                      </span>
                    </button>
                    {isPremium && (
                      <p className="text-[8px] text-center uppercase font-black tracking-[0.2em] mt-3 animate-pulse text-amber-500/70">
                        * ONLY 10 SLOTS REMAINING *
                      </p>
                    )}
                    {isUltimate && (
                      <p className="text-[8px] text-center uppercase font-black tracking-[0.2em] mt-3 animate-pulse text-teal-500/70">
                        * ONLY 5 SLOTS REMAINING *
                      </p>
                    )}
                  </div>
                </div>

                {/* Decorative Borders */}
                <div className={`absolute inset-0 border border-transparent group-hover:border-current rounded-[2.2rem] transition-colors pointer-events-none opacity-20 ${isUltimate ? 'text-teal-400' : 'text-amber-400'}`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-amber-500/[0.02] blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <style>{`
        @keyframes float-swoop {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(-8deg); }
          50% { transform: translate(25px, 20px) scale(1.05) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
