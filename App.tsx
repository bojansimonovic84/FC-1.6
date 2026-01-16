import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OrderForm from './components/OrderForm';
import GenerationScreen from './components/GenerationScreen';
import ResultScreen from './components/ResultScreen';
import AudioEngineering from './components/AudioEngineering';
import Testimonials from './components/Testimonials';
import VisualizeSuccess from './components/VisualizeSuccess';
import ChatWidget from './components/ChatWidget';
import LegalPage from './components/LegalPage';
import NeuralDashboard from './components/NeuralDashboard';
import LoginModal from './components/LoginModal';
import { generateMeditationScript } from './services/geminiService';
import { logLead } from './services/supabase';
import { playSound } from './services/audioService';
import type { AppState, OrderDetails, PricingPlan } from './types';

type ViewState = 'landing' | 'tos' | 'privacy' | 'refund' | 'dashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [view, setView] = useState<ViewState>('landing');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (appState !== 'landing' || view !== 'landing') {
      playSound('transition');
      window.scrollTo(0, 0);
    }
  }, [appState, view]);

  const handleStart = useCallback(() => {
    playSound('click');
    if (view !== 'landing') setView('landing');
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
  }, [view]);

  const handleSelectPlan = useCallback((plan: PricingPlan) => {
    setSelectedPlan(plan);
    setAppState('ordering');
  }, []);

  const handleCloseForm = useCallback(() => {
    playSound('click');
    setAppState('landing');
  }, []);

  const handleSubmitOrder = useCallback(async (details: Omit<OrderDetails, 'plan'>) => {
    if (!selectedPlan) return;
    
    const fullDetails = { ...details, plan: selectedPlan };
    setOrderDetails(fullDetails);
    setAppState('generating');

    try {
      await logLead(details.email, selectedPlan.name);
      await generateMeditationScript(fullDetails);
      setTimeout(() => {
        playSound('success');
        setAppState('result');
      }, 4500);
    } catch (error) {
      console.error("Critical submission error:", error);
      setAppState('result');
    }
  }, [selectedPlan]);
  
  const handleFinalize = useCallback(() => {
    playSound('success');
    setView('dashboard');
    setAppState('landing');
  }, []);

  const handleReset = useCallback(() => {
    playSound('transition');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAppState('landing');
    setView('landing');
    setSelectedPlan(null);
    setOrderDetails(null);
  }, []);

  const handleLoginSuccess = (details: any) => {
    setOrderDetails(details);
    setView('dashboard');
    setShowLogin(false);
    playSound('success');
  };

  if (view === 'dashboard' && orderDetails) {
    return <NeuralDashboard details={orderDetails} onLogout={handleReset} />;
  }

  return (
    <div className="bg-transparent min-h-screen text-white selection:bg-amber-500/50 relative">
      <Header onStart={handleStart} onLoginClick={() => setShowLogin(true)} />
      
      {view === 'landing' && (
        <main className="relative z-10">
          <Hero onStart={handleStart} />
          <HowItWorks />
          <VisualizeSuccess />
          <AudioEngineering />
          <Pricing onSelectPlan={handleSelectPlan} />
          <Testimonials />
          <FAQ />
        </main>
      )}

      {view === 'tos' && (
        <LegalPage 
          title="Terms of Service" 
          onBack={() => setView('landing')} 
          content={
            <div className="space-y-6">
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">1. Studio Protocol</h3>
                <p>By engaging THE FREQUENCY CODE™, you acknowledge that our services involve custom neural engineering and high-fidelity mastering. You agree to provide accurate manifestation directives in the present tense.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">2. Intellectual Property</h3>
                <p>All delivered audio and visual assets are licensed for personal subconscious use only. Commercial distribution of proprietary neural frequencies is strictly prohibited.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">3. Ethical Manifestation</h3>
                <p>Users agree to utilize the platform for positive growth and self-actualization. THE FREQUENCY CODE™ reserves the right to decline project specifications that violate our core engineering ethics.</p>
              </section>
            </div>
          } 
        />
      )}
      {view === 'privacy' && (
        <LegalPage 
          title="Privacy Protocol" 
          onBack={() => setView('landing')} 
          content={
            <div className="space-y-6">
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">1. Neural Data Security</h3>
                <p>Your "Neural ID" (Email) and project specifications are encrypted and stored in our secure private cloud. We do not share your manifestation goals with third-party data brokers.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">2. Subconscious Metadata</h3>
                <p>We only collect data necessary for the engineering of your Frequency Code. This includes your target intentions, vocal frequency preferences, and delivery endpoints.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">3. Right to Deletion</h3>
                <p>At any time, you may request the total dissolution of your neural blueprints from our servers by contacting studio support.</p>
              </section>
            </div>
          } 
        />
      )}
      {view === 'refund' && (
        <LegalPage 
          title="Refund & Revision" 
          onBack={() => setView('landing')} 
          content={
            <div className="space-y-6">
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">1. Master Finality</h3>
                <p>Due to the significant studio resources and manual engineering hours required for each bespoke blueprint, monetary refunds are not issued once a project enters the Mastering phase.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">2. Revision Protocol</h3>
                <p>We offer a strict one-time Revision Protocol. If your code does not fully resonate with your neural rhythm, you may request a single re-calibration of the audio frequency layers within 7 days of delivery.</p>
              </section>
              <section>
                <h3 className="text-amber-500 font-bold uppercase mb-2">3. Delivery Schedule</h3>
                <p>Custom engineering typically requires 2-4 business days. Priority slots are assigned based on the selected Quantum Tier.</p>
              </section>
            </div>
          } 
        />
      )}

      <Footer onNavigate={(p) => setView(p)} />
      
      {appState === 'ordering' && selectedPlan && (
        <OrderForm plan={selectedPlan} onClose={handleCloseForm} onSubmit={handleSubmitOrder} />
      )}
      {appState === 'generating' && <GenerationScreen />}
      {appState === 'result' && orderDetails && (
        <ResultScreen details={orderDetails} onReset={handleReset} onFinalize={handleFinalize} />
      )}

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSuccess={handleLoginSuccess} />}
      <ChatWidget />
    </div>
  );
};

export default App;