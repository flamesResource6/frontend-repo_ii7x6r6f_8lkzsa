export default function Work() {
  const items = [
    {
      title: "Festival Stage Management",
      desc: "Coordinated multiple stages, talent logistics, and live cues for 30k+ attendees.",
    },
    {
      title: "Product Launch Experience",
      desc: "Immersive reveal event with synchronized lighting and interactive stations.",
    },
    {
      title: "Corporate Summit",
      desc: "End-to-end production: run of show, AV, stage design, and audience engagement.",
    },
  ];

  return (
    <section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Selected Work</h2>
        <p className="mt-2 text-black/70">A snapshot of projects I’ve brought to life.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-black/10 p-6 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition bg-white">
              <div className="h-36 rounded-xl bg-[#aedde8]" />
              <h3 className="mt-4 font-semibold text-black">{it.title}</h3>
              <p className="mt-2 text-sm text-black/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
