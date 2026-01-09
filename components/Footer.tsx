
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🍦</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">Scoop AI</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Merging the art of dessert with the science of taste. Our lab is always open for those seeking the extraordinary.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'TikTok', 'Twitter'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-white opacity-20 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-6">Explore</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-pink-400">Our Flavors</a></li>
            <li><a href="#" className="hover:text-pink-400">Monthly Specials</a></li>
            <li><a href="#" className="hover:text-pink-400">Franchising</a></li>
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-6">Locations</h4>
          <ul className="space-y-3 text-gray-400">
            <li>San Francisco, CA</li>
            <li>New York City, NY</li>
            <li>Austin, TX</li>
            <li>Tokyo, Japan</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2024 Scoop AI Artisanal Lab. All rights reserved. Powered by Gemini.</p>
      </div>
    </footer>
  );
};

export default Footer;
