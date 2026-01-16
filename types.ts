
import type { ComponentType } from 'react';

export interface PricingPlan {
  name: string;
  price: number;
  priceId: string;
  features: string[];
  isPopular: boolean;
}

export interface ManifestationGoal {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface OrderDetails {
  name: string;
  email: string;
  gender: 'male' | 'female';
  goal: string;
  detailedGoal: string;
  voice: 'male' | 'female';
  plan: PricingPlan;
}

export interface Testimonial {
  quote: string;
  name: string;
  videoUrl?: string;
}

export type AppState = 'landing' | 'ordering' | 'generating' | 'result';
