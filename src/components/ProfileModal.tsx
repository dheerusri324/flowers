import React, { useState, useEffect } from 'react';
import { X, User, MapPin, Calendar, Palette, Save, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from './AnimatedSection';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const avatarGradients = [
  'from-green-400 to-blue-500',
  'from-purple-400 to-pink-500',
  'from-yellow-400 to-orange-500',
  'from-red-400 to-pink-500',
  'from-indigo-400 to-purple-500',
  'from-teal-400 to-cyan-500',
  'from-rose-400 to-red-500',
  'from-emerald-400 to-teal-500',
  'from-amber-400 to-yellow-500',
  'from-violet-400 to-purple-500',
  'from-cyan-400 to-blue-500',
  'from-lime-400 to-green-500',
];

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfile, user } = useAuth();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [selectedGradient, setSelectedGradient] = useState('from-green-400 to-blue-500');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name || '');
      setAge(profile.age?.toString() || '');
      setCountry(profile.country || '');
      setSelectedGradient(profile.avatar_gradient || 'from-green-400 to-blue-500');
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error } = await updateProfile({
        name: name.trim() || undefined,
        age: age ? parseInt(age) : undefined,
        country: country.trim() || undefined,
        avatar_gradient: selectedGradient,
      });

      if (error) {
        setError(error.message || 'Failed to update profile');
      } else {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getInitials = () => {
    if (name.trim()) {
      return name
        .trim()
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user?.email?.[0]?.toUpperCase() || 'U';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <AnimatedSection animation="scaleUp" className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-rose-500 text-white p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <User className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Edit Profile</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                  Profile updated successfully! ✨
                </div>
              )}

              {/* Avatar Preview */}
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${selectedGradient} flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  {getInitials()}
                </div>
                <p className="text-sm text-gray-600 mt-2">Your Avatar</p>
              </div>

              {/* Avatar Gradient Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span>Choose Avatar Color</span>
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {avatarGradients.map((gradient, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedGradient(gradient)}
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} transform transition-all duration-200 hover:scale-110 ${
                        selectedGradient === gradient 
                          ? 'ring-4 ring-green-300 scale-110' 
                          : 'hover:ring-2 hover:ring-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Age Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Age</span>
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                  placeholder="Enter your age"
                  min="1"
                  max="150"
                />
              </div>

              {/* Country Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Country</span>
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                  placeholder="Enter your country"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-rose-500 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-rose-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    <span>Save Profile</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProfileModal;