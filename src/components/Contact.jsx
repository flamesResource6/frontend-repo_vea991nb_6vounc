import { useState } from 'react'

function Contact(){
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus({ ok: true, message: 'Thanks for reaching out! We\'ll get back to you.' })
        setForm({ name:'', email:'', message:'' })
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
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
        <form onSubmit={submit} className="grid grid-cols-1 gap-4 bg-slate-800/50 border border-white/10 p-6 rounded-xl">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-white/50" rows="4" required />
          <button disabled={loading} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors">{loading ? 'Sending...' : 'Send Message'}</button>
          {status && (
            <p className={`text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
