'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { ArrowLeft, Save } from 'lucide-react'
import ImageUpload from '../../_components/ImageUpload'

const inp = 'w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 bg-white outline-none focus:border-[#0A2F1F] transition'

function Field({ label, children, cls = '' }: { label: string; children: React.ReactNode; cls?: string }) {
  return (
    <div className={cls}>
      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function ImgPreview({ src }: { src: string }) {
  if (!src) return null
  return <img src={src} alt="" className="mt-2 h-28 w-full object-cover rounded" onError={e => { e.currentTarget.style.display = 'none' }} />
}

export default function EditJournalPost() {
  const { id } = useParams()
  const [saving, setSaving] = useState(false)
  const [msg, setMsg]       = useState('')
  const [form, setForm]     = useState({
    slug: '', title: '', subtitle: '', category: 'Travel', image: '',
    content: '', seo_title: '', seo_description: '', seo_keywords: '', published: true,
  })

  useEffect(() => {
    createClient().from('blog_posts').select('*').eq('id', id).single().then(({ data }) => {
      if (data) setForm({
        ...data,
        content: (data.content || []).join('\n\n'),
        seo_keywords: (data.seo_keywords || []).join(', '),
      })
    })
  }, [id])

  function set(k: string, v: any) { setForm(f => ({ ...f, [k]: v })) }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { error } = await createClient().from('blog_posts').update({
      ...form,
      content: form.content.split('\n\n').filter(Boolean),
      seo_keywords: form.seo_keywords.split(',').map(k => k.trim()).filter(Boolean),
      updated_at: new Date().toISOString(),
    }).eq('id', id)
    setSaving(false)
    if (error) setMsg('Error: ' + error.message)
    else { setMsg('Saved!'); setTimeout(() => setMsg(''), 3000) }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/journal" className="text-gray-400 hover:text-gray-700 transition"><ArrowLeft size={20} /></Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Edit Post</h1>
          <p className="text-gray-400 text-sm font-mono truncate max-w-xs">{form.slug}</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-5 space-y-5">
          <h3 className="font-semibold text-gray-700 border-b pb-3">Post Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Title"><input value={form.title} onChange={e => set('title', e.target.value)} className={inp} /></Field>
            <Field label="Slug"><input value={form.slug} onChange={e => set('slug', e.target.value)} className={inp} /></Field>
            <Field label="Subtitle"><input value={form.subtitle} onChange={e => set('subtitle', e.target.value)} className={inp} /></Field>
            <Field label="Category">
              <select value={form.category} onChange={e => set('category', e.target.value)} className={inp}>
                {['Travel','Nature','Adventure','Food','Culture'].map(c => <option key={c}>{c}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Cover Image URL">
            <div className="flex gap-2 items-center">
              <input value={form.image} onChange={e => set('image', e.target.value)} className={inp} />
              <ImageUpload folder="blog" onUpload={url => set('image', url)} />
            </div>
            <ImgPreview src={form.image} />
          </Field>
          <Field label="Content (separate paragraphs with a blank line)">
            <textarea value={form.content} onChange={e => set('content', e.target.value)} rows={14} className={inp + ' resize-none'} />
          </Field>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="pub" checked={form.published} onChange={e => set('published', e.target.checked)} className="w-4 h-4" />
            <label htmlFor="pub" className="text-sm text-gray-600">Published</label>
          </div>
        </div>

{msg && <p className={`text-sm font-semibold ${msg.startsWith('Error') ? 'text-red-500' : 'text-green-600'}`}>{msg}</p>}
        <div className="flex flex-wrap gap-4">
          <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#0A2F1F] text-white text-sm rounded disabled:opacity-50">
            <Save size={15} /> {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <Link href="/admin/journal" className="px-6 py-3 bg-gray-100 text-gray-700 text-sm rounded">Back</Link>
        </div>
      </form>
    </div>
  )
}
