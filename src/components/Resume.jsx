export default function Resume() {
  const resumeFont = { fontFamily: 'Gill Sans, GillSans, Trebuchet MS, Calibri, sans-serif' };

  return (
    <section id="resume" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="rounded-2xl border border-black/10 p-6 md:p-10 bg-white">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black" style={resumeFont}>DANIELLE LONNON</h2>
              <p className="mt-1 text-black/80" style={resumeFont}>Senior Event Operations & Production Lead | FIFA, Sydney NYE, BBC Sports</p>
            </div>
            <div className="text-sm text-black/80 space-y-1" style={resumeFont}>
              <div>+61 408 814 419</div>
              <div>daniellelonnon@gmail.com</div>
              <div>Sydney • London</div>
            </div>
          </div>

          {/* Profile */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <h3 className="font-semibold text-black" style={resumeFont}>Profile</h3>
              <p className="mt-2 text-black/80" style={resumeFont}>
                Senior global leader specialising in the strategy and delivery of multi-disciplinary live experiences across sport,
                entertainment, and brand activations. I unify operational excellence, end-to-end project management, commercial
                outcomes, and audience experience — a combination most organisations don’t have a single title for. I translate
                strategy into reality by managing P&L and team oversight on full programmes, or deploying into critical functions
                to ensure delivery.
              </p>
              <p className="mt-2 text-black/80" style={resumeFont}>15+ years │ 25+ major projects │ 3 continents │ Zero tolerance for “It’ll be right on the night”.</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-8">
            <h3 className="font-semibold text-black" style={resumeFont}>Key Achievements</h3>
            <ul className="mt-3 grid md:grid-cols-3 gap-4 text-black/80" style={resumeFont}>
              <li className="rounded-xl border border-black/10 p-4 bg-[#aedde8]/40"><span className="font-medium text-black">Strategy:</span> Built the operational framework for a $10M sponsor debut at the new Abbott World Major Marathon.</li>
              <li className="rounded-xl border border-black/10 p-4 bg-[#aedde8]/40"><span className="font-medium text-black">Commercial:</span> Delivered 106.5% investor return on £1M+ Off West End theatre debut, defying industry odds.</li>
              <li className="rounded-xl border border-black/10 p-4 bg-[#aedde8]/40"><span className="font-medium text-black">Risk Stabilisation:</span> Pivoted into a new domain on 24 hours’ notice to deliver zero service failures operations for FIFA.</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <h3 className="font-semibold text-black" style={resumeFont}>Selected Professional Experience</h3>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/10 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-black font-medium" style={resumeFont}>Senior Event Manager ANZ | Tata Consultancy Services – TCS Sydney Marathon</div>
                <div className="text-sm text-black/60" style={resumeFont}>Fixed Term Contract: Apr 2025 – Sep 2025</div>
              </div>
              <p className="mt-2 text-black/80" style={resumeFont}>The Southern Hemisphere’s inaugural Abbott World Major Marathon, joining the likes of London, NYC, Tokyo & Berlin.</p>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1" style={resumeFont}>
                <li>Built the operational framework for a $10M sponsor strategy, leading 12 teams in a live, public marathon.</li>
                <li>Delivered zero critical incidents & 98% satisfaction for 500+ global C-suite guests, securing partner retention.</li>
              </ul>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/10 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-black font-medium" style={resumeFont}>RAPID DEPLOYMENT: FIFA HQ Transport Coordinator | FIFA Women’s World Cup 2023</div>
                <div className="text-sm text-black/60" style={resumeFont}>Fixed Term Contract: Jun 2023 – Aug 2023</div>
              </div>
              <p className="mt-2 text-black/80" style={resumeFont}>The largest women’s sporting event in history, hosted across Australia and New Zealand.</p>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1" style={resumeFont}>
                <li>Handpicked 24hrs pre-tournament to stabilise critical logistics gap in an unfamiliar event service area.</li>
                <li>Delivered 90%+ on-time performance across 64 matches with zero service failures under global scrutiny.</li>
              </ul>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/10 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-black font-medium" style={resumeFont}>Executive Producer & Senior Consultant | Danielle Lonnon Consultancy</div>
                <div className="text-sm text-black/60" style={resumeFont}>2019 – Present (Concurrent)</div>
              </div>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1" style={resumeFont}>
                <li>Co-led £1M+ capital raise & P&L, delivering 106.5% investor return (vs 80% industry fail rate).</li>
                <li>Recruited & led 30+ workforce — Delivered 52 shows on-budget with zero show-stops.</li>
                <li>Led 5+ brand activations ($1M+ each) securing 100% client retention.</li>
                <li>Developed, produced & maintained internal podcasts boosting engagement by 25%.</li>
              </ul>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/10 p-5">
              <div className="text-black font-medium" style={resumeFont}>Selected Previous Experience | Pre 2019</div>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1" style={resumeFont}>
                <li>Large-Scale Operations: City of Sydney New Year’s Eve (1M+ attendees), Edinburgh International Festival (300+ performances, 30+ venues), Opera Australia (6 city national tours).</li>
                <li>Live Broadcast & Theatre: BBC Sport (live broadcasts), Royal Shakespeare Company, National Theatre (acclaimed productions).</li>
              </ul>
            </div>
          </div>

          {/* Competencies */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-black/10 p-5">
              <h3 className="font-semibold text-black" style={resumeFont}>Cross-Industry Core Competencies</h3>
              <div className="mt-3 grid grid-cols-1 gap-3 text-black/80" style={resumeFont}>
                <div>
                  <div className="text-black font-medium">Large-Scale Event Operations</div>
                  <div className="text-sm">End-to-End Programme Management • Project Management • Event Planning • P&L Leadership • Budget Management ($10M+) • Team Leadership • Operational Planning • Enterprise Risk Mitigation • Business Continuity • Health & Safety Compliance • Data Analytics</div>
                </div>
                <div>
                  <div className="text-black font-medium">Brand, Media & Commercial Integration</div>
                  <div className="text-sm">Creative Ideation • Client Relationship Management • Stakeholder Management • Sponsorship Strategy & Delivery • Global Brand Partnerships • Brand Activations • Experiential Marketing • Corporate & Brand Storytelling • Live Broadcast Production • ROI Measurement</div>
                </div>
                <div>
                  <div className="text-black font-medium">Production & Technology</div>
                  <div className="text-sm">Showrunner • Show Calling • Content Development • Audience Experience Design • Digital Event Strategy • Event Technology • Vendor Management • Vendor Negotiation • Contract Management</div>
                </div>
                <div>
                  <div className="text-black font-medium">Global Sports, Tournament and Touring Operations</div>
                  <div className="text-sm">Multi-Site & Venue Logistics • Transport Logistics • Travel Logistics • Accommodation Logistics • VVIP Management • Ceremonies & Protocol • Match Day Presentation</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 p-5">
              <h3 className="font-semibold text-black" style={resumeFont}>Education & Technical Proficiencies</h3>
              <ul className="mt-3 text-black/80 space-y-2" style={resumeFont}>
                <li><span className="text-black font-medium">Postgraduate Certificate, Global Project Management</span> — Torrens University</li>
                <li><span className="text-black font-medium">Diploma, Broadcast Production</span> — North Sydney TAFE</li>
                <li>
                  <span className="text-black font-medium">Project Management:</span> Asana, Monday.com
                </li>
                <li>
                  <span className="text-black font-medium">Broadcast/Comms:</span> Riedel, Motorola
                </li>
                <li>
                  <span className="text-black font-medium">AI:</span> Workflow automation, agent building
                </li>
                <li>
                  <span className="text-black font-medium">Event Management CRM/EMS:</span> Cvent, Ungerboeck
                </li>
                <li>
                  <span className="text-black font-medium">Content:</span> Final Cut Pro, Logic Pro, Canva
                </li>
              </ul>
              <div className="mt-6">
                <a href="#credits" className="inline-flex items-center rounded-full bg-[#0891b2] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition" style={resumeFont}>
                  Access the curated credits list
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
