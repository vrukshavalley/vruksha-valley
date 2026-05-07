'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard, FileText, HelpCircle, MessageSquare,
  Sparkles, Home, Search, Settings, LogOut, Images, Menu, X
} from 'lucide-react'

const nav = [
  { label: 'Dashboard',    href: '/admin',              icon: LayoutDashboard },
  { label: 'Blog Posts',   href: '/admin/blog',          icon: FileText },
  { label: 'FAQ',          href: '/admin/faq',           icon: HelpCircle },
  { label: 'Testimonials', href: '/admin/testimonials',  icon: MessageSquare },
  { label: 'Amenities',    href: '/admin/amenities',     icon: Sparkles },
  { label: 'Cottages',     href: '/admin/cottages',      icon: Home },
  { label: 'Gallery',      href: '/admin/gallery',       icon: Images },
  { label: 'Page SEO',     href: '/admin/metadata',      icon: Search },
  { label: 'Settings',     href: '/admin/settings',      icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const NavLinks = () => (
    <>
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)
          return (
            <Link
              key={href} href={href}
              onClick={() => setOpen(false)}
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
    </>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0A2F1F] px-4 py-3 flex items-center gap-4 shadow-lg">
        <button onClick={() => setOpen(true)} className="text-white p-1">
          <Menu size={22} />
        </button>
        <span className="font-serif text-white text-base">Vruksha Valley Admin</span>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar — drawer on mobile, fixed on desktop */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-[#0A2F1F] text-white flex flex-col z-50
        transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl">Vruksha Valley</h1>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Admin Panel</p>
          </div>
          <button className="md:hidden text-white/50 hover:text-white" onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <NavLinks />
      </aside>
    </>
  )
}
