'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { FileText, HelpCircle, MessageSquare, Home, Sparkles } from 'lucide-react'

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ blog: 0, faq: 0, testimonials: 0, cottages: 0, amenities: 0 })

  useEffect(() => {
    const supabase = createClient()
    async function load() {
      const [blog, faq, testimonials, cottages, amenities] = await Promise.all([
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
        supabase.from('faqs').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('cottages').select('id', { count: 'exact', head: true }),
        supabase.from('amenities').select('id', { count: 'exact', head: true }),
      ])
      setCounts({
        blog: blog.count || 0,
        faq: faq.count || 0,
        testimonials: testimonials.count || 0,
        cottages: cottages.count || 0,
        amenities: amenities.count || 0,
      })
    }
    load()
  }, [])

  const cards = [
    { label: 'Blog Posts', count: counts.blog, href: '/admin/blog', icon: FileText, color: 'bg-blue-50 text-blue-600' },
    { label: 'FAQ Questions', count: counts.faq, href: '/admin/faq', icon: HelpCircle, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Testimonials', count: counts.testimonials, href: '/admin/testimonials', icon: MessageSquare, color: 'bg-green-50 text-green-600' },
    { label: 'Cottages', count: counts.cottages, href: '/admin/cottages', icon: Home, color: 'bg-purple-50 text-purple-600' },
    { label: 'Amenities', count: counts.amenities, href: '/admin/amenities', icon: Sparkles, color: 'bg-orange-50 text-orange-600' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
      <p className="text-gray-400 text-sm mb-8">Welcome back. Manage all your website content here.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {cards.map(({ label, count, href, icon: Icon, color }) => (
          <Link key={href} href={href} className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{count}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/blog/new" className="px-4 py-2 bg-[#0A2F1F] text-white text-sm rounded hover:bg-[#0A2F1F]/80 transition">New Blog Post</Link>
          <Link href="/admin/faq" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition">Edit FAQ</Link>
          <Link href="/admin/settings" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition">Edit Hero Text</Link>
          <Link href="/admin/metadata" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition">Edit SEO</Link>
          <a href="/" target="_blank" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition">View Website ↗</a>
        </div>
      </div>
    </div>
  )
}
