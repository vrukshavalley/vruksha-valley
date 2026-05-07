'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Save } from 'lucide-react'

type A = { id: string; icon: string; title: string; description: string; order_index: number }

const ICONS = ['Wind', 'Waves', 'Flame', 'Coffee', 'Map', 'Trees', 'Star', 'Sun', 'Mountain', 'Camera', 'Heart', 'Wifi']

export default function AdminAmenities() {
  const [items, setItems] = useState<A[]>([])
  const [form, setForm] = useState({ icon: 'Star', title: '', description: '' })
  const [msg, setMsg] = useState('')

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('amenities').select('*').order('order_index')
    setItems(data || [])
  }

  useEffect(() => { load() }, [])

  async function add() {
    if (!form.title || !form.description) return
    const supabase = createClient()
    await supabase.from('amenities').insert({ ...form, order_index: items.length })
    setForm({ icon: 'Star', title: '', description: '' }); load()
  }

  async function update(id: string, icon: string, title: string, description: string) {
    const supabase = createClient()
    await supabase.from('amenities').update({ icon, title, description }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function remove(id: string) {
    if (!confirm('Delete this amenity?')) return
    const supabase = createClient()
    await supabase.from('amenities').delete().eq('id', id); load()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Amenities</h2>
        <p className="text-gray-400 text-sm mt-1">Features shown in the "Beyond The Stay" section</p>
      </div>
      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      <div className="grid grid-cols-2 gap-4 mb-8">
        {items.map(item => <AmenityItem key={item.id} item={item} onSave={update} onDelete={remove} />)}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Add Amenity</h3>
        <div className="space-y-3">
          <div><label className={lbl}>Icon Name (from Lucide)</label>
            <select value={form.icon} onChange={e => setForm(f => ({ ...f, icon: e.target.value }))} className={inp}>
              {ICONS.map(i => <option key={i}>{i}</option>)}
            </select>
          </div>
          <div><label className={lbl}>Title</label><input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Pure Serenity" className={inp} /></div>
          <div><label className={lbl}>Description</label><input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Zero noise pollution..." className={inp} /></div>
          <button onClick={add} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
            <Plus size={15} /> Add Amenity
          </button>
        </div>
      </div>
    </div>
  )
}

function AmenityItem({ item, onSave, onDelete }: { item: A; onSave: any; onDelete: any }) {
  const [icon, setIcon] = useState(item.icon)
  const [title, setTitle] = useState(item.title)
  const [desc, setDesc] = useState(item.description)
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 space-y-3">
      <div><label className={lbl}>Icon</label><input value={icon} onChange={e => setIcon(e.target.value)} className={inp} /></div>
      <div><label className={lbl}>Title</label><input value={title} onChange={e => setTitle(e.target.value)} className={inp} /></div>
      <div><label className={lbl}>Description</label><input value={desc} onChange={e => setDesc(e.target.value)} className={inp} /></div>
      <div className="flex gap-3">
        <button onClick={() => onSave(item.id, icon, title, desc)} className="flex items-center gap-1.5 px-4 py-2 bg-[#0A2F1F] text-white text-xs rounded"><Save size={13} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs rounded"><Trash2 size={13} /> Delete</button>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
