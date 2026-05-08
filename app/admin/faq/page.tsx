'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Save } from 'lucide-react'

type FAQ = { id: string; question: string; answer: string; order_index: number }

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [newQ, setNewQ] = useState('')
  const [newA, setNewA] = useState('')
  const [msg, setMsg] = useState('')

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('faqs').select('*').order('order_index')
    setFaqs(data || [])
  }

  useEffect(() => { load() }, [])

  async function addFAQ() {
    if (!newQ.trim() || !newA.trim()) return
    const supabase = createClient()
    await supabase.from('faqs').insert({ question: newQ, answer: newA, order_index: faqs.length })
    setNewQ(''); setNewA('')
    load()
  }

  async function updateFAQ(id: string, question: string, answer: string) {
    const supabase = createClient()
    await supabase.from('faqs').update({ question, answer }).eq('id', id)
    setMsg('Saved!'); setTimeout(() => setMsg(''), 2000)
  }

  async function deleteFAQ(id: string) {
    if (!confirm('Delete this FAQ?')) return
    const supabase = createClient()
    await supabase.from('faqs').delete().eq('id', id)
    load()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">FAQ Questions</h2>
        <p className="text-gray-400 text-sm mt-1">These appear as expandable dropdowns in Google search results</p>
      </div>

      {msg && <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 text-sm rounded">{msg}</div>}

      <div className="space-y-4 mb-8">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.id} faq={faq} onSave={updateFAQ} onDelete={deleteFAQ} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Add New FAQ</h3>
        <div className="space-y-3">
          <div>
            <label className={lbl}>Question</label>
            <input value={newQ} onChange={e => setNewQ(e.target.value)} className={inp} placeholder="What is the best time to visit?" />
          </div>
          <div>
            <label className={lbl}>Answer</label>
            <textarea value={newA} onChange={e => setNewA(e.target.value)} rows={3} className={inp + ' resize-none'} placeholder="The best time to visit Vruksha Valley is..." />
          </div>
          <button onClick={addFAQ} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
            <Plus size={15} /> Add FAQ
          </button>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ faq, onSave, onDelete }: { faq: FAQ; onSave: any; onDelete: any }) {
  const [q, setQ] = useState(faq.question)
  const [a, setA] = useState(faq.answer)
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="space-y-3">
        <div>
          <label className={lbl}>Question</label>
          <input value={q} onChange={e => setQ(e.target.value)} className={inp} />
        </div>
        <div>
          <label className={lbl}>Answer</label>
          <textarea value={a} onChange={e => setA(e.target.value)} rows={3} className={inp + ' resize-none'} />
        </div>
        <div className="flex gap-3">
          <button onClick={() => onSave(faq.id, q, a)} className="flex items-center gap-1.5 px-4 py-2 bg-[#0A2F1F] text-white text-xs rounded hover:bg-[#0A2F1F]/80 transition">
            <Save size={13} /> Save
          </button>
          <button onClick={() => onDelete(faq.id)} className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs rounded hover:bg-red-100 transition">
            <Trash2 size={13} /> Delete
          </button>
        </div>
      </div>
    </div>
  )
}

const inp = "w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition"
const lbl = "block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5"
