/**
 * THE FREQUENCY CODE™ | Audio Engineering Service
 * Synthesizes subtle, high-fidelity UI sounds and Neural Binaural landscapes.
 */

let audioCtx: AudioContext | null = null;
let activeNeuralOscillators: OscillatorNode[] = [];
let activeNeuralGains: GainNode[] = [];

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const stopAllNeuralSounds = () => {
  activeNeuralOscillators.forEach(osc => {
    try { osc.stop(); } catch (e) {}
  });
  activeNeuralGains.forEach(gain => {
    try { gain.gain.exponentialRampToValueAtTime(0.001, audioCtx!.currentTime + 0.5); } catch (e) {}
  });
  activeNeuralOscillators = [];
  activeNeuralGains = [];
};

export const playSound = (type: 'click' | 'transition' | 'success' | 'hover' | 'neural_init', target?: string) => {
  try {
    const ctx = initAudio();
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.1, now); 

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now); 
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 0.1);
        break;
      }
      
      case 'transition': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, now); 
        osc.frequency.exponentialRampToValueAtTime(55, now + 0.3);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 0.3);
        break;
      }

      case 'success': {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.frequency.setValueAtTime(523.25, now);
        osc2.frequency.setValueAtTime(783.99, now + 0.05);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(masterGain);
        osc1.start(now);
        osc2.start(now + 0.05);
        osc1.stop(now + 0.5);
        osc2.stop(now + 0.5);
        break;
      }

      case 'hover': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 0.05);
        break;
      }

      case 'neural_init': {
        // Binaural drone synthesis
        const oscLeft = ctx.createOscillator();
        const oscRight = ctx.createOscillator();
        const pannerLeft = ctx.createStereoPanner();
        const pannerRight = ctx.createStereoPanner();
        const droneGain = ctx.createGain();

        // Base frequency 100Hz
        let baseFreq = 100;
        let offset = 4.5; // Default Theta

        if (target === 'wealth') {
          baseFreq = 136.1; // "Om" frequency / Earth frequency
          offset = 4.5; // Deep manifestation theta
        } else if (target === 'success') {
          baseFreq = 144; // Crystal clear resonance
          offset = 12; // Beta focus
        } else if (target === 'love') {
          baseFreq = 174; // Pain relief / Solfeggio
          offset = 6.3; // Alpha heart
        }

        oscLeft.frequency.setValueAtTime(baseFreq, now);
        oscRight.frequency.setValueAtTime(baseFreq + offset, now);
        
        pannerLeft.pan.setValueAtTime(-1, now);
        pannerRight.pan.setValueAtTime(1, now);

        droneGain.gain.setValueAtTime(0, now);
        droneGain.gain.linearRampToValueAtTime(0.2, now + 2); // Rise
        droneGain.gain.linearRampToValueAtTime(0, now + 8); // Auto-fade

        oscLeft.connect(pannerLeft).connect(droneGain);
        oscRight.connect(pannerRight).connect(droneGain);
        droneGain.connect(masterGain);

        oscLeft.start(now);
        oscRight.start(now);
        oscLeft.stop(now + 8.1);
        oscRight.stop(now + 8.1);

        activeNeuralOscillators.push(oscLeft, oscRight);
        activeNeuralGains.push(droneGain);
        break;
      }
    }
  } catch (e) {
    console.debug('Audio playback skipped', e);
  }
};