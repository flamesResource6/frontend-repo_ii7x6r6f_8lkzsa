import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import SolariBoard from './components/SolariBoard'
import Runsheet from './components/Runsheet'
import Countdown from './components/Countdown'
import TVCountdown from './components/TVCountdown'
import Credits from './components/Credits'

function App() {
  const solariRows = [
    { left: 'TCS SYDNEY MARATHON', right: 'ANZ', status: 'ON TIME' },
    { left: 'FIFA WOMENS WORLD CUP', right: 'HQ', status: 'LIVE' },
    { left: 'BBC SPORT BROADCAST', right: 'UK', status: 'WRAP' },
  ];

  const runsheetItems = [
    { time: '17:00', cue: 'House Open', owner: 'FOH', notes: 'Music up 20% ambience' },
    { time: '17:30', cue: 'Pre-show VT', owner: 'VIZ', notes: 'Roll VT1, standby LX' },
    { time: '17:33', cue: 'Lights to Black', owner: 'LX', notes: 'All house to 0%' },
    { time: '17:34', cue: 'Intro Walk-on', owner: 'SM', notes: 'MC to stage' },
  ];

  const creditNames = ['FIFA', 'TCS Sydney Marathon', 'BBC Sport', 'Royal Shakespeare Company', 'Sydney NYE', 'SXSW Sydney'];

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <main>
        <Hero />

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6 items-start">
            <SolariBoard rows={solariRows} />
            <div className="grid gap-6">
              <Countdown title="On Air In" targetDate={targetDate} />
              <TVCountdown seconds={30} />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <Runsheet items={runsheetItems} />
          </div>
        </section>

        <Work />
        <About />
        <Resume />
        <Credits items={creditNames} />
        <Contact />
        <footer className="bg-white border-top border-black/10">
          <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-black/60">© {new Date().getFullYear()} Live Events Portfolio</p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-sm text-black/70 hover:text-black">Instagram</a>
              <span className="text-black/20">•</span>
              <a href="#" className="text-sm text-black/70 hover:text-black">LinkedIn</a>
              <span className="text-black/20">•</span>
              <a href="#" className="text-sm text-black/70 hover:text-black">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
