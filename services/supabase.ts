
import { createClient } from '@supabase/supabase-js';
import type { OrderDetails } from '../types';

const supabaseUrl = (process.env as any).SUPABASE_URL || '';
const supabaseKey = (process.env as any).SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseKey) 
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export const saveOrder = async (details: OrderDetails, script: string) => {
    if (!supabase) return;

    const { data, error } = await supabase
        .from('orders')
        .insert([{
            customer_name: details.name,
            customer_email: details.email,
            goal: details.goal,
            plan: details.plan.name,
            price: details.plan.price,
            voice: details.voice,
            generated_script: script,
            status: 'pending_payment',
            created_at: new Date().toISOString()
        }]);

    if (error) console.error("Supabase Save Error:", error);
    return data;
};

export const logLead = async (email: string, planName: string) => {
    if (!supabase) return;
    await supabase.from('leads').insert([{ email, plan: planName, captured_at: new Date().toISOString() }]);
};

export const fetchOrderByEmail = async (email: string) => {
    if (!supabase) return null;
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_email', email)
        .order('created_at', { ascending: false })
        .limit(1);
    
    if (error || !data || data.length === 0) return null;
    
    // Transform DB row back to OrderDetails format
    return {
        name: data[0].customer_name,
        email: data[0].customer_email,
        gender: 'female', // Default fallback
        goal: data[0].goal,
        detailedGoal: data[0].generated_script,
        voice: data[0].voice,
        plan: { name: data[0].plan, price: data[0].price }
    };
};
