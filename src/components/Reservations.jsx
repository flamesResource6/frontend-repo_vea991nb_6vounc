import { useState } from 'react'

function Reservations(){
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', party_size: 2, notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus({ ok: true, message: 'Reservation requested! We\'ll email you shortly.' })
        setForm({ name:'', email:'', phone:'', date:'', time:'', party_size: 2, notes:'' })
      } else {
        setStatus({ ok: false, message: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="reservations" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Reservations</h2>
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/50 border border-white/10 p-6 rounded-xl">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <div className="grid grid-cols-2 gap-2">
            <input type="date" name="date" value={form.date} onChange={handleChange} className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
            <input type="time" name="time" value={form.time} onChange={handleChange} className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          </div>
          <input type="number" min="1" max="20" name="party_size" value={form.party_size} onChange={handleChange} placeholder="Party Size" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (optional)" className="sm:col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" rows="3" />
          <button disabled={loading} className="sm:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors">{loading ? 'Submitting...' : 'Request Reservation'}</button>
          {status && (
            <p className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Reservations
