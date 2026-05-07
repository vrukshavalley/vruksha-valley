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
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Title</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Category</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Slug</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                <th className="text-right px-6 py-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">{post.title}</td>
                  <td className="px-6 py-4 text-gray-500">{post.category}</td>
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">{post.slug}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/blog/${post.id}`} className="p-2 text-gray-400 hover:text-[#0A2F1F] transition"><Pencil size={15} /></Link>
                      <button onClick={() => deletePost(post.id)} className="p-2 text-gray-400 hover:text-red-600 transition"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
