'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Save } from 'lucide-react'

type T = { id: string; author: string; role: string; content: string; order_index: number }

export default function AdminTestimonials() {
  const [items, setItems] = useState<T[]>([])
  const [form, setForm] = useState({ author: '', role: '', content: '' })
  const [msg, setMsg] = useState('')

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('testimonials').select('*').order('order_index')
    setItems(data || [])
  }

  useEffect(() => { load() }, [])

  async function add() {
    if (!form.author || !form.content) return
    const supabase = createClient()
    await supabase.from('testimonials').insert({ ...form, order_index: items.length })
    setForm({ author: '', role: '', content: '' }); load()
  }

  async function update(id: string, author: string, role: string, content: string) {
    const supabase = createClient()
    await supabase.from('testimonials').update({ author, role, content }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function remove(id: string) {
    if (!confirm('Delete this testimonial?')) return
    const supabase = createClient()
    await supabase.from('testimonials').delete().eq('id', id); load()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-400 text-sm mt-1">Guest reviews shown on the home page</p>
      </div>
      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      <div className="space-y-4 mb-8">
        {items.map(item => <TestimonialItem key={item.id} item={item} onSave={update} onDelete={remove} />)}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Add Testimonial</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div><label className={lbl}>Guest Name</label><input value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} className={inp} /></div>
            <div><label className={lbl}>Role / Location</label><input value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} placeholder="Nature Photographer" className={inp} /></div>
          </div>
          <div><label className={lbl}>Review Text</label><textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={3} className={inp + ' resize-none'} /></div>
          <button onClick={add} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
            <Plus size={15} /> Add Testimonial
          </button>
        </div>
      </div>
    </div>
  )
}

function TestimonialItem({ item, onSave, onDelete }: { item: T; onSave: any; onDelete: any }) {
  const [author, setAuthor] = useState(item.author)
  const [role, setRole] = useState(item.role || '')
  const [content, setContent] = useState(item.content)
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div><label className={lbl}>Name</label><input value={author} onChange={e => setAuthor(e.target.value)} className={inp} /></div>
        <div><label className={lbl}>Role</label><input value={role} onChange={e => setRole(e.target.value)} className={inp} /></div>
      </div>
      <div><label className={lbl}>Review</label><textarea value={content} onChange={e => setContent(e.target.value)} rows={3} className={inp + ' resize-none'} /></div>
      <div className="flex gap-3">
        <button onClick={() => onSave(item.id, author, role, content)} className="flex items-center gap-1.5 px-4 py-2 bg-[#0A2F1F] text-white text-xs rounded hover:bg-[#0A2F1F]/80 transition"><Save size={13} /> Save</button>
        <button onClick={() => onDelete(item.id)} className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs rounded hover:bg-red-100 transition"><Trash2 size={13} /> Delete</button>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
