'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard, FileText, HelpCircle, MessageSquare,
  Sparkles, Home, Search, Settings, LogOut, Star
} from 'lucide-react'

const nav = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { label: 'FAQ', href: '/admin/faq', icon: HelpCircle },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { label: 'Amenities', href: '/admin/amenities', icon: Sparkles },
  { label: 'Cottages', href: '/admin/cottages', icon: Home },
  { label: 'Page SEO', href: '/admin/metadata', icon: Search },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-[#0A2F1F] text-white flex flex-col min-h-screen fixed left-0 top-0">
      <div className="px-6 py-8 border-b border-white/10">
        <h1 className="font-serif text-xl">Vruksha Valley</h1>
        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)
          return (
            <Link
              key={href} href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition ${
                active ? 'bg-white/10 text-white font-semibold' : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:bg-white/5 hover:text-white transition w-full"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
