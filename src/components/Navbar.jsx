// import React, { useState, useEffect } from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-amber-700/30 hover:bg-amber-700/40 backdrop-blur-lg border-b border-white/10 transition-all">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-2xl text-gray-900 font-semibold">
            Real Bakery
          </span>
          <div className="flex space-x-6 text-gray-900 font-medium">
            <a href="#">Online Menu</a>
            <a href="#">About</a>
            <a href="#">Restaurants</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;