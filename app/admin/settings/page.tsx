'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const SETTINGS_KEYS = [
  { section: 'Hero Section', fields: [
    { key: 'hero_headline', label: 'Hero Headline', type: 'text' },
    { key: 'hero_subtext', label: 'Hero Subtext', type: 'text' },
  ]},
  { section: 'About Section', fields: [
    { key: 'about_paragraph_1', label: 'About Paragraph 1', type: 'textarea' },
    { key: 'about_paragraph_2', label: 'About Paragraph 2', type: 'textarea' },
  ]},
  { section: 'Contact Information', fields: [
    { key: 'contact_phone_1', label: 'Phone Number 1', type: 'text' },
    { key: 'contact_phone_2', label: 'Phone Number 2', type: 'text' },
    { key: 'contact_whatsapp', label: 'WhatsApp Number (with country code, no +)', type: 'text' },
    { key: 'contact_address', label: 'Address', type: 'textarea' },
    { key: 'contact_hours', label: 'Best Time to Call', type: 'text' },
  ]},
]

export default function AdminSettings() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const supabase = createClient()
    supabase.from('site_settings').select('key,value').then(({ data }) => {
      const map: Record<string, string> = {}
      data?.forEach(r => { map[r.key] = r.value || '' })
      setValues(map)
    })
  }, [])

  function set(k: string, v: string) { setValues(prev => ({ ...prev, [k]: v })) }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const supabase = createClient()
    const upserts = Object.entries(values).map(([key, value]) => ({ key, value, updated_at: new Date().toISOString() }))
    const { error } = await supabase.from('site_settings').upsert(upserts, { onConflict: 'key' })
    setSaving(false)
    setMsg(error ? 'Error: ' + error.message : 'All settings saved!')
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Site Settings</h2>
        <p className="text-gray-400 text-sm mt-1">Edit hero text, about section, and contact information</p>
      </div>

      {msg && <div className={`mb-6 px-4 py-3 rounded text-sm font-semibold ${msg.startsWith('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>{msg}</div>}

      <form onSubmit={handleSave} className="space-y-6">
        {SETTINGS_KEYS.map(({ section, fields }) => (
          <div key={section} className="bg-white rounded-lg shadow-sm p-6 space-y-5">
            <h3 className="font-semibold text-gray-700 border-b pb-3">{section}</h3>
            {fields.map(({ key, label, type }) => (
              <div key={key}>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    value={values[key] || ''} onChange={e => set(key, e.target.value)}
                    rows={3} className={inp + ' resize-none'}
                  />
                ) : (
                  <input value={values[key] || ''} onChange={e => set(key, e.target.value)} className={inp} />
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="px-8 py-3 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition disabled:opacity-50">
            {saving ? 'Saving...' : 'Save All Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
