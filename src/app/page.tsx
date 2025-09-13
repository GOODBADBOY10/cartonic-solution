"use client"

import React, { useState} from 'react';
import Footer from './Footer';
import Main from './Main';

const App = () => {

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">

      {/* Main Content */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
