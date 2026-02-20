'use client'

import { Menu, Search, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface TopBarProps {
  sidebarOpen: boolean
  onSidebarToggle: (open: boolean) => void
}

export function TopBar({ sidebarOpen, onSidebarToggle }: TopBarProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return (
    <div className="glass border-b border-border/50 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onSidebarToggle(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-smooth"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-input border border-border/50 rounded-lg px-3 py-2 w-64">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search apps..."
              className="bg-transparent text-sm outline-none flex-1 placeholder-muted-foreground"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-card rounded-lg transition-smooth"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Profile */}
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold hover:opacity-90 transition-smooth">
            C
          </button>
        </div>
      </div>
    </div>
  )
}
