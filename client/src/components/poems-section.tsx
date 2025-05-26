import { useState } from "react";

const poems = [
  {
    title: "Creator's Poem",
    content: [
      "In morning light that breaks too soon,",
      "I think of how you hold your coffee—",
      "both hands wrapped around the warmth",
      "as if it might escape,",
      "the way we hold all precious things",
      "that have left us before."
    ]
  },
  {
    title: "Placeholder Poem 1",
    content: [
      "Your silence speaks in colors",
      "I am learning to read—",
      "the deep blue of contemplation,",
      "the soft gray of remembering,",
      "the gold that appears",
      "when you forget to guard yourself."
    ]
  },
  {
    title: "Placeholder Poem 2",
    content: [
      "We are two people",
      "learning to be gentle",
      "with our own hearts",
      "while daring to care",
      "for someone else's."
    ]
  },
  {
    title: "Your Words Here",
    content: [
      "[Your words here—",
      "the ones that made me understand",
      "how truth sounds when it's spoken",
      "without fear,",
      "how hope looks when it's earned",
      "through surviving.]"
    ]
  }
];

export default function PoemsSection() {
  const [currentPoem, setCurrentPoem] = useState(0);

  const nextPoem = () => {
    setCurrentPoem((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentPoem((prev) => (prev - 1 + poems.length) % poems.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-8 bg-soft-cream">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-display text-twilight-blue text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Words That Know You
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-custom min-h-[300px] flex items-center justify-center">
            <div
              key={currentPoem}
              className="font-script text-center text-deep-charcoal"
              style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                lineHeight: '1.8'
              }}
            >
              {poems[currentPoem].content.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevPoem}
              className="bg-dusty-rose text-white px-6 py-3 rounded-full hover:bg-twilight-blue transition-all duration-300 hover:-translate-y-1 font-serif"
            >
              ← Previous
            </button>
            
            <div className="flex gap-2">
              {poems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPoem(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPoem 
                      ? 'bg-dusty-rose scale-125' 
                      : 'bg-dusty-rose opacity-50 hover:opacity-75'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPoem}
              className="bg-dusty-rose text-white px-6 py-3 rounded-full hover:bg-twilight-blue transition-all duration-300 hover:-translate-y-1 font-serif"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
