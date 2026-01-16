
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/5 group transition-all duration-500 ${isOpen ? 'bg-white/[0.02]' : 'bg-transparent'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 px-4 md:px-8"
      >
        <span className={`text-base md:text-xl font-bold transition-colors ${isOpen ? 'text-teal-400' : 'text-white/80 group-hover:text-amber-400'}`}>
          {question}
        </span>
        <span className={`transform transition-all duration-500 flex items-center justify-center w-8 h-8 rounded-full border ${isOpen ? 'rotate-45 border-teal-500/50 text-white' : 'rotate-0 border-amber-500/30 text-amber-500'}`}>
           <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
           </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-8 px-4 md:px-8' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="text-sm md:text-lg text-white/90 leading-relaxed font-medium max-w-4xl border-l-2 border-teal-500/40 pl-6 ml-1">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
    return (
        <section className="py-20 sm:py-32 bg-transparent relative z-10 overflow-hidden">
             {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-amber-500/[0.01] blur-[150px] rounded-full -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center mb-16 px-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight whitespace-nowrap">
                    De-Coding Your Questions
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
                    Protocol details for your personal neural engineering project.
                  </p>
                </div>

                <div className="mt-8 max-w-5xl mx-auto bg-black/40 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                    {FAQ_DATA.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
                
                {/* Visual support contact */}
                <div className="mt-16 text-center">
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">
                      Additional project inquiries: <span className="text-amber-500/50 hover:text-amber-400 transition-colors cursor-pointer">studio@thefrequencycode.com</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQ;
