export default function SongSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-8 bg-parchment-beige">
      <div className="max-w-4xl mx-auto w-full text-center">
        <p className="italic text-twilight-blue mb-8"
           style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
          "You once said this song held you when nothing else could."
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-custom">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/rIBWBrJzXU0"
              title="Your Favorite Song"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}
