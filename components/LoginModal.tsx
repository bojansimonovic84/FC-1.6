import React, { useState } from 'react';
import Button from './ui/Button';
import { fetchOrderByEmail } from '../services/supabase';

interface LoginModalProps {
    onClose: () => void;
    onSuccess: (details: any) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const order = await fetchOrderByEmail(email.trim().toLowerCase());
            if (order) {
                onSuccess(order);
            } else {
                setError("Neural ID not found. Ensure you used the email from your order.");
            }
        } catch (err) {
            setError("Connection interference. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDemoLogin = () => {
        // Instant bypass for the user to see the dashboard
        onSuccess({
            name: "Demo User",
            email: "demo@frequencycode.com",
            gender: 'female',
            goal: 'success',
            detailedGoal: "I am now living my highest potential, surrounded by abundance and clarity.",
            voice: 'female',
            plan: { name: 'Premium Resonance', price: 197, priceId: 'premium', features: [], isPopular: true }
        });
    };

    return (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[300] flex items-center justify-center p-6">
            <div className="bg-[#0c0c0c] border border-amber-500/20 rounded-[2.5rem] p-10 w-full max-w-md shadow-[0_0_100px_rgba(0,0,0,1)] relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-white/20 hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Member Access</h2>
                    <p className="text-[10px] text-amber-500/60 uppercase font-black tracking-[0.4em]">Restore Your Neural Link</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/40">Email Protocol</label>
                        <input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="YOUR@EMAIL.COM"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-black uppercase tracking-widest focus:ring-1 focus:ring-amber-500/50 outline-none transition-all"
                        />
                    </div>

                    {error && <p className="text-red-500 text-[10px] font-black uppercase text-center">{error}</p>}

                    <div className="flex flex-col gap-4">
                        <Button isLoading={loading} variant="pill-gold" className="w-full">
                            Restore Access
                        </Button>
                        
                        <button 
                            type="button"
                            onClick={handleDemoLogin}
                            className="text-[9px] text-teal-400 font-black uppercase tracking-[0.2em] hover:text-teal-300 transition-colors py-2"
                        >
                            DEBUG: DEMO BYPASS ACCESS
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-[8px] uppercase tracking-widest text-white/20">
                    Private Studio Access Only
                </p>
            </div>
        </div>
    );
};

export default LoginModal;