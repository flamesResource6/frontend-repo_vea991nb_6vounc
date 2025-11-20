function Hero(){
  return (
    <section id="home" className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(30,64,175,0.25),transparent_35%)]"/>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Velvet Bar & Cafe
            </h1>
            <p className="mt-4 text-lg text-blue-100/90">
              Specialty coffee by day, signature cocktails by night. Cozy corners, good music, and a seasonal menu crafted with care.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#reservations" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">Book a table</a>
              <a href="#menu" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Explore menu</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="w-full h-64 sm:h-80 rounded-2xl bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-2xl ring-1 ring-white/10"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
