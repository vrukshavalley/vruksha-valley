'use client'
import { useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Upload } from 'lucide-react'

export default function ImageUpload({
  onUpload,
  folder = 'uploads',
}: {
  onUpload: (url: string) => void
  folder?: string
}) {
  const [uploading, setUploading] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const ext = file.name.split('.').pop() || 'webp'
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const sb = createClient()
    const { data, error } = await sb.storage.from('media').upload(path, file, { upsert: true })
    if (error) { alert('Upload failed: ' + error.message); setUploading(false); return }
    const { data: { publicUrl } } = sb.storage.from('media').getPublicUrl(data.path)
    onUpload(publicUrl)
    setUploading(false)
    if (ref.current) ref.current.value = ''
  }

  return (
    <>
      <input ref={ref} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      <button
        type="button"
        onClick={() => ref.current?.click()}
        disabled={uploading}
        className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded transition disabled:opacity-50 shrink-0 whitespace-nowrap"
      >
        <Upload size={12} /> {uploading ? 'Uploading…' : 'Upload'}
      </button>
    </>
  )
}
