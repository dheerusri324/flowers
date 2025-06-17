import React, { useState } from 'react';
import { ArrowLeft, Home, Flower2, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserAvatar from './UserAvatar';
import AuthModal from './AuthModal';

interface NavigationProps {
  currentView: 'home' | 'category' | 'flower';
  onNavigate: (view: 'home' | 'category' | 'flower', categoryId?: string) => void;
  categoryId?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, categoryId }) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-green-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Flower2 className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-rose-500 bg-clip-text text-transparent">
                  FloraGuide
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {currentView !== 'home' && (
                <button
                  onClick={() => {
                    if (currentView === 'flower' && categoryId) {
                      onNavigate('category', categoryId);
                    } else {
                      onNavigate('home');
                    }
                  }}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              )}
              
              {currentView !== 'home' && (
                <button
                  onClick={() => onNavigate('home')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </button>
              )}

              {/* Auth Section */}
              {!loading && (
                user ? (
                  <UserAvatar />
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-rose-500 text-white rounded-lg hover:from-green-700 hover:to-rose-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Navigation;