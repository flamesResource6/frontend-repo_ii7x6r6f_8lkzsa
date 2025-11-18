export default function Resume() {
  return (
    <section id="resume" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Resume</h2>
        <p className="mt-2 text-black/70">Set in Gill Sans styling with black body text and cool blue accents.</p>
        <div className="mt-8 rounded-2xl border border-black/10 p-6 bg-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-black" style={{ fontFamily: 'Gill Sans, GillSans, Trebuchet MS, Calibri, sans-serif' }}>Experience</h3>
              <ul className="mt-3 space-y-3 text-black/80">
                <li>
                  Senior Producer — Live Events
                  <div className="text-sm text-black/60">2019 — Present</div>
                </li>
                <li>
                  Stage Manager — Touring Shows
                  <div className="text-sm text-black/60">2016 — 2019</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black" style={{ fontFamily: 'Gill Sans, GillSans, Trebuchet MS, Calibri, sans-serif' }}>Highlights</h3>
              <ul className="mt-3 space-y-2 text-black/80 list-disc pl-5">
                <li>Run of show and cue calling for multi-stage festivals</li>
                <li>Cross-functional vendor and crew leadership</li>
                <li>Audience engagement planning and brand experience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black" style={{ fontFamily: 'Gill Sans, GillSans, Trebuchet MS, Calibri, sans-serif' }}>Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Production', 'Stage Management', 'AV', 'Logistics', 'Run of Show', 'Talent'].map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs text-black bg-[#aedde8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#0891b2] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Request full resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
