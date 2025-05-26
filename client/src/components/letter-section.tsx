import { useEffect, useRef, useState } from "react";

export default function LetterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-8 gradient-parchment">
      <div className="max-w-4xl mx-auto w-full">
        <div
          ref={contentRef}
          className={`font-serif text-deep-charcoal transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            lineHeight: '2',
            textAlign: 'justify'
          }}
        >
          <p className="mb-8">My dearest friend,</p>
          
          <p className="mb-8">
            I find myself writing to you from a place I cannot fully name—somewhere between certainty and doubt, between caring deeply and protecting what remains fragile in both of us. There are words I want to say that feel too heavy, and others that feel too light for what exists in this quiet space between us.
          </p>
          
          <p className="mb-8">
            I know you carry wounds that still ache, memories that shape how you see love and trust. I see the way you hold yourself sometimes, like you're waiting for the next disappointment, the next person to prove that vulnerability is a mistake. I understand this wariness because I carry my own.
          </p>
          
          <p className="mb-8">
            What I feel for you exists without demands. It asks for nothing more than to be acknowledged—not as promise or burden, but simply as truth. You have touched something in me that I thought had grown too quiet to respond. In your laughter, in the way you see beauty in small things, in your fierce honesty about pain—I find something that feels like home.
          </p>
          
          <p className="mb-8">
            I cannot promise you healing, because healing belongs to you alone. I cannot promise you a love without complications, because we are both complicated people. But I can promise you presence—the kind that doesn't try to fix or change, but simply witnesses and holds space.
          </p>
          
          <p className="mb-8">
            Whether we are meant to be lovers, friends, or something undefined that exists only between us, I want you to know: you are seen. Your pain is real and valid. Your joy, when it comes, illuminates everything around you. Your existence has mattered to me in ways I am still learning to understand.
          </p>
          
          <div className="italic text-center text-dusty-rose mt-12"
               style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)' }}>
            "Even if we are only fragments, I'll still remember your whole."
          </div>
        </div>
      </div>
    </section>
  );
}
