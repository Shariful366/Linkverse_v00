import React, { useState, useEffect } from 'react';
import { Router } from './components/Router';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // App initialization with error handling
    const initializeApp = async () => {
      try {
        // Simulate app initialization
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize Linkverse 2050');
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Linkverse 2050</h1>
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-x-hidden w-full">
          <Router />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;