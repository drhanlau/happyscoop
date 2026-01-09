
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-tr from-pink-400 to-yellow-300 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-xl">🍦</span>
        </div>
        <span className="text-2xl font-bold tracking-tight gradient-text">Scoop AI</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#" className="hover:text-pink-500 transition-colors">Home</a>
        <a href="#menu" className="hover:text-pink-500 transition-colors">Menu</a>
        <a href="#lab" className="hover:text-pink-500 transition-colors">AI Flavor Lab</a>
        <a href="#about" className="hover:text-pink-500 transition-colors">Our Story</a>
      </div>

      <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200">
        Visit Shop
      </button>
    </nav>
  );
};

export default Navbar;
