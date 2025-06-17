import React, { useState } from 'react';
import { User, Settings, Heart, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ProfileModal from './ProfileModal';
import AnimatedSection from './AnimatedSection';

const UserAvatar: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setShowDropdown(false);
  };

  const getInitials = () => {
    if (profile?.name) {
      return profile.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user?.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
        >
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${profile?.avatar_gradient || 'from-green-400 to-blue-500'} flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-200`}>
            {getInitials()}
          </div>
          <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <AnimatedSection animation="scaleUp" className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${profile?.avatar_gradient || 'from-green-400 to-blue-500'} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {getInitials()}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {profile?.name || 'User'}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button
                onClick={() => {
                  setShowProfile(true);
                  setShowDropdown(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
              >
                <Settings className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={() => {
                  // Navigate to favorites - we'll implement this
                  setShowDropdown(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200"
              >
                <Heart className="h-4 w-4" />
                <span>My Favorites</span>
              </button>

              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>

      <ProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default UserAvatar;