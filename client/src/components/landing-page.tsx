import { useEffect, useRef } from "react";

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;
      
      const numStars = 50;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'absolute bg-white rounded-full animate-twinkle';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsRef.current.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gradient-landing relative overflow-hidden">
      <div ref={starsRef} className="absolute w-full h-full pointer-events-none" />
      
      <h1 className="font-display text-white text-center mb-8 text-shadow-light opacity-0 animate-fadeInUp"
          style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            animationDelay: '0.5s'
          }}>
        In the Quiet Between Us
      </h1>
      
      <p className="italic text-white text-center mb-12 px-8 opacity-0 animate-fadeInUp"
         style={{ 
           fontSize: 'clamp(1rem, 3vw, 1.5rem)',
           color: 'rgba(255, 255, 255, 0.9)',
           animationDelay: '1s'
         }}>
        "I hope even silence speaks gently to you."
      </p>
      
      <button
        onClick={onEnter}
        className="bg-white bg-opacity-20 border-2 border-white text-white px-8 py-4 font-serif text-xl cursor-pointer rounded-full transition-all duration-300 opacity-0 animate-fadeInUp backdrop-blur-custom hover:bg-white hover:text-twilight-blue hover:-translate-y-1 hover:shadow-custom-strong"
        style={{ animationDelay: '1.5s' }}
      >
        Step Inside
      </button>
    </div>
  );
}
