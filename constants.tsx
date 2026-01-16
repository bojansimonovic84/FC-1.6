
import React from 'react';
import type { PricingPlan, ManifestationGoal, Testimonial } from './types';

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="origin-center group-[.is-active]:animate-[pulse_1.5s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 016.38 5.84h-4.82m-1.56-11.64a6 6 0 015.84-7.38v4.82m-5.84 2.56a6 6 0 01-6.38-5.84h4.82m1.56 11.64l-5.84-5.84m5.84 5.84l5.84 5.84m-5.84-5.84l-5.84 5.84m5.84-5.84l5.84-5.84" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500 group-[.is-active]:scale-110`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[heartbeat_1s_ease-in-out_infinite] group-[.is-active]:fill-current" strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[vibrate_0.2s_linear_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75" />
    <g className="origin-center group-[.is-active]:animate-[balance_2s_ease-in-out_infinite]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.624 17.247 2.62-10.726" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 6.52 2.62 10.726" />
    </g>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[twinkle_1s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    <path className="group-[.is-active]:animate-[twinkle_1.5s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const UserPlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${className} transition-all duration-500`}>
        <path className="group-[.is-active]:animate-[spin_4s_linear_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
);

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic Blueprint',
    price: 97,
    priceId: 'basic',
    features: [
      'Personalized Audio Meditation (15 min)',
      'Specific Intent Subliminal Programming',
      'Advanced Binaural Beats Integration',
      'Digital 21-Day Ritual Guide'
    ],
    isPopular: false,
  },
  {
    name: 'Premium Resonance',
    price: 197,
    priceId: 'premium',
    features: [
      'Everything in Basic Blueprint',
      'Full 10-Minute Visualization Video',
      'Visual Imprint Neural Protocols',
      'High-Fidelity Neural Voice Integration'
    ],
    isPopular: true,
  },
  {
    name: 'Ultimate Quantum Experience',
    price: 997,
    priceId: 'ultimate',
    features: [
      '10x Custom Made Visual & Audio Tracks',
      'Multi-Phase Sub-goal Neural Mapping',
      'Master Vision Core Integration',
      'Direct White-Glove Studio Support'
    ],
    isPopular: false,
  },
];

export const MANIFESTATION_GOALS: ManifestationGoal[] = [
  {
    id: 'weight-loss',
    title: 'Perfect Body Alignment',
    description: 'Reprogram your subconscious for healthy habits, motivation, and body confidence.',
    icon: ScaleIcon,
  },
  {
    id: 'confidence',
    title: 'Unshakeable Confidence',
    description: 'Dissolve self-doubt and activate your innate charisma and self-worth.',
    icon: SparklesIcon,
  },
  {
    id: 'success',
    title: 'Financial Abundance',
    description: 'Align your frequency with wealth, opportunity, and career success.',
    icon: TargetIcon,
  },
  {
    id: 'health',
    title: 'Vital Health & Energy',
    description: 'Tune into cellular vitality, deep rest, and inexhaustible energy.',
    icon: BoltIcon,
  },
  {
    id: 'love',
    title: 'Love & Relationship Harmony',
    description: 'Attract your ideal partner or deepen existing connection.',
    icon: HeartIcon,
  },
   {
    id: 'custom',
    title: 'Custom Blueprint',
    description: 'Design your unique reality. Our designers engineer your personal code.',
    icon: UserPlusIcon,
  },
];

export const FAQ_DATA = [
    {
        question: "How is my code engineered?",
        answer: "Every order is a bespoke creation. Once you define your goal, our proprietary AI architects the linguistic structure. Then, our senior designers and audio engineers take over, hand-mastering a 10-minute visualization video and high-fidelity binaural audio track specifically for your energetic signature."
    },
    {
        question: "How do I use my Frequency Code?",
        answer: "For maximum subconscious penetration, you should watch your visualization video and listen to the neural audio daily for 21 days—ideally right before sleep and immediately upon waking. This is when your brain is naturally in the suggestible Theta state, allowing the new code to overwrite old neural pathways."
    },
    {
        question: "Why does delivery take 2-4 business days?",
        answer: "This is a premium, manual service. We don't use generic templates. Our studio team meticulously layers your specific intent over scientific wave-induction frequencies. This process of high-fidelity mastering ensures that every second of your video is tuned to manifest your specific reality."
    },
    {
        question: "What is the difference between plans?",
        answer: "The Basic Blueprint is strictly audio-based. The Premium Resonance (our most popular tier) adds the 10-minute cinematic visualization video—a critical component for visual learners. The Ultimate experience is for those seeking a total reality overhaul, offering up to 10 custom-designed scenes to map complex life goals."
    },
    {
        question: "Is this safe and scientific?",
        answer: "Absolutely. We utilize proven neuro-acoustic protocols including Theta-wave induction and binaural beats. By combining these with personalized 'present-tense' directives, we create a powerful psychological anchor that aligns your conscious desires with your subconscious execution."
    },
    {
        question: "What is your refund policy?",
        answer: "Because each blueprint is a custom project involving significant manual labor from professional designers, technical resource costs, and professional mastering time, all sales are final and we do not offer monetary refunds. However, we do offer a strict one-time Revision Protocol. If any minor detail doesn't fully resonate, you can request specific small adjustments. Our studio will review and provide a single final re-mastered version. This second delivery represents the ultimate lock of your Frequency Code and no further changes can be made."
    }
];

export const GENERATION_MESSAGES = [
    "Analyzing Linguistic Intent with AI...",
    "Assigning Senior Audio Designer...",
    "Drafting Neural Manifestation Blueprint...",
    "Calibrating 432Hz Binaural Layers...",
    "Initializing Custom Visual Geometry...",
    "Syncing Code with Design Studio...",
    "Assigning Post-Production Team...",
    "Securing Project Lead...",
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "I was skeptical, but after 21 days, my entire financial situation shifted. The quality of the audio is unlike anything I've heard before.",
        name: "Sarah Jenkins",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
        quote: "The visualization video was key. You can tell it was made by professionals. It feels like a high-end cinematic experience in my mind.",
        name: "Michael Ross",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
        quote: "I've struggled with self-worth my whole life. The custom blueprint changed everything. It's a truly personalized service.",
        name: "Elena Rodriguez",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
        quote: "My energy levels have never been higher. I wake up feeling aligned and ready to conquer the day. Truly life-changing.",
        name: "David Chen",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
        quote: "Finally found the partner of my dreams after using the Love Blueprint. It cleared blocks I didn't even know I had.",
        name: "Jessica Miller",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
        quote: "The Custom Blueprint is the ultimate investment in yourself. My business grew 300% in just two months.",
        name: "Robert Williams",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
];
