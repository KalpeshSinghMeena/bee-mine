import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Stars, Sparkles, Music } from 'lucide-react';
import { Background } from './components/Background';
import { FloatingNoButton } from './components/FloatingNoButton';
import { AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.ASKING);

  // Confetti effect when "Yes" is clicked
  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF4D6D', '#FF8FA3', '#FFFFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF4D6D', '#FF8FA3', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleYesClick = () => {
    setAppState(AppState.ACCEPTED);
    triggerConfetti();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-valentine-light text-valentine-dark p-4">
      <Background />

      {appState === AppState.ASKING ? (
        <div className="z-10 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <Heart className="w-32 h-32 text-valentine-red animate-pulse-fast fill-valentine-red drop-shadow-xl" />
            <Sparkles className="absolute -top-4 -right-4 text-yellow-400 w-8 h-8 animate-bounce" />
          </div>

          <h1 className="font-handwriting text-6xl md:text-7xl font-bold text-valentine-dark drop-shadow-sm p-4">
            Will you be my Valentine?
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <button
              onClick={handleYesClick}
              className="bg-valentine-red hover:bg-valentine-dark text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-110 active:scale-95 font-body text-2xl flex items-center gap-2"
            >
              <Heart className="w-6 h-6 fill-current" />
              YES!
            </button>
            
            <FloatingNoButton initialText="No" />
          </div>
          
          <div className="mt-12 opacity-90 hover:opacity-100 transition-opacity duration-300">
             <img 
               src="https://media.tenor.com/bX3sQvCq0aQAAAAi/bear-love.gif" 
               alt="Cute bear with hearts" 
               className="rounded-lg shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 hidden md:block border-4 border-white" 
             />
          </div>
        </div>
      ) : (
        <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="font-handwriting text-7xl font-bold text-valentine-red mb-4">
            Yay! ❤️
          </h1>

          <div className="animate-bounce">
             <img 
               src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
               alt="Cute kissing bears" 
               className="rounded-lg shadow-xl border-4 border-white mx-auto w-full max-w-sm" 
             />
          </div>
          
          <div className="relative w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-valentine-pink">
            <Stars className="absolute -top-6 -left-6 text-yellow-400 w-12 h-12 animate-spin-slow" />
            <Music className="absolute -bottom-6 -right-6 text-valentine-red w-10 h-10 animate-bounce" />
            
            <h2 className="font-body text-3xl font-bold text-gray-700">
              I knew you'd say yes!
            </h2>
          </div>
          
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 text-valentine-pink hover:text-valentine-red underline font-body"
          >
            Ask me again?
          </button>
        </div>
      )}
      
      <footer className="absolute bottom-4 text-valentine-pink/60 font-body text-sm">
        Made with ❤️ and Code
      </footer>
    </div>
  );
};

export default App;