'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Save } from 'lucide-react'

type C = { id: string; name: string; type: string; images: string[]; order_index: number }

export default function AdminCottages() {
  const [items, setItems] = useState<C[]>([])
  const [form, setForm] = useState({ name: '', type: '', images: '' })
  const [msg, setMsg] = useState('')

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('cottages').select('*').order('order_index')
    setItems(data || [])
  }

  useEffect(() => { load() }, [])

  async function add() {
    if (!form.name) return
    const supabase = createClient()
    await supabase.from('cottages').insert({ name: form.name, type: form.type, images: form.images.split(',').map(s => s.trim()).filter(Boolean), order_index: items.length })
    setForm({ name: '', type: '', images: '' }); load()
  }

  async function update(id: string, name: string, type: string, images: string) {
    const supabase = createClient()
    await supabase.from('cottages').update({ name, type, images: images.split(',').map(s => s.trim()).filter(Boolean) }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function remove(id: string) {
    if (!confirm('Delete this cottage?')) return
    const supabase = createClient()
    await supabase.from('cottages').delete().eq('id', id); load()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Cottages</h2>
        <p className="text-gray-400 text-sm mt-1">Manage cottage names, types, and image paths</p>
      </div>
      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      <div className="space-y-4 mb-8">
        {items.map(item => <CottageItem key={item.id} item={item} onSave={update} onDelete={remove} />)}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Add Cottage</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><label className={lbl}>Cottage Name</label><input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Parijatha" className={inp} /></div>
            <div><label className={lbl}>Type / Category</label><input value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} placeholder="Signature Cottage" className={inp} /></div>
          </div>
          <div><label className={lbl}>Image Paths (comma separated)</label><textarea value={form.images} onChange={e => setForm(f => ({ ...f, images: e.target.value }))} rows={2} className={inp + ' resize-none'} placeholder="/rooms/vruksha-parijatha/1.webp, /rooms/vruksha-parijatha/2.webp" /></div>
          <button onClick={add} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
            <Plus size={15} /> Add Cottage
          </button>
        </div>
      </div>
    </div>
  )
}

function CottageItem({ item, onSave, onDelete }: { item: C; onSave: any; onDelete: any }) {
  const [name, setName] = useState(item.name)
  const [type, setType] = useState(item.type || '')
  const [images, setImages] = useState((item.images || []).join(', '))
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label className={lbl}>Name</label><input value={name} onChange={e => setName(e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Type</label><input value={type} onChange={e => setType(e.target.value)} className={inp} /></div>
      </div>
      <div><label className={lbl}>Image Paths</label><textarea value={images} onChange={e => setImages(e.target.value)} rows={2} className={inp + ' resize-none'} /></div>
      <div className="flex gap-3">
        <button onClick={() => onSave(item.id, name, type, images)} className="flex items-center gap-1.5 px-4 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={13} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={13} /> Delete</button>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
