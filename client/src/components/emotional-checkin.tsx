import { useState } from "react";

interface EmotionResponse {
  quote: string;
  message: string;
}

const emotionResponses: Record<string, EmotionResponse> = {
  empty: {
    quote: "Emptiness is not absence. It's space, waiting to be filled.",
    message: "Sometimes the empty spaces in us are where new growth begins. You don't have to fill them all at once."
  },
  heavy: {
    quote: "The weight you carry has taught you strength you didn't know you had.",
    message: "Heavy days are real, and they matter. Rest when you need to. The weight will lighten."
  },
  hopeful: {
    quote: "Hope is the thing with feathers that perches in the soul.",
    message: "Your hope, however fragile, is brave. It's choosing to believe in tomorrow despite yesterday."
  },
  angry: {
    quote: "Anger is often love with nowhere to go.",
    message: "Your anger is valid. It speaks to what you value and what you've lost. Feel it, but don't let it consume you."
  },
  tender: {
    quote: "Tenderness is courage. It takes strength to remain soft.",
    message: "In a world that often rewards hardness, your tenderness is a quiet revolution. Thank you for staying open."
  }
};

const emotions = [
  { key: "empty", label: "Empty", icon: "fas fa-circle" },
  { key: "heavy", label: "Heavy", icon: "fas fa-weight-hanging" },
  { key: "hopeful", label: "Hopeful", icon: "fas fa-seedling" },
  { key: "angry", label: "Angry", icon: "fas fa-fire" },
  { key: "tender", label: "Tender", icon: "fas fa-heart" }
];

export default function EmotionalCheckin() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-8 gradient-dusty-parchment">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="font-display text-white mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          How are you feeling today?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {emotions.map((emotion) => (
            <button
              key={emotion.key}
              onClick={() => handleEmotionSelect(emotion.key)}
              className="bg-white border-3 border-dusty-rose rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-dusty-rose hover:text-white hover:-translate-y-2 hover:shadow-custom font-serif"
              style={{ fontSize: '1.1rem' }}
            >
              <i className={`${emotion.icon} text-2xl mb-3 block`} />
              {emotion.label}
            </button>
          ))}
        </div>
        
        {selectedEmotion && (
          <div className="bg-white bg-opacity-90 p-8 rounded-2xl max-w-2xl mx-auto animate-fadeInUp">
            <p className="text-dusty-rose font-semibold mb-4 text-xl">
              "{emotionResponses[selectedEmotion].quote}"
            </p>
            <p className="text-deep-charcoal leading-relaxed">
              {emotionResponses[selectedEmotion].message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
