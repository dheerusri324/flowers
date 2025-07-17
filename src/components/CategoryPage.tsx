import React from 'react';
import { flowers, categories } from '../data/flowers';
import { Eye, Thermometer, Droplets, Sun, Star, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import Tooltip from './Tooltip';

interface CategoryPageProps {
  categoryId: string;
  onFlowerSelect: (flowerId: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, onFlowerSelect }) => {
  const category = categories.find(c => c.id === categoryId);
  const categoryFlowers = flowers.filter(f => f.category === categoryId);
  const { containerRef, visibleItems } = useStaggeredAnimation(categoryFlowers.length, 100);
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!category) {
    return <div>Category not found</div>;
  }

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
        className={`h-4 w-4 transition-colors duration-300 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleFavoriteClick = (e: React.MouseEvent, flowerId: string) => {
    e.stopPropagation();
    if (user) {
      const flower = categoryFlowers.find(f => f.id === flowerId);
      toggleFavorite(flowerId);
      
      // Add a subtle animation effect
      const button = e.currentTarget as HTMLButtonElement;
      button.style.transform = 'scale(1.2)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-rose-50">
      {/* Category Header */}
      <div className="relative bg-gradient-to-r from-green-600 to-rose-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedSection animation="slideLeft">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {category.name}
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="slideLeft" delay={200}>
                <p className="text-xl mb-6 leading-relaxed">
                  {category.description}
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex items-center space-x-4 text-lg">
                  <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    {categoryFlowers.length} varieties
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    Expert care guides
                  </span>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Flowers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryFlowers.map((flower, index) => (
            <div
              key={flower.id}
              className={`group cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              onClick={() => onFlowerSelect(flower.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500 hover:border-green-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(flower.difficulty)} transform hover:scale-110 transition-transform duration-300`}>
                      {flower.difficulty}
                    </div>
                    {user && (
                      <button
                        onClick={(e) => handleFavoriteClick(e, flower.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                          isFavorite(flower.id) 
                            ? 'bg-rose-500 text-white shadow-lg' 
                            : 'bg-white/80 text-rose-500 hover:bg-rose-50'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${isFavorite(flower.id) ? 'fill-current' : ''}`} />
                      </button>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {flower.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {getDifficultyStars(flower.difficulty)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {flower.description}
                  </p>
                  
                  {/* Color Options */}
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 font-medium mb-2 block">Available Colors:</span>
                    <div className="flex flex-wrap gap-1">
                      {flower.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Care Info */}
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                    <Tooltip content={`Temperature: ${flower.care.temperature}`}>
                      <div className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-300 cursor-help">
                        <Thermometer className="h-3 w-3 text-red-500" />
                        <span className="truncate">{flower.care.temperature.split(' ')[0]}</span>
                      </div>
                    </Tooltip>
                    <Tooltip content={`Humidity: ${flower.care.humidity}`}>
                      <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-300 cursor-help">
                        <Droplets className="h-3 w-3 text-blue-500" />
                        <span className="truncate">{flower.care.humidity}</span>
                      </div>
                    </Tooltip>
                    <Tooltip content={`Sunlight: ${flower.care.sunlight}`}>
                      <div className="flex items-center space-x-1 hover:text-yellow-500 transition-colors duration-300 cursor-help">
                        <Sun className="h-3 w-3 text-yellow-500" />
                        <span className="truncate">{flower.care.sunlight.split(' ')[0]}h</span>
                      </div>
                    </Tooltip>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Blooms: {flower.bloomTime}</span>
                      <span className="text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">Learn More →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {categoryFlowers.length === 0 && (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <div className="text-gray-500 text-lg">
              No flowers available in this category yet.
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;