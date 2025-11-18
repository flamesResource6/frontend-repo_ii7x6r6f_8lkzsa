export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">About me</h2>
          <p className="mt-4 text-black/80">
            I’m a live events professional who thrives on energy, timing, and audience connection. My style is playful but precise—
            balancing creative spark with bulletproof operations. I love turning complex plans into effortless experiences.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 p-6 bg-white">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-black/60">Specialties</dt>
              <dd className="font-medium text-black">Production • Stage Mgmt • Ops</dd>
            </div>
            <div>
              <dt className="text-black/60">Locations</dt>
              <dd className="font-medium text-black">US • EU • Remote</dd>
            </div>
            <div>
              <dt className="text-black/60">Vibe</dt>
              <dd className="font-medium text-black">Engaging • Reliable • Fun</dd>
            </div>
            <div>
              <dt className="text-black/60">Availability</dt>
              <dd className="font-medium text-[#0891b2]">Open for bookings</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
