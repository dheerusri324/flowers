import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import FlowerDetail from './components/FlowerDetail';

type View = 'home' | 'category' | 'flower';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFlower, setSelectedFlower] = useState<string>('');

  const handleNavigate = (view: View, categoryId?: string) => {
    setCurrentView(view);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleFlowerSelect = (flowerId: string) => {
    setSelectedFlower(flowerId);
    setCurrentView('flower');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentView={currentView}
        onNavigate={handleNavigate}
        categoryId={selectedCategory}
      />
      
      <main>
        {currentView === 'home' && (
          <HomePage onCategorySelect={handleCategorySelect} />
        )}
        
        {currentView === 'category' && (
          <CategoryPage 
            categoryId={selectedCategory}
            onFlowerSelect={handleFlowerSelect}
          />
        )}
        
        {currentView === 'flower' && (
          <FlowerDetail flowerId={selectedFlower} />
        )}
      </main>
    </div>
  );
}

export default App;