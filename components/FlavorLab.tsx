
import React, { useState } from 'react';
import { getFlavorRecommendation } from '../services/geminiService';
import { Recommendation } from '../types';

const FlavorLab: React.FC = () => {
  const [mood, setMood] = useState('');
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !preferences) return;
    
    setLoading(true);
    setResult(null);
    try {
      const data = await getFlavorRecommendation(mood, preferences);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Oops! The AI is having a brain freeze. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lab" className="py-24 px-6 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 10H10V13H7V10Z" fill="currentColor"/>
              <path d="M14 10H17V13H14V10Z" fill="currentColor"/>
            </svg>
          </div>

          <div className="text-center mb-10">
            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
              AI Powered
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The AI Flavor Lab</h2>
            <p className="text-gray-600 text-lg">
              Can't decide? Let Gemini analyze your mood and palate to design a custom scoop just for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-bold text-gray-700 ml-2">How are you feeling?</label>
                <input 
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="e.g. Energetic, nostalgic, adventurous"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-bold text-gray-700 ml-2">Any flavor preferences?</label>
                <input 
                  type="text"
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="e.g. Spicy, very sweet, nutty"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-pink-200 outline-none transition-all shadow-inner"
                />
              </div>
            </div>
            
            <button 
              disabled={loading}
              className={`w-full py-5 rounded-2xl text-xl font-bold text-white transition-all shadow-xl flex items-center justify-center gap-3
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-[1.02]'}`}
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  Churning ideas...
                </>
              ) : (
                <>
                  Generate My Dream Scoop <span className="text-2xl">✨</span>
                </>
              )}
            </button>
          </form>

          {result && (
            <div className="mt-12 p-8 bg-white rounded-3xl shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-pink-600">"{result.flavorName}"</h3>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-pink-200 pl-4">
                    {result.reasoning}
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.ingredients.map((ing, idx) => (
                        <span key={idx} className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg text-sm font-medium border border-pink-100">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 h-64 bg-pink-50 rounded-2xl flex items-center justify-center text-center p-4 border-2 border-dashed border-pink-200 relative group overflow-hidden">
                   <img 
                    src={`https://picsum.photos/seed/${result.flavorName}/400/400`} 
                    alt="AI Visual"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform"
                   />
                   <div className="relative z-10 bg-white/80 p-2 rounded text-xs font-bold text-pink-600">
                     Visualizing Scoop...
                   </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-500 mb-4 font-medium">Ready to try it?</p>
                <button className="bg-pink-500 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg">
                  Order this Custom Blend
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlavorLab;
