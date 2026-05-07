'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const PAGES = ['home', 'about', 'contact', 'gallery', 'blog']

type MetaRow = { page: string; title: string; description: string; keywords: string }

export default function AdminMetadata() {
  const [rows, setRows] = useState<Record<string, MetaRow>>({})
  const [active, setActive] = useState('home')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const supabase = createClient()
    supabase.from('page_metadata').select('*').then(({ data }) => {
      const map: Record<string, MetaRow> = {}
      PAGES.forEach(p => { map[p] = { page: p, title: '', description: '', keywords: '' } })
      data?.forEach(r => { map[r.page] = { ...r, keywords: (r.keywords || []).join(', ') } })
      setRows(map)
    })
  }, [])

  function set(k: keyof MetaRow, v: string) { setRows(prev => ({ ...prev, [active]: { ...prev[active], [k]: v } })) }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const supabase = createClient()
    const row = rows[active]
    const { error } = await supabase.from('page_metadata').upsert({
      page: active,
      title: row.title,
      description: row.description,
      keywords: row.keywords.split(',').map(k => k.trim()).filter(Boolean),
    }, { onConflict: 'page' })
    setSaving(false)
    setMsg(error ? 'Error: ' + error.message : 'Saved!')
    setTimeout(() => setMsg(''), 3000)
  }

  const current = rows[active] || { page: active, title: '', description: '', keywords: '' }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Page SEO / Metadata</h2>
        <p className="text-gray-400 text-sm mt-1">Edit title, description, and keywords for each page</p>
      </div>

      <div className="flex gap-2 mb-6">
        {PAGES.map(p => (
          <button key={p} onClick={() => setActive(p)}
            className={`px-4 py-2 rounded text-sm capitalize transition ${active === p ? 'bg-[#0A2F1F] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'}`}>
            {p}
          </button>
        ))}
      </div>

      {msg && <div className={`mb-6 px-4 py-3 rounded text-sm font-semibold ${msg.startsWith('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>{msg}</div>}

      <form onSubmit={handleSave} className="bg-white rounded-lg shadow-sm p-6 space-y-5">
        <h3 className="font-semibold text-gray-700 border-b pb-3 capitalize">{active} Page</h3>
        <div>
          <label className={lbl}>SEO Title <span className="text-gray-300 font-normal normal-case tracking-normal">({(current.title || '').length}/60 chars)</span></label>
          <input value={current.title} onChange={e => set('title', e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Meta Description <span className="text-gray-300 font-normal normal-case tracking-normal">({(current.description || '').length}/160 chars)</span></label>
          <textarea value={current.description} onChange={e => set('description', e.target.value)} rows={3} className={inp + ' resize-none'} />
        </div>
        <div>
          <label className={lbl}>Keywords (comma separated)</label>
          <textarea value={current.keywords} onChange={e => set('keywords', e.target.value)} rows={4} className={inp + ' resize-none'} placeholder="resort in Kalasa, luxury resort Chikmagalur, ..." />
        </div>
        <button type="submit" disabled={saving} className="px-8 py-3 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition disabled:opacity-50">
          {saving ? 'Saving...' : `Save ${active} Page`}
        </button>
      </form>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
