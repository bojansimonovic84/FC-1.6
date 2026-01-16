
import React from 'react';
import Button from './ui/Button';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="min-h-screen bg-black/95 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={onBack}
          className="text-amber-500/60 hover:text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-2 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Main Studio
        </button>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter uppercase glow-text">
          {title}
        </h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8 font-light leading-relaxed text-lg border-l border-white/10 pl-8">
          {content}
        </div>
        
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
            <Button onClick={onBack} variant="pill-gold">Accept & Return</Button>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
