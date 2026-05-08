'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Save, ChevronDown } from 'lucide-react'

const inp = 'w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition'
const lbl = 'block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5'

function AccordionSection({ title, sub, children, defaultOpen = false }: { title: string; sub: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition">
        <div>
          <p className="font-bold text-gray-800">{title}</p>
          <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
        </div>
        <ChevronDown size={18} className={`text-gray-400 transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5 space-y-4 border-t border-gray-100 pt-5">{children}</div>}
    </div>
  )
}

export default function AdminContact() {
  const [s, setS]     = useState<Record<string, string>>({})
  const [msg, setMsg] = useState('')

  useEffect(() => {
    createClient().from('site_settings').select('key,value').then(({ data }) => {
      const map: Record<string, string> = {}
      data?.forEach(r => { map[r.key] = r.value || '' })
      setS(map)
    })
  }, [])

  function set(k: string, v: string) { setS(prev => ({ ...prev, [k]: v })) }

  async function saveKeys(keys: string[]) {
    const upserts = keys.map(k => ({ key: k, value: s[k] || '', updated_at: new Date().toISOString() }))
    await createClient().from('site_settings').upsert(upserts, { onConflict: 'key' })
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us Page</h1>
        <p className="text-gray-400 text-sm mt-1">Edit contact details, social links, and footer text</p>
      </div>

      {msg && <div className="px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      {/* 1 — Contact Info */}
      <AccordionSection title="1. Contact Information" sub="Address, phones, WhatsApp, email and hours" defaultOpen>
        <div><label className={lbl}>Address</label><textarea value={s.contact_address || ''} onChange={e => set('contact_address', e.target.value)} rows={2} className={inp + ' resize-none'} placeholder="Soormane Falls Road, Guddemakki, Kalasa, Karnataka - 577124" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className={lbl}>Phone 1</label><input value={s.contact_phone_1 || ''} onChange={e => set('contact_phone_1', e.target.value)} placeholder="+91 82177 64481" className={inp} /></div>
          <div><label className={lbl}>Phone 2</label><input value={s.contact_phone_2 || ''} onChange={e => set('contact_phone_2', e.target.value)} placeholder="+91 63643 64481" className={inp} /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className={lbl}>WhatsApp Number (digits only)</label><input value={s.contact_whatsapp || ''} onChange={e => set('contact_whatsapp', e.target.value)} placeholder="918217764481" className={inp} /></div>
          <div><label className={lbl}>Email</label><input value={s.contact_email || ''} onChange={e => set('contact_email', e.target.value)} placeholder="vrukshavalley@gmail.com" className={inp} /></div>
        </div>
        <div><label className={lbl}>Best Time to Call</label><input value={s.contact_hours || ''} onChange={e => set('contact_hours', e.target.value)} placeholder="8:00 AM — 10:00 PM IST" className={inp} /></div>
        <button onClick={() => saveKeys(['contact_address','contact_phone_1','contact_phone_2','contact_whatsapp','contact_email','contact_hours'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded">
          <Save size={14} /> Save Contact Info
        </button>
      </AccordionSection>

      {/* 2 — Social & Footer */}
      <AccordionSection title="2. Social Media & Footer" sub="Instagram, YouTube, Facebook links and footer tagline">
        <div><label className={lbl}>Instagram URL</label><input value={s.social_instagram || ''} onChange={e => set('social_instagram', e.target.value)} placeholder="https://www.instagram.com/vrukshavalley/" className={inp} /></div>
        <div><label className={lbl}>YouTube URL</label><input value={s.social_youtube || ''} onChange={e => set('social_youtube', e.target.value)} placeholder="https://youtube.com/@vrukshavalley" className={inp} /></div>
        <div><label className={lbl}>Facebook URL</label><input value={s.social_facebook || ''} onChange={e => set('social_facebook', e.target.value)} placeholder="https://facebook.com/vrukshavalley" className={inp} /></div>
        <div><label className={lbl}>Footer Tagline</label><input value={s.footer_tagline || ''} onChange={e => set('footer_tagline', e.target.value)} className={inp} /></div>
        <button onClick={() => saveKeys(['social_instagram','social_youtube','social_facebook','footer_tagline'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded">
          <Save size={14} /> Save Social & Footer
        </button>
      </AccordionSection>
    </div>
  )
}
