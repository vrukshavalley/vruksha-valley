'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Save, ChevronDown } from 'lucide-react'

const inp = 'w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition'
const lbl = 'block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5'

function ImgPreview({ src }: { src: string }) {
  if (!src) return null
  return <img src={src} alt="" className="mt-2 h-28 w-full object-cover rounded" onError={e => { e.currentTarget.style.display = 'none' }} />
}

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

export default function AdminAbout() {
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
        <h1 className="text-2xl font-bold text-gray-800">About Page</h1>
        <p className="text-gray-400 text-sm mt-1">Edit every section of the About page in order</p>
      </div>

      {msg && <div className="px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      {/* 1 — Hero */}
      <AccordionSection title="1. Hero" sub="Full-screen banner image and 'Our Story' heading" defaultOpen>
        <div>
          <label className={lbl}>Hero Image URL</label>
          <input value={s.about_page_hero_img || ''} onChange={e => set('about_page_hero_img', e.target.value)} placeholder="https://images.unsplash.com/..." className={inp} />
          <ImgPreview src={s.about_page_hero_img || 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400'} />
        </div>
        <div><label className={lbl}>Hero Heading (e.g. Our Story)</label><input value={s.about_page_hero_h1 || ''} onChange={e => set('about_page_hero_h1', e.target.value)} placeholder="Our Story" className={inp} /></div>
        <button onClick={() => saveKeys(['about_page_hero_img','about_page_hero_h1'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Save size={14} /> Save Hero</button>
      </AccordionSection>

      {/* 2 — Description */}
      <AccordionSection title="2. Description" sub="Label, main heading and two paragraphs below the hero">
        <div><label className={lbl}>Label (e.g. Rooted in Nature)</label><input value={s.about_page_rooted_label || ''} onChange={e => set('about_page_rooted_label', e.target.value)} placeholder="Rooted in Nature" className={inp} /></div>
        <div><label className={lbl}>Section Heading</label><textarea value={s.about_page_section_heading || ''} onChange={e => set('about_page_section_heading', e.target.value)} rows={2} className={inp + ' resize-none'} placeholder="Where the misty mountains of Kalasa meet the warmth of Malnad hospitality." /></div>
        <div><label className={lbl}>Paragraph 1</label><textarea value={s.about_page_p1 || ''} onChange={e => set('about_page_p1', e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
        <div><label className={lbl}>Paragraph 2</label><textarea value={s.about_page_p2 || ''} onChange={e => set('about_page_p2', e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
        <button onClick={() => saveKeys(['about_page_rooted_label','about_page_section_heading','about_page_p1','about_page_p2'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Save size={14} /> Save Description</button>
      </AccordionSection>

      {/* 3 — Sustainable Luxury */}
      <AccordionSection title="3. Sustainable Luxury" sub="Side image, heading, description and 3 bullet points">
        <div>
          <label className={lbl}>Side Image URL</label>
          <input value={s.about_page_side_img || ''} onChange={e => set('about_page_side_img', e.target.value)} placeholder="https://images.unsplash.com/..." className={inp} />
          <ImgPreview src={s.about_page_side_img || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400'} />
        </div>
        <div><label className={lbl}>Heading (e.g. Sustainable Luxury.)</label><input value={s.about_page_sustain_h || ''} onChange={e => set('about_page_sustain_h', e.target.value)} placeholder="Sustainable Luxury." className={inp} /></div>
        <div><label className={lbl}>Description</label><textarea value={s.about_page_sustain_desc || ''} onChange={e => set('about_page_sustain_desc', e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
        <div><label className={lbl}>Bullet 1</label><input value={s.about_page_bullet_1 || ''} onChange={e => set('about_page_bullet_1', e.target.value)} placeholder="800m from the majestic Soormane Falls." className={inp} /></div>
        <div><label className={lbl}>Bullet 2</label><input value={s.about_page_bullet_2 || ''} onChange={e => set('about_page_bullet_2', e.target.value)} placeholder="Gateway to Netravati Peak..." className={inp} /></div>
        <div><label className={lbl}>Bullet 3</label><input value={s.about_page_bullet_3 || ''} onChange={e => set('about_page_bullet_3', e.target.value)} placeholder="Authentic Malnad Cuisine & Coffee Estate tours." className={inp} /></div>
        <button onClick={() => saveKeys(['about_page_side_img','about_page_sustain_h','about_page_sustain_desc','about_page_bullet_1','about_page_bullet_2','about_page_bullet_3'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Save size={14} /> Save Sustainability</button>
      </AccordionSection>

      {/* 4 — CTA */}
      <AccordionSection title="4. Call to Action" sub="The dark green banner at the bottom of the About page">
        <div><label className={lbl}>Heading</label><input value={s.about_page_cta_h || ''} onChange={e => set('about_page_cta_h', e.target.value)} placeholder="Experience the Silence." className={inp} /></div>
        <div><label className={lbl}>Sub-text</label><textarea value={s.about_page_cta_sub || ''} onChange={e => set('about_page_cta_sub', e.target.value)} rows={2} className={inp + ' resize-none'} placeholder="Your journey into the heart of the Western Ghats begins here." /></div>
        <button onClick={() => saveKeys(['about_page_cta_h','about_page_cta_sub'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Save size={14} /> Save CTA</button>
      </AccordionSection>
    </div>
  )
}
