export default function HonestySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-8 bg-soft-cream">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-display text-twilight-blue text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          What I Can't Pretend
        </h2>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-custom border-l-8 border-dusty-rose">
          <div className="font-serif text-center leading-relaxed"
               style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', lineHeight: '2' }}>
            <p className="mb-8">
              I don't know if I can call this love. The word feels too heavy with expectations, too loaded with promises I might not be able to keep. But I know I want to care, without pretending it's simple or easy or guaranteed.
            </p>
            
            <p className="mb-8">
              I know that you matter. You always did. In ways that have nothing to do with romance and everything to do with recognizing something rare and real in another person.
            </p>
            
            <p>
              I can't promise to heal your wounds or never cause new ones. I can't promise that caring for each other won't sometimes feel like too much. But I can promise honesty, even when it's uncomfortable. Especially then.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
