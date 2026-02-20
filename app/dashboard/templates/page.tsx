'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Pen, Database, Code, Mail, TrendingUp } from 'lucide-react'

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: 'Customer Support Chatbot',
      description: 'AI chatbot for handling customer inquiries and support tickets',
      icon: MessageSquare,
      category: 'Customer Service',
      difficulty: 'Beginner',
      rating: 4.8,
      uses: '2.3K',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      name: 'Content Writer',
      description: 'Generate blog posts, articles, and marketing copy automatically',
      icon: Pen,
      category: 'Content',
      difficulty: 'Beginner',
      rating: 4.9,
      uses: '3.1K',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 3,
      name: 'Data Analyzer',
      description: 'Process CSV/JSON data and generate insights with AI',
      icon: Database,
      category: 'Data',
      difficulty: 'Intermediate',
      rating: 4.6,
      uses: '1.8K',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 4,
      name: 'Code Generator',
      description: 'Generate code snippets and boilerplate from descriptions',
      icon: Code,
      category: 'Development',
      difficulty: 'Intermediate',
      rating: 4.7,
      uses: '2.5K',
      color: 'from-orange-500 to-red-400'
    },
    {
      id: 5,
      name: 'Email Campaign Generator',
      description: 'Create personalized email campaigns at scale',
      icon: Mail,
      category: 'Marketing',
      difficulty: 'Beginner',
      rating: 4.5,
      uses: '1.2K',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      id: 6,
      name: 'Sales Predictor',
      description: 'Forecast sales trends and customer behavior',
      icon: TrendingUp,
      category: 'Analytics',
      difficulty: 'Advanced',
      rating: 4.4,
      uses: '892',
      color: 'from-pink-500 to-rose-400'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Templates</h1>
        <p className="text-muted-foreground">Start building faster with pre-built AI app templates</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex gap-2 bg-card border border-border/50 rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="Search templates..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
        </div>
        <select className="bg-card border border-border/50 rounded-lg px-3 py-2 text-sm">
          <option>All Categories</option>
          <option>Customer Service</option>
          <option>Content</option>
          <option>Data</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="glass rounded-lg border border-border/50 hover:border-primary/50 transition-smooth overflow-hidden group flex flex-col h-full"
          >
            {/* Icon Background */}
            <div className={`h-32 bg-gradient-to-br ${template.color} opacity-10 flex items-center justify-center group-hover:opacity-20 transition-smooth relative`}>
              <template.icon className="w-12 h-12 text-muted-foreground" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">{template.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{template.description}</p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
                <span>{template.category}</span>
                <span className="text-secondary">{template.difficulty}</span>
                <span>★ {template.rating}</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{template.uses} uses</span>
                <Link href={`/dashboard/create?template=${template.id}`}>
                  <Button size="sm" className="bg-primary hover:bg-accent text-white gap-2">
                    Use Template
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">Load More Templates</Button>
      </div>
    </div>
  )
}
