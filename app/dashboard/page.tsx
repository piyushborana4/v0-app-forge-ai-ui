'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Sparkles, Plus, BarChart3, Zap } from 'lucide-react'

export default function DashboardHome() {
  const recentApps = [
    {
      id: 1,
      name: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot',
      created: '2 days ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Content Generator',
      description: 'Generate marketing content automatically',
      created: '5 days ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Data Analyzer',
      description: 'Process and analyze data with AI',
      created: '1 week ago',
      status: 'inactive'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, Creator</h1>
          <p className="text-muted-foreground">Here's what you've been building</p>
        </div>
        <Link href="/dashboard/create">
          <Button className="bg-primary hover:bg-accent text-white gap-2 mt-4 md:mt-0">
            <Plus className="w-5 h-5" />
            New App
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Sparkles,
            label: 'Active Apps',
            value: '12',
            color: 'from-primary to-accent'
          },
          {
            icon: BarChart3,
            label: 'Total Requests',
            value: '45.2K',
            color: 'from-secondary to-cyan-400'
          },
          {
            icon: Zap,
            label: 'API Calls Today',
            value: '1,234',
            color: 'from-accent to-violet-500'
          }
        ].map((stat, i) => (
          <div key={i} className="glass rounded-xl p-6 border border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Apps */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Apps</h2>
          <Link href="/dashboard/my-apps">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {recentApps.map((app) => (
            <div key={app.id} className="glass rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-smooth group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">{app.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
                  <p className="text-xs text-muted-foreground mt-3">Created {app.created}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${app.status === 'active' ? 'bg-secondary/20 text-secondary' : 'bg-muted/20 text-muted-foreground'}`}>
                    {app.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-8 border border-border/50">
          <h3 className="text-xl font-bold mb-2">Start from Template</h3>
          <p className="text-muted-foreground text-sm mb-6">Use pre-built templates to get started faster</p>
          <Link href="/dashboard/templates">
            <Button variant="outline" className="gap-2">
              Browse Templates
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="glass rounded-xl p-8 border border-border/50">
          <h3 className="text-xl font-bold mb-2">Documentation</h3>
          <p className="text-muted-foreground text-sm mb-6">Learn how to build AI apps with AppForge</p>
          <Button variant="outline" className="gap-2">
            Read Docs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
