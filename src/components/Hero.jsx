import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 grid md:grid-cols-2 gap-8 py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-black/10 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <p className="text-sm uppercase tracking-wide text-black/70">Live Events • Portfolio</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-black leading-tight">
            Engaging, playful experiences for audiences in real life
          </h1>
          <p className="mt-4 text-black/80">
            I design, produce, and run live events. From concept to curtain call, I bring energy, precision, and fun to every moment.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-full bg-[#0891b2] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
              See my work
            </a>
            <a href="#resume" className="inline-flex items-center rounded-full border border-black/10 text-black px-5 py-2.5 text-sm font-semibold hover:bg-black/5 transition">
              View resume
            </a>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  );
}
