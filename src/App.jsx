import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Menu />
      <Reservations />
      <Contact />
      <footer className="py-10 text-center text-blue-200 bg-slate-900 border-t border-white/10">
        <p>© {new Date().getFullYear()} Velvet Bar & Cafe • 21 Baker Street • Open 8am–11pm</p>
      </footer>
    </div>
  )
}

export default App
