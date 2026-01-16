
import React from 'react';
import Logo from './Logo';

interface FooterProps {
    onNavigate?: (page: 'tos' | 'privacy' | 'refund' | 'landing') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 bg-transparent relative z-10 pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-3 border border-white/10 px-5 py-2 rounded-full">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[10px] font-black tracking-widest uppercase">Certified Neural Studio</span>
                </div>
                <div className="flex items-center gap-3 border border-white/10 px-5 py-2 rounded-full">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                    <span className="text-[10px] font-black tracking-widest uppercase">Secure Encryption</span>
                </div>
                <div className="flex items-center gap-3 border border-white/10 px-5 py-2 rounded-full">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                    <span className="text-[10px] font-black tracking-widest uppercase">1,200+ Verified Clients</span>
                </div>
            </div>

            <div className="flex justify-center mb-10 opacity-70 scale-75">
                <Logo />
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
                <button onClick={() => onNavigate?.('tos')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-amber-500 transition-colors">Terms of Service</button>
                <button onClick={() => onNavigate?.('privacy')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-amber-500 transition-colors">Privacy Protocol</button>
                <button onClick={() => onNavigate?.('refund')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-amber-500 transition-colors">Refund & Revision Policy</button>
            </div>

            <p className="text-[9px] font-light tracking-[0.4em] uppercase mb-2 text-white/20">&copy; {new Date().getFullYear()} THE FREQUENCY CODE™. All Rights Reserved.</p>
            <p className="max-w-xl mx-auto text-[8px] font-extralight tracking-tight leading-relaxed opacity-30 text-white/40">
                Disclaimer: The Frequency Code™ utilizes high-fidelity neuro-acoustic stimulation. Individual results are non-guaranteed and depend on consistent protocol adherence. Not a substitute for medical or psychological advice.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
