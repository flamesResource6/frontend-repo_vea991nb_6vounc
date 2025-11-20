import { useEffect, useState } from 'react'

function Menu(){
  const [menu, setMenu] = useState({drinks: [], bites: []})
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchMenu() }, [])

  const fetchMenu = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/menu`)
      const data = await res.json()
      setMenu(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="menu" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Menu</h2>
        {loading ? (
          <p className="text-blue-200">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Drinks</h3>
              <ul className="space-y-3">
                {menu.drinks.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-white/10 py-3">
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-sm text-blue-200/80">{item.desc}</p>
                    </div>
                    <span className="text-blue-300 font-semibold">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Bites</h3>
              <ul className="space-y-3">
                {menu.bites.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-white/10 py-3">
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-sm text-blue-200/80">{item.desc}</p>
                    </div>
                    <span className="text-blue-300 font-semibold">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
