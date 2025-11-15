
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          React Text Editors Showcase
        </h1>
        <p className="text-gray-600 mt-1">
          A demonstration of different text input methods and libraries.
        </p>
      </div>
    </header>
  );
};

export default Header;
