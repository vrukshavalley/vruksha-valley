'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-[#0A2F1F] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-[#0A2F1F] mb-1">Vruksha Valley</h1>
          <p className="text-sm text-gray-400 uppercase tracking-widest">Admin Panel</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</label>
            <input
              type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition"
              placeholder="admin@vrukshavalley.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Password</label>
            <input
              type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="w-full bg-[#0A2F1F] text-white py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-[#0A2F1F]/80 transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
