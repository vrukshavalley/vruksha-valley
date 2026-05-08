'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard, FileText, HelpCircle, MessageSquare,
  Sparkles, Home, Search, Settings, LogOut, Images, Menu, X,
} from 'lucide-react'

const nav = [
  { label: 'Dashboard',    href: '/admin',             icon: LayoutDashboard },
  { label: 'Blog Posts',   href: '/admin/blog',         icon: FileText },
  { label: 'FAQ',          href: '/admin/faq',          icon: HelpCircle },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { label: 'Amenities',    href: '/admin/amenities',    icon: Sparkles },
  { label: 'Cottages',     href: '/admin/cottages',     icon: Home },
  { label: 'Gallery',      href: '/admin/gallery',      icon: Images },
  { label: 'Page SEO',     href: '/admin/metadata',     icon: Search },
  { label: 'Settings',     href: '/admin/settings',     icon: Settings },
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

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 h-14 z-50 bg-[#0A2F1F] px-4 flex items-center gap-3 shadow-lg">
        <button
          onClick={() => setOpen(v => !v)}
          className="text-white p-2 -ml-2 rounded hover:bg-white/10 active:bg-white/20 transition"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span className="font-serif text-white text-base">Vruksha Valley Admin</span>
      </div>

      {/* ── Mobile dimmed overlay ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Sidebar (drawer on mobile, always-visible on desktop) ── */}
      <aside
        className={[
          'fixed left-0 bottom-0 w-64 bg-[#0A2F1F] text-white flex flex-col',
          'top-14 z-40',               // mobile: starts below the top bar
          'md:top-0 md:z-50',          // desktop: starts at very top
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0',
        ].join(' ')}
      >
        {/* Desktop-only branding header */}
        <div className="hidden md:flex flex-col px-6 py-6 border-b border-white/10 shrink-0">
          <h1 className="font-serif text-xl">Vruksha Valley</h1>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Admin Panel</p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={[
                  'flex items-center gap-3 px-4 py-3 rounded text-sm transition',
                  active
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-white/60 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-4 border-t border-white/10 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:bg-white/5 hover:text-white transition w-full"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
