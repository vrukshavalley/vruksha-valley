'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Save, Plus, Trash2, ChevronDown } from 'lucide-react'

type Cottage     = { id: string; name: string; type: string; images: string[]; order_index: number }
type Amenity     = { id: string; icon: string; title: string; description: string; order_index: number }
type Testimonial = { id: string; author: string; role: string; content: string; order_index: number }
type FAQ         = { id: string; question: string; answer: string; order_index: number }

const inp  = 'w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition'
const lbl  = 'block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5'
const ICONS = ['Wind','Waves','Flame','Coffee','Map','Trees','Star','Sun','Mountain','Camera','Heart','Wifi']

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

function CottageItem({ item, onSave, onDelete }: { item: Cottage; onSave: (id: string, n: string, t: string, imgs: string) => void; onDelete: (id: string) => void }) {
  const [name, setName]     = useState(item.name)
  const [type, setType]     = useState(item.type || '')
  const [imgs, setImgs]     = useState((item.images || []).join(', '))
  const first = (item.images || [])[0]
  return (
    <div className="border border-gray-100 rounded-lg p-4 space-y-3">
      {first && <img src={first} alt="" className="h-28 w-full object-cover rounded" />}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={lbl}>Name</label><input value={name} onChange={e => setName(e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Type</label><input value={type} onChange={e => setType(e.target.value)} className={inp} /></div>
      </div>
      <div><label className={lbl}>Image Paths (comma-separated)</label><textarea value={imgs} onChange={e => setImgs(e.target.value)} rows={2} className={inp + ' resize-none'} /></div>
      <div className="flex gap-2">
        <button onClick={() => onSave(item.id, name, type, imgs)} className="flex items-center gap-1.5 px-3 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={12} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={12} /> Delete</button>
      </div>
    </div>
  )
}

function AmenityItem({ item, onSave, onDelete }: { item: Amenity; onSave: (id: string, icon: string, title: string, desc: string) => void; onDelete: (id: string) => void }) {
  const [icon, setIcon] = useState(item.icon)
  const [title, setTitle] = useState(item.title)
  const [desc, setDesc]   = useState(item.description)
  return (
    <div className="border border-gray-100 rounded-lg p-4 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={lbl}>Icon</label>
          <select value={icon} onChange={e => setIcon(e.target.value)} className={inp}>
            {ICONS.map(i => <option key={i}>{i}</option>)}
          </select>
        </div>
        <div><label className={lbl}>Title</label><input value={title} onChange={e => setTitle(e.target.value)} className={inp} /></div>
      </div>
      <div><label className={lbl}>Description</label><input value={desc} onChange={e => setDesc(e.target.value)} className={inp} /></div>
      <div className="flex gap-2">
        <button onClick={() => onSave(item.id, icon, title, desc)} className="flex items-center gap-1.5 px-3 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={12} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={12} /> Delete</button>
      </div>
    </div>
  )
}

function TestimonialItem({ item, onSave, onDelete }: { item: Testimonial; onSave: (id: string, a: string, r: string, c: string) => void; onDelete: (id: string) => void }) {
  const [author, setAuthor]   = useState(item.author)
  const [role, setRole]       = useState(item.role || '')
  const [content, setContent] = useState(item.content)
  return (
    <div className="border border-gray-100 rounded-lg p-4 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={lbl}>Guest Name</label><input value={author} onChange={e => setAuthor(e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Role / Location</label><input value={role} onChange={e => setRole(e.target.value)} className={inp} /></div>
      </div>
      <div><label className={lbl}>Review</label><textarea value={content} onChange={e => setContent(e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
      <div className="flex gap-2">
        <button onClick={() => onSave(item.id, author, role, content)} className="flex items-center gap-1.5 px-3 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={12} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={12} /> Delete</button>
      </div>
    </div>
  )
}

function FAQItem({ item, onSave, onDelete }: { item: FAQ; onSave: (id: string, q: string, a: string) => void; onDelete: (id: string) => void }) {
  const [q, setQ] = useState(item.question)
  const [a, setA] = useState(item.answer)
  return (
    <div className="border border-gray-100 rounded-lg p-4 space-y-3">
      <div><label className={lbl}>Question</label><input value={q} onChange={e => setQ(e.target.value)} className={inp} /></div>
      <div><label className={lbl}>Answer</label><textarea value={a} onChange={e => setA(e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
      <div className="flex gap-2">
        <button onClick={() => onSave(item.id, q, a)} className="flex items-center gap-1.5 px-3 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={12} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={12} /> Delete</button>
      </div>
    </div>
  )
}

export default function AdminHome() {
  const [s, setS]           = useState<Record<string, string>>({})
  const [msg, setMsg]       = useState('')
  const [cottages, setCottages]         = useState<Cottage[]>([])
  const [amenities, setAmenities]       = useState<Amenity[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [faqs, setFaqs]                 = useState<FAQ[]>([])

  const [newCottage,     setNewCottage]     = useState({ name: '', type: '', images: '' })
  const [newAmenity,     setNewAmenity]     = useState({ icon: 'Star', title: '', description: '' })
  const [newTestimonial, setNewTestimonial] = useState({ author: '', role: '', content: '' })
  const [newFaq,         setNewFaq]         = useState({ question: '', answer: '' })

  useEffect(() => { loadAll() }, [])

  async function loadAll() {
    const sb = createClient()
    const [{ data: settings }, { data: c }, { data: am }, { data: tm }, { data: fq }] = await Promise.all([
      sb.from('site_settings').select('key,value'),
      sb.from('cottages').select('*').order('order_index'),
      sb.from('amenities').select('*').order('order_index'),
      sb.from('testimonials').select('*').order('order_index'),
      sb.from('faqs').select('*').order('order_index'),
    ])
    const map: Record<string, string> = {}
    settings?.forEach(r => { map[r.key] = r.value || '' })
    setS(map)
    setCottages(c || [])
    setAmenities(am || [])
    setTestimonials(tm || [])
    setFaqs(fq || [])
  }

  function set(k: string, v: string) { setS(prev => ({ ...prev, [k]: v })) }

  async function saveKeys(keys: string[]) {
    const upserts = keys.map(k => ({ key: k, value: s[k] || '', updated_at: new Date().toISOString() }))
    await createClient().from('site_settings').upsert(upserts, { onConflict: 'key' })
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function saveCottage(id: string, name: string, type: string, imgs: string) {
    await createClient().from('cottages').update({ name, type, images: imgs.split(',').map(x => x.trim()).filter(Boolean) }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000); loadAll()
  }
  async function deleteCottage(id: string) {
    if (!confirm('Delete cottage?')) return
    await createClient().from('cottages').delete().eq('id', id); loadAll()
  }
  async function addCottage() {
    if (!newCottage.name) return
    await createClient().from('cottages').insert({ name: newCottage.name, type: newCottage.type, images: newCottage.images.split(',').map(x => x.trim()).filter(Boolean), order_index: cottages.length })
    setNewCottage({ name: '', type: '', images: '' }); loadAll()
  }

  async function saveAmenity(id: string, icon: string, title: string, desc: string) {
    await createClient().from('amenities').update({ icon, title, description: desc }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000); loadAll()
  }
  async function deleteAmenity(id: string) {
    if (!confirm('Delete amenity?')) return
    await createClient().from('amenities').delete().eq('id', id); loadAll()
  }
  async function addAmenity() {
    if (!newAmenity.title) return
    await createClient().from('amenities').insert({ ...newAmenity, order_index: amenities.length })
    setNewAmenity({ icon: 'Star', title: '', description: '' }); loadAll()
  }

  async function saveTestimonial(id: string, author: string, role: string, content: string) {
    await createClient().from('testimonials').update({ author, role, content }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000); loadAll()
  }
  async function deleteTestimonial(id: string) {
    if (!confirm('Delete testimonial?')) return
    await createClient().from('testimonials').delete().eq('id', id); loadAll()
  }
  async function addTestimonial() {
    if (!newTestimonial.author || !newTestimonial.content) return
    await createClient().from('testimonials').insert({ ...newTestimonial, order_index: testimonials.length })
    setNewTestimonial({ author: '', role: '', content: '' }); loadAll()
  }

  async function saveFaq(id: string, question: string, answer: string) {
    await createClient().from('faqs').update({ question, answer }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000); loadAll()
  }
  async function deleteFaq(id: string) {
    if (!confirm('Delete FAQ?')) return
    await createClient().from('faqs').delete().eq('id', id); loadAll()
  }
  async function addFaq() {
    if (!newFaq.question || !newFaq.answer) return
    await createClient().from('faqs').insert({ ...newFaq, order_index: faqs.length })
    setNewFaq({ question: '', answer: '' }); loadAll()
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
        <p className="text-gray-400 text-sm mt-1">Edit every section of the home page in order</p>
      </div>

      {msg && <div className="px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      {/* 1 — Hero */}
      <AccordionSection title="1. Hero" sub="Full-screen image and headline at the very top" defaultOpen>
        <div>
          <label className={lbl}>Hero Image (path or URL)</label>
          <input value={s.hero_image || ''} onChange={e => set('hero_image', e.target.value)} placeholder="/hero.webp" className={inp} />
          <ImgPreview src={s.hero_image || '/hero.webp'} />
        </div>
        <div><label className={lbl}>Tagline (small text above heading)</label><input value={s.hero_tagline || ''} onChange={e => set('hero_tagline', e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Heading</label><textarea value={s.hero_heading || ''} onChange={e => set('hero_heading', e.target.value)} rows={2} className={inp + ' resize-none'} /></div>
        <button onClick={() => saveKeys(['hero_image','hero_tagline','hero_heading'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded">
          <Save size={14} /> Save Hero
        </button>
      </AccordionSection>

      {/* 2 — About */}
      <AccordionSection title="2. About Section" sub="The 'Our Story' block on the home page">
        <div><label className={lbl}>Label (e.g. Our Story)</label><input value={s.about_label || ''} onChange={e => set('about_label', e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Heading</label><input value={s.about_heading || ''} onChange={e => set('about_heading', e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Paragraph 1</label><textarea value={s.about_paragraph_1 || ''} onChange={e => set('about_paragraph_1', e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
        <div><label className={lbl}>Paragraph 2</label><textarea value={s.about_paragraph_2 || ''} onChange={e => set('about_paragraph_2', e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
        <button onClick={() => saveKeys(['about_label','about_heading','about_paragraph_1','about_paragraph_2'])} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded">
          <Save size={14} /> Save About
        </button>
      </AccordionSection>

      {/* 3 — Rooms */}
      <AccordionSection title="3. Rooms" sub="The cottage cards on the home page">
        <div className="space-y-4">
          {cottages.map(c => <CottageItem key={c.id} item={c} onSave={saveCottage} onDelete={deleteCottage} />)}
        </div>
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Add Room</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><label className={lbl}>Name</label><input value={newCottage.name} onChange={e => setNewCottage(f => ({ ...f, name: e.target.value }))} placeholder="Parijatha" className={inp} /></div>
            <div><label className={lbl}>Type</label><input value={newCottage.type} onChange={e => setNewCottage(f => ({ ...f, type: e.target.value }))} placeholder="Signature Cottage" className={inp} /></div>
          </div>
          <div><label className={lbl}>Image Paths (comma-separated)</label><textarea value={newCottage.images} onChange={e => setNewCottage(f => ({ ...f, images: e.target.value }))} rows={2} className={inp + ' resize-none'} placeholder="/rooms/vruksha-parijatha/1.webp, ..." /></div>
          <button onClick={addCottage} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Plus size={14} /> Add Room</button>
        </div>
      </AccordionSection>

      {/* 4 — Amenities */}
      <AccordionSection title="4. Amenities" sub="The 'Beyond The Stay' feature cards">
        <div className="space-y-4">
          {amenities.map(a => <AmenityItem key={a.id} item={a} onSave={saveAmenity} onDelete={deleteAmenity} />)}
        </div>
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Add Amenity</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={lbl}>Icon</label>
              <select value={newAmenity.icon} onChange={e => setNewAmenity(f => ({ ...f, icon: e.target.value }))} className={inp}>
                {ICONS.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div><label className={lbl}>Title</label><input value={newAmenity.title} onChange={e => setNewAmenity(f => ({ ...f, title: e.target.value }))} placeholder="Pure Serenity" className={inp} /></div>
          </div>
          <div><label className={lbl}>Description</label><input value={newAmenity.description} onChange={e => setNewAmenity(f => ({ ...f, description: e.target.value }))} placeholder="Zero noise pollution..." className={inp} /></div>
          <button onClick={addAmenity} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Plus size={14} /> Add Amenity</button>
        </div>
      </AccordionSection>

      {/* 5 — Testimonials */}
      <AccordionSection title="5. Testimonials" sub="Guest reviews shown in the carousel">
        <div className="space-y-4">
          {testimonials.map(t => <TestimonialItem key={t.id} item={t} onSave={saveTestimonial} onDelete={deleteTestimonial} />)}
        </div>
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Add Testimonial</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><label className={lbl}>Guest Name</label><input value={newTestimonial.author} onChange={e => setNewTestimonial(f => ({ ...f, author: e.target.value }))} className={inp} /></div>
            <div><label className={lbl}>Role / Location</label><input value={newTestimonial.role} onChange={e => setNewTestimonial(f => ({ ...f, role: e.target.value }))} placeholder="Nature Photographer" className={inp} /></div>
          </div>
          <div><label className={lbl}>Review</label><textarea value={newTestimonial.content} onChange={e => setNewTestimonial(f => ({ ...f, content: e.target.value }))} rows={3} className={inp + ' resize-none'} /></div>
          <button onClick={addTestimonial} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Plus size={14} /> Add Testimonial</button>
        </div>
      </AccordionSection>

      {/* 6 — FAQs */}
      <AccordionSection title="6. FAQs" sub="Questions shown at the bottom of the home page">
        <div className="space-y-4">
          {faqs.map(f => <FAQItem key={f.id} item={f} onSave={saveFaq} onDelete={deleteFaq} />)}
        </div>
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Add FAQ</p>
          <div><label className={lbl}>Question</label><input value={newFaq.question} onChange={e => setNewFaq(f => ({ ...f, question: e.target.value }))} className={inp} /></div>
          <div><label className={lbl}>Answer</label><textarea value={newFaq.answer} onChange={e => setNewFaq(f => ({ ...f, answer: e.target.value }))} rows={3} className={inp + ' resize-none'} /></div>
          <button onClick={addFaq} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded"><Plus size={14} /> Add FAQ</button>
        </div>
      </AccordionSection>
    </div>
  )
}
