'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Home, Layers, Zap, Settings, LogOut, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  open: boolean
  onToggle: (open: boolean) => void
}

const navItems = [
  {
    label: 'Home',
    href: '/dashboard',
    icon: Home
  },
  {
    label: 'My Apps',
    href: '/dashboard/my-apps',
    icon: Layers
  },
  {
    label: 'Templates',
    href: '/dashboard/templates',
    icon: Zap
  },
  {
    label: 'Create App',
    href: '/dashboard/create',
    icon: Sparkles
  }
]

export function Sidebar({ open, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => onToggle(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative w-64 h-screen glass border-r border-border/50 flex flex-col transition-transform duration-300 z-50 md:z-0 ${
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-white">AppForge</h1>
              <p className="text-xs text-secondary">Zero-Code AI</p>
            </div>
            <button
              onClick={() => onToggle(false)}
              className="ml-auto md:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                  isActive
                    ? 'bg-primary/20 text-primary border border-primary/50'
                    : 'text-muted-foreground hover:bg-card hover:text-foreground'
                }`}>
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/50 p-4 space-y-2">
          <Link href="/dashboard/settings">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-smooth">
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-smooth">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}
