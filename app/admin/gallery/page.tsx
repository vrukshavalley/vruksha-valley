'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Save } from 'lucide-react'

type G = { id: string; title: string; images: string[]; order_index: number }

export default function AdminGallery() {
  const [items, setItems] = useState<G[]>([])
  const [form, setForm] = useState({ title: '', images: '' })
  const [msg, setMsg] = useState('')

  async function load() {
    const { data } = await createClient().from('gallery_categories').select('*').order('order_index')
    setItems(data || [])
  }

  useEffect(() => { load() }, [])

  async function add() {
    if (!form.title) return
    const supabase = createClient()
    await supabase.from('gallery_categories').insert({
      title: form.title,
      images: form.images.split(',').map(s => s.trim()).filter(Boolean),
      order_index: items.length,
    })
    setForm({ title: '', images: '' }); load()
  }

  async function update(id: string, title: string, images: string) {
    await createClient().from('gallery_categories').update({
      title,
      images: images.split(',').map(s => s.trim()).filter(Boolean),
    }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function remove(id: string) {
    if (!confirm('Delete this gallery category?')) return
    await createClient().from('gallery_categories').delete().eq('id', id); load()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
        <p className="text-gray-400 text-sm mt-1">Manage gallery categories and their image paths</p>
      </div>
      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      <div className="space-y-4 mb-8">
        {items.map(item => <GalleryItem key={item.id} item={item} onSave={update} onDelete={remove} />)}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Add Gallery Category</h3>
        <div className="space-y-3">
          <div>
            <label className={lbl}>Category Title</label>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Swimming Pool" className={inp} />
          </div>
          <div>
            <label className={lbl}>Image Paths (comma separated)</label>
            <textarea value={form.images} onChange={e => setForm(f => ({ ...f, images: e.target.value }))} rows={3} className={inp + ' resize-none'} placeholder="/gallery/vruksha-pool/vruksha-pool-1.webp, /gallery/vruksha-pool/vruksha-pool-2.webp" />
          </div>
          <button onClick={add} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
            <Plus size={15} /> Add Category
          </button>
        </div>
      </div>
    </div>
  )
}

function GalleryItem({ item, onSave, onDelete }: { item: G; onSave: any; onDelete: any }) {
  const [title, setTitle] = useState(item.title)
  const [images, setImages] = useState((item.images || []).join(', '))
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 space-y-3">
      <div>
        <label className={lbl}>Category Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className={inp} />
      </div>
      <div>
        <label className={lbl}>Image Paths (comma separated)</label>
        <textarea value={images} onChange={e => setImages(e.target.value)} rows={3} className={inp + ' resize-none'} />
      </div>
      <div className="flex gap-3">
        <button onClick={() => onSave(item.id, title, images)} className="flex items-center gap-1.5 px-4 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={13} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={13} /> Delete</button>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
