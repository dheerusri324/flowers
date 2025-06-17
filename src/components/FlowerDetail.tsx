import React from 'react';
import { flowers } from '../data/flowers';
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Sprout, 
  Calendar, 
  Star,
  Info,
  Palette,
  Heart
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import AnimatedSection from './AnimatedSection';

interface FlowerDetailProps {
  flowerId: string;
}

const FlowerDetail: React.FC<FlowerDetailProps> = ({ flowerId }) => {
  const flower = flowers.find(f => f.id === flowerId);
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!flower) {
    return <div>Flower not found</div>;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Hard': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getDifficultyStars = (difficulty: string) => {
    const stars = difficulty === 'Easy' ? 1 : difficulty === 'Medium' ? 2 : 3;
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 transition-colors duration-300 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleFavoriteClick = () => {
    if (user) {
      toggleFavorite(flower.id);
    }
  };

  const isFlowerFavorite = user ? isFavorite(flower.id) : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-rose-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="slideLeft">
                <div className="flex items-center space-x-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {flower.name}
                  </h1>
                  {user && (
                    <button
                      onClick={handleFavoriteClick}
                      className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                        isFlowerFavorite 
                          ? 'bg-rose-500 text-white shadow-lg' 
                          : 'bg-white/20 text-rose-300 hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`h-6 w-6 ${isFlowerFavorite ? 'fill-current' : ''}`} />
                    </button>
                  )}
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideLeft" delay={200}>
                <p className="text-xl mb-6 leading-relaxed">
                  {flower.description}
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex items-center space-x-6 mb-6">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 ${getDifficultyColor(flower.difficulty)}`}>
                    <span className="font-medium">{flower.difficulty}</span>
                    <div className="flex items-center space-x-1">
                      {getDifficultyStars(flower.difficulty)}
                    </div>
                  </div>
                  
                  <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <span className="font-medium">Blooms: {flower.bloomTime}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Colors Section */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="h-6 w-6 text-rose-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Available Colors</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {flower.colors.map((color, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-rose-50 rounded-xl p-4 border border-green-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-rose-400 animate-pulse"></div>
                        <span className="font-medium text-gray-900">{color}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Care Instructions */}
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <Info className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Care Instructions</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Thermometer className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Temperature</h3>
                        <p className="text-gray-700">{flower.care.temperature}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Droplets className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Humidity</h3>
                        <p className="text-gray-700">{flower.care.humidity}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Sun className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Sunlight</h3>
                        <p className="text-gray-700">{flower.care.sunlight}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-cyan-50 rounded-xl border border-cyan-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Droplets className="h-6 w-6 text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Watering</h3>
                        <p className="text-gray-700">{flower.care.watering}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Sprout className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Soil</h3>
                        <p className="text-gray-700">{flower.care.soil}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Sprout className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Fertilizer</h3>
                        <p className="text-gray-700">{flower.care.fertilizer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <AnimatedSection animation="slideLeft" delay={600}>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                
                <div className="space-y-4">
                  <div className="hover:bg-green-50 p-2 rounded-lg transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-gray-700">Bloom Time</span>
                    </div>
                    <p className="text-gray-900 ml-6">{flower.bloomTime}</p>
                  </div>
                  
                  <div className="hover:bg-green-50 p-2 rounded-lg transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-gray-700">Difficulty</span>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                      <span className="text-gray-900">{flower.difficulty}</span>
                      <div className="flex items-center space-x-1">
                        {getDifficultyStars(flower.difficulty)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Growing Tips */}
            <AnimatedSection animation="slideLeft" delay={800}>
              <div className="bg-gradient-to-br from-green-100 to-rose-100 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-shadow duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growing Tips</h3>
                
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start space-x-2 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p>Plant in well-draining soil for optimal root health</p>
                  </div>
                  <div className="flex items-start space-x-2 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <p>Water early morning to reduce evaporation</p>
                  </div>
                  <div className="flex items-start space-x-2 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <p>Deadhead spent blooms to encourage new growth</p>
                  </div>
                  <div className="flex items-start space-x-2 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <p>Monitor for pests and diseases regularly</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Fun Fact */}
            <AnimatedSection animation="slideLeft" delay={1000}>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Did You Know?</h3>
                <p className="text-gray-700 leading-relaxed">
                  {flower.name} flowers have been cultivated for centuries and are known for their 
                  therapeutic properties and symbolic meanings in various cultures around the world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;