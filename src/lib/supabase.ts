import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserProfile = {
  id: string;
  name?: string;
  age?: number;
  country?: string;
  avatar_gradient: string;
  created_at: string;
  updated_at: string;
};

export type UserFavorite = {
  id: string;
  user_id: string;
  flower_id: string;
  created_at: string;
};