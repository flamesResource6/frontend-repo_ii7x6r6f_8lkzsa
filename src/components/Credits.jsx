export default function Credits({ items = [] }) {
  if (!items.length) return null;
  return (
    <section id="credits" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Credits</h2>
        <p className="mt-2 text-black/70">A curated selection of platforms and partners who've trusted my work.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((name) => (
            <div key={name} className="rounded-xl border border-black/10 p-4 text-center bg-white hover:bg-black/5 transition">
              <span className="text-sm font-medium text-black">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
