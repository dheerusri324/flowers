import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFavorites = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('flower_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching favorites:', error);
        return;
      }

      setFavorites(data.map(fav => fav.flower_id));
    } catch (error) {
      console.error('Error in fetchFavorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (flowerId: string) => {
    if (!user) return;

    const isFavorite = favorites.includes(flowerId);

    try {
      if (isFavorite) {
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('flower_id', flowerId);

        if (error) {
          console.error('Error removing favorite:', error);
          return;
        }

        setFavorites(prev => prev.filter(id => id !== flowerId));
      } else {
        const { error } = await supabase
          .from('user_favorites')
          .insert([{
            user_id: user.id,
            flower_id: flowerId,
          }]);

        if (error) {
          console.error('Error adding favorite:', error);
          return;
        }

        setFavorites(prev => [...prev, flowerId]);
      }
    } catch (error) {
      console.error('Error in toggleFavorite:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite: (flowerId: string) => favorites.includes(flowerId),
  };
};