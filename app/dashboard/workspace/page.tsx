'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Code2, Play, Save, Settings, Share2, MoreHorizontal } from 'lucide-react'

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [isSaved, setIsSaved] = useState(true)

  const defaultCode = `import React, { useState } from 'react'

export default function MyApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your AI App</h1>
      <p className="text-gray-600 mb-6">Counter: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  )
}`

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My AI App</h1>
          <p className="text-muted-foreground text-sm mt-1">{!isSaved && '● Unsaved changes'}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button className="bg-primary hover:bg-accent text-white gap-2">
            <Save className="w-4 h-4" />
            Save & Deploy
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/50">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-smooth ${
            activeTab === 'preview'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Play className="w-4 h-4 inline mr-2" />
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-smooth ${
            activeTab === 'code'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Code2 className="w-4 h-4 inline mr-2" />
          Code
        </button>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-250px)] overflow-hidden">
        {/* Preview */}
        <div className="glass rounded-xl border border-border/50 overflow-hidden flex flex-col">
          <div className="bg-card border-b border-border/50 px-4 py-3 flex items-center justify-between">
            <h3 className="text-sm font-medium">Live Preview</h3>
            <Button variant="ghost" size="sm">
              <Play className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto bg-gradient-to-br from-background to-card/50">
            <iframe
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Your AI App</h1>
    <p class="text-gray-600 mb-6">Counter: 0</p>
    <button onclick="alert('Button clicked!')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Increment
    </button>
  </div>
</body>
</html>`}
              className="w-full h-full border-none"
              sandbox="allow-scripts"
            />
          </div>
        </div>

        {/* Code Editor */}
        <div className="glass rounded-xl border border-border/50 overflow-hidden flex flex-col">
          <div className="bg-card border-b border-border/50 px-4 py-3">
            <h3 className="text-sm font-medium">Source Code</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="bg-card p-4">
              <pre className="font-mono text-xs text-foreground overflow-auto">
                <code>{defaultCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Bar */}
      <div className="glass rounded-lg border border-border/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Status: </span>
            <span className="text-secondary">● Active</span>
          </div>
          <div>
            <span className="text-muted-foreground">Version: </span>
            <span className="text-foreground">v1.0</span>
          </div>
          <div>
            <span className="text-muted-foreground">Last saved: </span>
            <span className="text-foreground">2 minutes ago</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}
