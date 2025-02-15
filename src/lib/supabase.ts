
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  } | null;
  created_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  created_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
  selected_size: string | null;
  selected_color: string | null;
  created_at: string;
};
