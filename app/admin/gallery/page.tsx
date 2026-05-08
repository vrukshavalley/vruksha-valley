'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Save, Trash2 } from 'lucide-react'
import ImageUpload from '../_components/ImageUpload'

const inp = 'w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition'
const lbl = 'block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5'

type Category = { id: string; title: string; images: string[]; order_index: number }

export default function AdminGallery() {
  const [cats, setCats]       = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg]         = useState('')
  const [editing, setEditing] = useState<string | null>(null)
  const [forms, setForms]     = useState<Record<string, { title: string; images: string }>>({})

  async function load() {
    const { data } = await createClient().from('gallery_categories').select('*').order('order_index')
    setCats(data || [])
    const f: Record<string, { title: string; images: string }> = {}
    ;(data || []).forEach(c => { f[c.id] = { title: c.title, images: (c.images || []).join('\n') } })
    setForms(f)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  function setField(id: string, key: 'title' | 'images', val: string) {
    setForms(f => ({ ...f, [id]: { ...f[id], [key]: val } }))
  }

  async function save(cat: Category) {
    const f = forms[cat.id]
    const images = f.images.split('\n').map(u => u.trim()).filter(Boolean)
    await createClient().from('gallery_categories').update({ title: f.title, images }).eq('id', cat.id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
    load()
  }

  async function del(id: string) {
    if (!confirm('Delete this category and all its photos?')) return
    await createClient().from('gallery_categories').delete().eq('id', id)
    setEditing(null)
    load()
  }

  async function addNew() {
    const maxOrder = cats.reduce((max, c) => Math.max(max, c.order_index), -1) + 1
    const { data } = await createClient()
      .from('gallery_categories')
      .insert({ title: 'New Category', images: [], order_index: maxOrder })
      .select()
      .single()
    if (data) { await load(); setEditing(data.id) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gallery</h1>
          <p className="text-gray-400 text-sm mt-1">Photo categories shown on the Gallery page</p>
        </div>
        <button onClick={addNew} className="flex items-center gap-2 px-4 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
          <Plus size={16} /> New Category
        </button>
      </div>

      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      {loading ? (
        <div className="p-12 text-center text-gray-400">Loading...</div>
      ) : cats.length === 0 ? (
        <div className="p-12 text-center text-gray-400">
          No categories yet.{' '}
          <button onClick={addNew} className="text-[#0A2F1F] underline">Add one</button>
        </div>
      ) : (
        <div className="space-y-3">
          {cats.map(cat => (
            <div key={cat.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setEditing(editing === cat.id ? null : cat.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {cat.images[0] && (
                    <img src={cat.images[0]} alt="" className="h-10 w-14 object-cover rounded shrink-0" onError={e => { e.currentTarget.style.display = 'none' }} />
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-sm">{cat.title}</p>
                    <p className="text-gray-400 text-xs">{(cat.images || []).length} image{(cat.images || []).length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-xs shrink-0 ml-4">{editing === cat.id ? 'Close ▲' : 'Edit ▼'}</span>
              </button>

              {editing === cat.id && forms[cat.id] && (
                <div className="px-4 pb-5 border-t border-gray-100 pt-4 space-y-4">
                  <div>
                    <label className={lbl}>Category Title</label>
                    <input
                      value={forms[cat.id].title}
                      onChange={e => setField(cat.id, 'title', e.target.value)}
                      className={inp}
                    />
                  </div>
                  <div>
                    <label className={lbl}>Image URLs — one per line</label>
                    <textarea
                      value={forms[cat.id].images}
                      onChange={e => setField(cat.id, 'images', e.target.value)}
                      rows={7}
                      className={inp + ' resize-none font-mono text-xs'}
                      placeholder={'/gallery/cottage/image-1.webp\n/gallery/cottage/image-2.webp'}
                    />
                    <div className="mt-1.5">
                      <ImageUpload
                        folder="gallery"
                        onUpload={url => {
                          const cur = forms[cat.id]?.images || ''
                          setField(cat.id, 'images', cur.trim() ? cur.trim() + '\n' + url : url)
                        }}
                      />
                    </div>
                  </div>
                  {forms[cat.id].images.trim() && (
                    <div className="flex gap-2 flex-wrap">
                      {forms[cat.id].images.split('\n').map(u => u.trim()).filter(Boolean).slice(0, 8).map((url, i) => (
                        <img key={i} src={url} alt="" className="h-16 w-20 object-cover rounded" onError={e => { e.currentTarget.style.display = 'none' }} />
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button onClick={() => save(cat)} className="flex items-center gap-2 px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded">
                      <Save size={14} /> Save
                    </button>
                    <button onClick={() => del(cat.id)} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-sm rounded hover:bg-red-100 transition">
                      <Trash2 size={14} /> Delete Category
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
