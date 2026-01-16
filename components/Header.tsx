import React from 'react';
import Logo from './Logo';
import Button from './ui/Button';

interface HeaderProps {
  onStart: () => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStart, onLoginClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8 px-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={onLoginClick}
            className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-amber-500 transition-all hidden md:block"
          >
            Members Access
          </button>
          
          <Button onClick={onStart} className="hidden sm:block text-xs md:text-sm font-bold tracking-[0.2em]">
            UNLOCK YOUR CODE
          </Button>

          <button 
            onClick={onLoginClick}
            className="text-amber-500/60 hover:text-amber-400 transition-all transform hover:scale-110 md:hidden p-2"
            aria-label="Login"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;