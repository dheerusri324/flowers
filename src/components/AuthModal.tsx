import React, { useState } from 'react';
import { X, Mail, Lock, User, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signIn, signUp } = useAuth();

  if (!isOpen) return null;

  const getErrorMessage = (error: any) => {
    if (error?.message?.includes('over_email_send_rate_limit')) {
      return {
        type: 'rate_limit',
        message: 'Too many email requests. Please wait 60 seconds before trying again.',
        icon: Clock
      };
    }
    
    if (error?.message?.includes('email_not_confirmed')) {
      return {
        type: 'email_not_confirmed',
        message: 'Please check your email and click the confirmation link before signing in.',
        icon: Mail
      };
    }
    
    if (error?.message?.includes('Invalid login credentials')) {
      return {
        type: 'invalid_credentials',
        message: 'Invalid email or password. Please check your credentials and try again.',
        icon: AlertCircle
      };
    }
    
    if (error?.message?.includes('User already registered')) {
      return {
        type: 'user_exists',
        message: 'An account with this email already exists. Try signing in instead.',
        icon: AlertCircle
      };
    }
    
    return {
      type: 'general',
      message: error?.message || 'An unexpected error occurred. Please try again.',
      icon: AlertCircle
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (mode === 'signup') {
        await signUp(email, password, name);
        setSuccess('Account created! Please check your email for a confirmation link.');
        setEmail('');
        setPassword('');
        setName('');
      } else {
        await signIn(email, password);
        onClose();
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? getErrorMessage(error) : null;
  const ErrorIcon = errorInfo?.icon || AlertCircle;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {mode === 'signin' 
                ? 'Sign in to access your flower favorites' 
                : 'Join our community of flower enthusiasts'
              }
            </p>
          </div>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
              <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-green-800 text-sm font-medium">Success!</p>
                <p className="text-green-700 text-sm">{success}</p>
              </div>
            </div>
          )}

          {errorInfo && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <ErrorIcon className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-red-800 text-sm font-medium">
                  {errorInfo.type === 'rate_limit' && 'Rate Limited'}
                  {errorInfo.type === 'email_not_confirmed' && 'Email Not Confirmed'}
                  {errorInfo.type === 'invalid_credentials' && 'Invalid Credentials'}
                  {errorInfo.type === 'user_exists' && 'Account Exists'}
                  {errorInfo.type === 'general' && 'Error'}
                </p>
                <p className="text-red-700 text-sm">{errorInfo.message}</p>
                {errorInfo.type === 'user_exists' && (
                  <button
                    onClick={() => {
                      setMode('signin');
                      setError('');
                    }}
                    className="text-red-600 hover:text-red-800 text-sm font-medium mt-1 underline"
                  >
                    Switch to Sign In
                  </button>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{mode === 'signin' ? 'Signing In...' : 'Creating Account...'}</span>
                </div>
              ) : (
                mode === 'signin' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin');
                  setError('');
                  setSuccess('');
                }}
                className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
              >
                {mode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}