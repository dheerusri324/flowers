import React from 'react';
import { X, Heart, MapPin, Star, Flower2 } from 'lucide-react';
import { flowers } from '../data/flowers';
import { useFavorites } from '../hooks/useFavorites';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFlowerSelect: (flowerId: string) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose, onFlowerSelect }) => {
  const { favorites, toggleFavorite } = useFavorites();
  
  const favoriteFlowers = flowers.filter(flower => favorites.includes(flower.id));
  const { containerRef, visibleItems } = useStaggeredAnimation(favoriteFlowers.length, 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyStars = (difficulty: string) => {
    const stars = difficulty === 'Easy' ? 1 : difficulty === 'Medium' ? 2 : 3;
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 transition-colors duration-300 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleFlowerClick = (flowerId: string) => {
    onFlowerSelect(flowerId);
    onClose();
  };

  const handleRemoveFavorite = (e: React.MouseEvent, flowerId: string) => {
    e.stopPropagation();
    toggleFavorite(flowerId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <AnimatedSection animation="scaleUp" className="w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="bg-white rounded-2xl shadow-2xl border border-green-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-rose-500 text-white p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Heart className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">My Favorite Flowers</h2>
                  <p className="text-white/90">
                    {favoriteFlowers.length} flower{favoriteFlowers.length !== 1 ? 's' : ''} in your collection
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {favoriteFlowers.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gradient-to-br from-green-50 to-rose-50 rounded-2xl p-8 max-w-md mx-auto">
                  <Flower2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No favorites yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start exploring flowers and click the heart icon to add them to your favorites!
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-rose-500 text-white rounded-lg hover:from-green-700 hover:to-rose-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Flowers
                  </button>
                </div>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteFlowers.map((flower, index) => (
                  <div
                    key={flower.id}
                    className={`group cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 ${
                      visibleItems[index] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                    }`}
                    onClick={() => handleFlowerClick(flower.id)}
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-500 hover:border-green-200">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={flower.image}
                          alt={flower.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Country Badge */}
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                            <MapPin className="h-3 w-3 text-green-600" />
                            <span className="text-xs font-medium text-gray-800">{flower.country}</span>
                          </div>
                        </div>

                        {/* Remove from Favorites Button */}
                        <button
                          onClick={(e) => handleRemoveFavorite(e, flower.id)}
                          className="absolute top-3 right-3 p-2 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-110 group-hover:animate-pulse"
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </button>

                        {/* Difficulty Badge */}
                        <div className="absolute bottom-3 left-3">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(flower.difficulty)}`}>
                            {flower.difficulty}
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                            {flower.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            {getDifficultyStars(flower.difficulty)}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {flower.description}
                        </p>
                        
                        {/* Color Options */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {flower.colors.slice(0, 3).map((color, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {color}
                              </span>
                            ))}
                            {flower.colors.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                +{flower.colors.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{flower.bloomTime}</span>
                          <span className="text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FavoritesModal;