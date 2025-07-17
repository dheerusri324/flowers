import React, { useState, useMemo } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { flowers } from '../data/flowers';
import AnimatedSection from './AnimatedSection';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface CountrySearchProps {
  onFlowerSelect: (flowerId: string) => void;
}

const CountrySearch: React.FC<CountrySearchProps> = ({ onFlowerSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Get unique countries from flowers data
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(flowers.map(flower => flower.country))];
    return uniqueCountries.sort();
  }, []);

  // Filter flowers by search term
  const filteredFlowers = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return flowers.filter(flower => 
      flower.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const { containerRef, visibleItems } = useStaggeredAnimation(filteredFlowers.length, 100);

  const handleCountryClick = (country: string) => {
    setSearchTerm(country);
    setIsExpanded(true);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsExpanded(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedSection animation="slideUp" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Search by Country
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover flowers from around the world. Search by country to find beautiful blooms from different regions.
        </p>
      </AnimatedSection>

      {/* Search Bar */}
      <AnimatedSection animation="scaleUp" delay={200} className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-4 border-2 border-green-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-400 transition-all duration-300 text-lg placeholder-gray-500"
            placeholder="Search by country (e.g., Netherlands, Japan, Brazil)..."
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </AnimatedSection>

      {/* Country Suggestions */}
      {!searchTerm && (
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Popular Countries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {countries.slice(0, 12).map((country, index) => (
                <button
                  key={country}
                  onClick={() => handleCountryClick(country)}
                  className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-rose-100 hover:from-green-200 hover:to-rose-200 rounded-full border border-green-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MapPin className="h-4 w-4 text-green-600 group-hover:text-green-700 transition-colors duration-200" />
                  <span className="text-gray-700 group-hover:text-gray-800 font-medium transition-colors duration-200">
                    {country}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Search Results */}
      {searchTerm && (
        <div>
          <AnimatedSection animation="slideUp" delay={300}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                {filteredFlowers.length > 0 
                  ? `Found ${filteredFlowers.length} flower${filteredFlowers.length !== 1 ? 's' : ''} from "${searchTerm}"`
                  : `No flowers found from "${searchTerm}"`
                }
              </h3>
              {filteredFlowers.length > 0 && (
                <p className="text-gray-600 mt-2">
                  Click on any flower to learn more about it
                </p>
              )}
            </div>
          </AnimatedSection>

          {filteredFlowers.length > 0 && (
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFlowers.map((flower, index) => (
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
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-800">{flower.country}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {flower.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {flower.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {flower.difficulty}
                          </span>
                          <span className="text-xs text-gray-500">
                            {flower.bloomTime}
                          </span>
                        </div>
                        <span className="text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredFlowers.length === 0 && searchTerm && (
            <AnimatedSection animation="fadeIn" delay={500}>
              <div className="text-center py-16">
                <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No flowers found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We don't have any flowers from "{searchTerm}" in our collection yet.
                  </p>
                  <button
                    onClick={clearSearch}
                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-rose-500 text-white rounded-lg hover:from-green-700 hover:to-rose-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      )}
    </div>
  );
};

export default CountrySearch;