export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="rounded-2xl border border-black/10 p-8 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Let’s create something great</h2>
          <p className="mt-2 text-black/80">Email me and I’ll get back to you quickly.</p>
          <form className="mt-8 grid md:grid-cols-3 gap-4">
            <input className="col-span-3 md:col-span-1 rounded-lg border border-black/10 px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#0891b2]" placeholder="Your name" />
            <input className="col-span-3 md:col-span-1 rounded-lg border border-black/10 px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#0891b2]" placeholder="Email" />
            <input className="col-span-3 md:col-span-1 rounded-lg border border-black/10 px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#0891b2]" placeholder="Company / Event" />
            <textarea className="col-span-3 min-h-[140px] rounded-lg border border-black/10 px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#0891b2]" placeholder="Tell me about your event" />
            <div className="col-span-3">
              <button type="button" className="inline-flex items-center rounded-full bg-[#0891b2] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
