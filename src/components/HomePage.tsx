import React from 'react';
import { categories } from '../data/flowers';
import { ChevronRight, Flower } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onCategorySelect: (categoryId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCategorySelect }) => {
  const { containerRef, visibleItems } = useStaggeredAnimation(categories.length, 150);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-rose-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover the Beauty of Flowers
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={400}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive guide to growing and caring for beautiful flowers. 
              From vibrant roses to cheerful sunflowers, find everything you need to create your perfect garden.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={600}>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Flower className="h-6 w-6 animate-bounce" />
              <span>Your journey to beautiful gardens starts here</span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="slideUp" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flower Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated collection of flower categories, 
            each with detailed care instructions and growing tips.
          </p>
        </AnimatedSection>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500 hover:border-green-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{category.flowerCount} varieties</span>
                      <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      {category.flowerCount} varieties available
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="scaleUp" delay={800} className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-100 to-rose-100 rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Garden Journey Today
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Each flower category contains detailed information about growing conditions, 
              care instructions, and beautiful varieties to help you succeed.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Care Instructions</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Color Varieties</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Growing Tips</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HomePage;