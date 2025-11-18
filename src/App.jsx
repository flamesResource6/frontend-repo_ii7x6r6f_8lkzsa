import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Resume />
        <Contact />
        <footer className="bg-white border-t border-black/10">
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
