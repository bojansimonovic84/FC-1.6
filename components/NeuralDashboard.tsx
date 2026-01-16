
import React from 'react';
import type { OrderDetails } from '../types';
import Logo from './Logo';
import Card from './ui/Card';

interface NeuralDashboardProps {
  details: OrderDetails;
  onLogout: () => void;
}

const NeuralDashboard: React.FC<NeuralDashboardProps> = ({ details, onLogout }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Dashboard Nav */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-3xl px-8 py-6 flex justify-between items-center fixed top-0 w-full z-[100]">
        <Logo className="scale-75 origin-left" />
        <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">Neural ID</span>
                <span className="text-xs font-bold text-white">{details.email}</span>
            </div>
            <button onClick={onLogout} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 container mx-auto max-w-7xl">
        <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">Command Center</h1>
            <p className="text-amber-500/40 text-xs font-black uppercase tracking-[0.4em]">Active Manifestation Protocols</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Status */}
            <Card className="lg:col-span-2 p-10 bg-black/40 border-amber-500/10">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-2xl font-black uppercase mb-1 tracking-tight">{details.plan.name}</h2>
                        <p className="text-gray-500 text-sm">Order ID: FC-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                    </div>
                    <span className="bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/30 animate-pulse">
                        Mastering in Progress
                    </span>
                </div>

                <div className="space-y-8">
                    <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-amber-500 to-yellow-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-[9px] uppercase font-black tracking-widest">
                        <div className="text-amber-500">Analysis</div>
                        <div className="text-amber-500">Engineering</div>
                        <div className="text-amber-500/40">Mastering</div>
                        <div className="text-white/10">Delivery</div>
                    </div>
                </div>

                <div className="mt-16 p-8 bg-black/60 rounded-3xl border border-white/5 italic text-xl text-gray-300 font-light">
                    "{details.detailedGoal}"
                </div>
            </Card>

            {/* Sidebar Tools */}
            <div className="space-y-8">
                <Card className="p-8 bg-teal-500/5 border-teal-500/20">
                    <h3 className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Neural Protocol</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Your frequency code is being calibrated for <strong>{details.voice === 'male' ? 'Divine Masculine' : 'Divine Feminine'}</strong> vocal resonance.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-black text-teal-500/60 uppercase tracking-widest">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
                        Syncing with Studio
                    </div>
                </Card>

                <Card className="p-8 bg-white/5 border-white/5">
                    <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4">Master Blueprint</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Audio Format</span>
                            <span className="text-white">WAV 24-bit / 48kHz</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Visual Quality</span>
                            <span className="text-white">4K Cinematic</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">Neural Layer</span>
                            <span className="text-white">Binaural Alpha/Theta</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
};

export default NeuralDashboard;
