'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Plus, Pencil, Trash2 } from 'lucide-react'

type Post = { id: string; slug: string; title: string; category: string; published: boolean; created_at: string }

export default function AdminBlog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('blog_posts').select('id,slug,title,category,published,created_at').order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function deletePost(id: string) {
    if (!confirm('Delete this post?')) return
    const supabase = createClient()
    await supabase.from('blog_posts').delete().eq('id', id)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
          <p className="text-gray-400 text-sm mt-1">Create and manage your travel journal entries</p>
        </div>
        <Link href="/admin/blog/new" className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">
          <Plus size={16} /> New Post
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="p-12 text-center text-gray-400">No blog posts yet. <Link href="/admin/blog/new" className="text-[#0A2F1F] underline">Create one</Link></div>
        ) : (
          <div className="divide-y divide-gray-100">
            {posts.map(post => (
              <div key={post.id} className="flex items-center justify-between gap-3 px-4 py-4 hover:bg-gray-50 transition">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 text-sm leading-tight">{post.title}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs text-gray-400">{post.category}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-xs text-gray-400 font-mono truncate max-w-30">{post.slug}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {post.published ? 'Live' : 'Draft'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Link href={`/admin/blog/${post.id}`} className="p-2 text-gray-400 hover:text-[#0A2F1F] transition rounded hover:bg-gray-100">
                    <Pencil size={15} />
                  </Link>
                  <button onClick={() => deletePost(post.id)} className="p-2 text-gray-400 hover:text-red-600 transition rounded hover:bg-red-50">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
