'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus, MoreHorizontal, ExternalLink, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function MyAppsPage() {
  const [apps, setApps] = useState([
    {
      id: 1,
      name: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot',
      created: '2024-02-10',
      status: 'active',
      requests: '12.5K',
      version: 'v1.2'
    },
    {
      id: 2,
      name: 'Content Generator',
      description: 'Generate marketing content automatically',
      created: '2024-02-05',
      status: 'active',
      requests: '8.2K',
      version: 'v1.0'
    },
    {
      id: 3,
      name: 'Data Analyzer',
      description: 'Process and analyze data with AI',
      created: '2024-01-28',
      status: 'inactive',
      requests: '3.1K',
      version: 'v0.9'
    },
    {
      id: 4,
      name: 'Email Assistant',
      description: 'Smart email composition and management',
      created: '2024-01-15',
      status: 'active',
      requests: '21.3K',
      version: 'v2.1'
    },
    {
      id: 5,
      name: 'Code Generator',
      description: 'Generate boilerplate code from descriptions',
      created: '2024-01-10',
      status: 'inactive',
      requests: '5.7K',
      version: 'v1.1'
    }
  ])

  const deleteApp = (id: number) => {
    setApps(apps.filter(app => app.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Apps</h1>
          <p className="text-muted-foreground">Manage and monitor all your AI applications</p>
        </div>
        <Link href="/dashboard/create">
          <Button className="bg-primary hover:bg-accent text-white gap-2 mt-4 md:mt-0">
            <Plus className="w-5 h-5" />
            Create New App
          </Button>
        </Link>
      </div>

      {/* Filter and Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {['All', 'Active', 'Inactive', 'Draft'].map((filter) => (
            <Button key={filter} variant={filter === 'All' ? 'default' : 'outline'} size="sm">
              {filter}
            </Button>
          ))}
        </div>
        <select className="bg-card border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground">
          <option>Sort by: Newest</option>
          <option>Sort by: Oldest</option>
          <option>Sort by: Most Used</option>
          <option>Sort by: Name</option>
        </select>
      </div>

      {/* Apps Grid */}
      <div className="grid gap-6">
        {apps.length > 0 ? (
          apps.map((app) => (
            <div
              key={app.id}
              className="glass rounded-lg border border-border/50 hover:border-primary/50 transition-smooth group overflow-hidden"
            >
              <div className="p-6 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">{app.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'active'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-muted/20 text-muted-foreground'
                    }`}>
                      {app.status === 'active' ? '● Active' : '● Inactive'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{app.description}</p>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <div>Created: <span className="text-foreground">{app.created}</span></div>
                    <div>Version: <span className="text-foreground">{app.version}</span></div>
                    <div>Requests: <span className="text-foreground">{app.requests}</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Launch</span>
                  </Button>
                  <div className="relative group/menu">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                    <div className="absolute right-0 top-full hidden group-hover/menu:block glass rounded-lg border border-border/50 shadow-lg mt-1 w-48 z-50">
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-card/50 transition-smooth flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-card/50 transition-smooth">
                        Duplicate
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-card/50 transition-smooth">
                        Settings
                      </button>
                      <div className="border-t border-border/50"></div>
                      <button
                        onClick={() => deleteApp(app.id)}
                        className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-smooth flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="glass rounded-lg border border-border/50 p-12 text-center">
            <p className="text-muted-foreground mb-4">No apps found</p>
            <Link href="/dashboard/create">
              <Button className="bg-primary hover:bg-accent text-white">Create Your First App</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
