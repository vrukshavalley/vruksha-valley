'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const SECTIONS = [
  { section: 'Hero Section', fields: [
    { key: 'hero_tagline', label: 'Hero Tagline (small text above heading)', type: 'text' },
    { key: 'hero_heading', label: 'Hero Heading (main H1)', type: 'textarea' },
  ]},
  { section: 'About Section (Home Page)', fields: [
    { key: 'about_label', label: 'About Label (e.g. "Our Story")', type: 'text' },
    { key: 'about_heading', label: 'About Heading', type: 'text' },
    { key: 'about_paragraph_1', label: 'About Paragraph 1', type: 'textarea' },
    { key: 'about_paragraph_2', label: 'About Paragraph 2', type: 'textarea' },
  ]},
  { section: 'Contact Information', fields: [
    { key: 'contact_phone_1', label: 'Phone Number 1', type: 'text' },
    { key: 'contact_phone_2', label: 'Phone Number 2', type: 'text' },
    { key: 'contact_whatsapp', label: 'WhatsApp Number (digits only, e.g. 918217764481)', type: 'text' },
    { key: 'contact_email', label: 'Email Address', type: 'text' },
    { key: 'contact_address', label: 'Address', type: 'textarea' },
    { key: 'contact_hours', label: 'Best Time to Call', type: 'text' },
  ]},
  { section: 'Social Media & Footer', fields: [
    { key: 'social_instagram', label: 'Instagram URL', type: 'text' },
    { key: 'social_youtube', label: 'YouTube URL', type: 'text' },
    { key: 'social_facebook', label: 'Facebook URL', type: 'text' },
    { key: 'footer_tagline', label: 'Footer Tagline', type: 'text' },
  ]},
]

export default function AdminSettings() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    createClient().from('site_settings').select('key,value').then(({ data }) => {
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
        <p className="text-gray-400 text-sm mt-1">Edit hero text, about section, contact info, and social links</p>
      </div>

      {msg && <div className={`mb-6 px-4 py-3 rounded text-sm font-semibold ${msg.startsWith('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>{msg}</div>}

      <form onSubmit={handleSave} className="space-y-6">
        {SECTIONS.map(({ section, fields }) => (
          <div key={section} className="bg-white rounded-lg shadow-sm p-6 space-y-5">
            <h3 className="font-semibold text-gray-700 border-b pb-3">{section}</h3>
            {fields.map(({ key, label, type }) => (
              <div key={key}>
                <label className={lbl}>{label}</label>
                {type === 'textarea' ? (
                  <textarea value={values[key] || ''} onChange={e => set(key, e.target.value)} rows={3} className={inp + ' resize-none'} />
                ) : (
                  <input value={values[key] || ''} onChange={e => set(key, e.target.value)} className={inp} />
                )}
              </div>
            ))}
          </div>
        ))}

        <button type="submit" disabled={saving} className="px-8 py-3 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition disabled:opacity-50">
          {saving ? 'Saving...' : 'Save All Settings'}
        </button>
      </form>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
