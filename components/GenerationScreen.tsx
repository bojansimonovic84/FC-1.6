
import React, { useState, useEffect } from 'react';
import { GENERATION_MESSAGES } from '../constants';

const GenerationScreen = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prevIndex => (prevIndex + 1) % GENERATION_MESSAGES.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center text-center p-4 backdrop-blur-md">
            {/* Visual Match: Professional, Cool, Transparent Brown/Gold Loading Pill */}
            <div className="relative group transform transition-all duration-700 animate-[fade-in-up_0.5s_ease-out]">
                {/* Glowing background underlay */}
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full animate-pulse"></div>
                
                {/* Main Pill Container: Matching the "CLICK TO PLAY" and Reference Image style */}
                <div className="relative flex items-center gap-6 bg-[#1a1610]/90 border border-amber-500/40 px-10 py-5 rounded-full shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                    
                    {/* High-End CSS Spinner */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white/10 border-t-amber-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full"></div>
                    </div>
                    
                    {/* Typography: Narrow, Bold, Uppercase */}
                    <div className="flex flex-col items-start min-w-[280px]">
                        <span className="text-white text-lg md:text-xl font-black tracking-[0.15em] uppercase whitespace-nowrap drop-shadow-md">
                            {GENERATION_MESSAGES[messageIndex].toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-12 max-w-xs space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500/40 font-bold animate-pulse">
                    Transferring Data to Engineering Studio
                </p>
                <div className="flex justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_0s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
                </div>
            </div>

            <style>
            {`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}
            </style>
        </div>
    );
};

export default GenerationScreen;
