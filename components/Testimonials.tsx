
import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import Card from './ui/Card';
import VideoModal from './VideoModal';

const PlayIcon = () => (
    <svg className="h-10 w-10 text-white/70 group-hover:text-teal-300 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
);


const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setPlayingVideo(null);
  };

  return (
    <>
      <section className="py-20 sm:py-32 relative z-10 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/[0.02] blur-[150px] rounded-full -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight whitespace-nowrap">
              Success Frequencies
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed tracking-wide px-4">
              Real-world data from individuals who successfully <br className="hidden md:inline" /> unlocked their personal Frequency Code.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col p-8 md:p-10 bg-black/40 border-white/5 hover:border-teal-500/30 transition-all duration-700 hover:shadow-[0_0_60px_rgba(45,212,191,0.1)] group">
                      <div className="flex-grow">
                          <p className="text-gray-300 italic text-base md:text-lg leading-relaxed font-light">"{testimonial.quote}"</p>
                      </div>
                      
                      <div className="mt-8">
                          {testimonial.videoUrl ? (
                              <button 
                                  onClick={() => handlePlayVideo(testimonial.videoUrl!)}
                                  className="group/video block aspect-video w-full bg-black/60 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 hover:border-teal-500/40 transition-all duration-500 shadow-inner"
                                  aria-label={`Play testimonial video from ${testimonial.name}`}
                              >
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity"></div>
                                   <div className="relative transform group-hover/video:scale-110 transition-transform duration-500">
                                      <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full opacity-0 group-hover/video:opacity-100 transition-opacity"></div>
                                      <PlayIcon />
                                   </div>
                                   <span className="absolute bottom-4 right-5 text-[9px] font-black tracking-[0.3em] text-white/50 group-hover/video:text-teal-300 bg-black/60 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md transition-all">WATCH</span>
                              </button>
                          ) : (
                              <div className="aspect-video w-full bg-gray-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5">
                                  <span className="text-gray-600 text-[10px] uppercase tracking-widest font-black">Link Pending Engineering</span>
                              </div>
                          )}
                          
                          <div className="mt-6 flex flex-col items-end">
                              <h4 className="font-black text-teal-400 uppercase tracking-[0.35em] text-[11px] md:text-xs transition-colors group-hover:text-teal-300">
                                {testimonial.name}
                              </h4>
                              <div className="h-0.5 w-12 bg-teal-500/20 mt-2 rounded-full group-hover:w-20 transition-all duration-700"></div>
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
          
          {/* Final Social Proof Footer */}
          <div className="mt-20 text-center">
              <p className="text-[10px] text-teal-500/40 font-black uppercase tracking-[0.5em] animate-pulse">
                Neural Data Verified • 1,200+ Active Blueprints
              </p>
          </div>
        </div>
      </section>

      {playingVideo && (
        <VideoModal videoUrl={playingVideo} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Testimonials;
