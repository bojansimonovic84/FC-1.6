
import type { PricingPlan } from '../types';

/**
 * THE FREQUENCY CODE™ | Stripe Integration Service
 * 
 * SECURITY: This file only uses the Public Key.
 * If STRIPE_PUBLISHABLE_KEY is missing in Vercel, 
 * the app will run in "Simulation Mode" so you can still see the dashboard.
 */

declare global {
  interface Window {
    Stripe: any;
  }
}

export const redirectToCheckout = async (plan: PricingPlan, customerEmail: string) => {
  const publishableKey = (process.env as any).STRIPE_PUBLISHABLE_KEY || '';
  
  if (publishableKey && window.Stripe) {
    try {
      const stripe = window.Stripe(publishableKey);
      
      // Attempt to hit a backend if you decide to add one later
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.priceId,
          email: customerEmail,
        }),
      });

      const session = await response.json();
      if (session.id) {
        return await stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (err) {
      console.warn("[Stripe] Backend not detected. Switching to Studio Simulation.");
    }
  }

  // SIMULATION MODE (Used if Stripe is not fully configured)
  return new Promise((resolve) => {
    console.log("--- STUDIO SIMULATION ACTIVE ---");
    console.log("Check Vercel env for STRIPE_PUBLISHABLE_KEY to go live.");
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
