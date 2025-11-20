import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold text-white tracking-wide">Velvet Bar & Cafe</a>
        <button onClick={() => setOpen(!open)} className="sm:hidden text-white/80">☰</button>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <li><a href="#menu" className="hover:text-white">Menu</a></li>
          <li><a href="#reservations" className="hover:text-white">Reservations</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10">
          <ul className="px-4 py-3 space-y-2 text-white/90">
            <li><a onClick={() => setOpen(false)} href="#menu" className="block">Menu</a></li>
            <li><a onClick={() => setOpen(false)} href="#reservations" className="block">Reservations</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact" className="block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
