
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full blur-[100px] opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300 rounded-full blur-[100px] opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Happiness in <br />
            <span className="text-pink-500">Every Scoop.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Crafting artisanal, AI-inspired flavors that push the boundaries of frozen delights. Fresh ingredients, unlimited imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#menu" className="bg-pink-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl">
              Explore Menu
            </a>
            <a href="#lab" className="bg-white text-pink-500 border-2 border-pink-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-pink-50 transition-colors">
              Try Flavor AI
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  alt="Reviewer"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500">
              <span className="text-yellow-500 font-bold">4.9/5</span> from 2,000+ scoop lovers
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 scale-110 sm:scale-100">
            <img 
              src="https://picsum.photos/seed/icecreamhero/800/1000" 
              alt="Delicious Ice Cream"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-10 -right-5 md:right-0 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
            <span className="text-3xl">🍓</span>
          </div>
          <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce [animation-delay:1s]">
            <span className="text-3xl">🍫</span>
          </div>
          <div className="absolute top-1/2 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce [animation-delay:0.5s]">
            <span className="text-3xl">🍦</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
