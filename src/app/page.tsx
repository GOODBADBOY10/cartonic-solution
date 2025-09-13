"use client"

import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const App = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">

      {/* Header */}
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Main Content */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
