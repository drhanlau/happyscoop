
import React from 'react';

const FLAVORS = [
  { id: 1, name: 'Velvet Vanilla', desc: 'Tahitian vanilla beans steeped for 48 hours.', price: '$4.50', color: 'bg-yellow-50', emoji: '🍦' },
  { id: 2, name: 'Midnight Cocoa', desc: '70% dark Belgian chocolate with sea salt.', price: '$5.00', color: 'bg-brown-100', emoji: '🍫' },
  { id: 3, name: 'Dreamy Berry', desc: 'Muddled strawberries and wild raspberries.', price: '$5.50', color: 'bg-pink-100', emoji: '🍓' },
  { id: 4, name: 'Minty Matcha', desc: 'Japanese matcha with organic garden mint.', price: '$5.50', color: 'bg-green-100', emoji: '🌿' },
  { id: 5, name: 'Salted Honey', desc: 'Local wildflower honey and crystalline salt.', price: '$5.00', color: 'bg-orange-100', emoji: '🐝' },
  { id: 6, name: 'Galaxy Swirl', desc: 'Ube and coconut with edible stardust.', price: '$6.00', color: 'bg-purple-100', emoji: '✨' },
];

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Classics & Beyond</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our permanent collection features meticulously crafted staples, made from locally sourced organic cream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVORS.map(flavor => (
            <div 
              key={flavor.id} 
              className={`group p-8 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${flavor.color}`}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform inline-block">
                {flavor.emoji}
              </div>
              <h3 className="text-2xl font-bold mb-2">{flavor.name}</h3>
              <p className="text-gray-600 mb-6">{flavor.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-pink-600">{flavor.price}</span>
                <button className="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-pink-500 hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
