
import React, { useState } from 'react';
import type { OrderDetails } from '../types';
import Button from './ui/Button';
import { playSound } from '../services/audioService';
import { redirectToCheckout } from '../services/stripeService';

interface ResultScreenProps {
  details: OrderDetails;
  onReset: () => void;
  onFinalize: () => void;
}

const LockIcon = () => (
    <svg className="h-10 w-10 md:h-12 md:w-12 text-amber-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25-2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const ResultScreen: React.FC<ResultScreenProps> = ({ details, onReset, onFinalize }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);
    playSound('click');
    try {
        // Trigger Stripe Checkout or Simulation
        await redirectToCheckout(details.plan, details.email);
        
        // Finalize state to show Dashboard
        onFinalize();
    } catch (err: any) {
        setError("Secure link sync interrupted. Please retry.");
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex items-center justify-center p-4">
      <div className="bg-[#080808] border border-amber-500/20 rounded-[2.5rem] p-6 md:p-12 w-full max-w-xl text-center shadow-[0_0_80px_rgba(245,158,11,0.1)] overflow-hidden">
        <div className="mb-4">
          <LockIcon />
        </div>
        <h2 className="text-xl md:text-2xl font-black text-white mt-4 tracking-tight uppercase">Blueprint Locked</h2>
        <p className="text-gray-400 mt-3 leading-relaxed text-[12px] md:text-sm px-2">
          Your project directives are secured. Complete the studio retainer to initiate frequency engineering.
        </p>
        
        <div className="mt-6 bg-black/40 p-4 md:p-6 rounded-2xl border border-white/5 text-left">
           <div className="flex justify-between items-center mb-3">
                <p className="text-[9px] text-amber-500/70 uppercase tracking-widest font-black">Studio Queue</p>
                <p className="text-[9px] text-teal-400 uppercase tracking-widest font-black">Active Sync</p>
           </div>
           <p className="text-[12px] md:text-sm text-white/90 font-medium leading-relaxed italic line-clamp-2">
            "{details.detailedGoal}"
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
            <Button 
              onClick={handlePayment} 
              className="w-full" 
              disabled={isLoading} 
              variant="pill-gold"
            >
              Pay & Unlock Dashboard • €{details.plan.price}
            </Button>
            
            <button 
              onClick={onReset} 
              className="text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white/60 transition-all font-black"
            >
              Adjust Specification
            </button>
        </div>
        
        {error && <div className="mt-4 text-red-400 text-[10px] uppercase font-bold tracking-widest animate-pulse">{error}</div>}
      </div>
    </div>
  );
};

export default ResultScreen;
