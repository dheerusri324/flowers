import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are missing
// This prevents the app from crashing and allows users to see the UI
const defaultUrl = 'https://placeholder.supabase.co';
const defaultKey = 'placeholder-key';

export const supabase = createClient(
  supabaseUrl || defaultUrl,
  supabaseAnonKey || defaultKey
);

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey && 
    supabaseUrl !== defaultUrl && 
    supabaseAnonKey !== defaultKey);
};
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