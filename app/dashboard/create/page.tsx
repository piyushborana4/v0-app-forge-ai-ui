'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Send, Copy, Download, Sparkles, Play, RefreshCw } from 'lucide-react'

export default function CreateAppPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState<string | null>(null)
  const [appName, setAppName] = useState('Untitled App')

  const handleGenerate = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate generation
    setTimeout(() => {
      setGeneratedCode(`// Generated AI App
import React, { useState } from 'react'

export default function AIApp() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Call your AI endpoint
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      })

      const data = await response.json()
      setResult(data.output)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your input..."
          className="w-full p-4 border rounded-lg mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}`)
      setIsGenerating(false)
      setAppName('My AI App')
    }, 2000)
  }

  const copyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Create New App</h1>
        <p className="text-muted-foreground">Describe your app idea and let AI build it for you</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-220px)]">
        {/* Left: Prompt Input */}
        <div className="glass rounded-xl border border-border/50 p-6 flex flex-col overflow-hidden">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">App Name</label>
            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full bg-card border border-border/50 rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary/50"
              placeholder="Give your app a name"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-medium mb-2">Describe Your App</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write a detailed description of your AI app. For example:&#10;&#10;'Create a customer support chatbot that:&#10;- Handles common inquiries&#10;- Escalates complex issues&#10;- Maintains conversation history&#10;- Provides helpful suggestions'"
              className="flex-1 bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground resize-none outline-none focus:border-primary/50"
            />

            {/* Suggestions */}
            <div className="mt-4 space-y-2 text-xs">
              <p className="text-muted-foreground">Quick prompts:</p>
              <button
                onClick={() => setPrompt('Create a customer support chatbot that handles FAQs')}
                className="block w-full text-left px-3 py-2 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-smooth text-foreground text-xs"
              >
                📞 Customer Support Bot
              </button>
              <button
                onClick={() => setPrompt('Build a content generator that creates blog posts from keywords')}
                className="block w-full text-left px-3 py-2 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-smooth text-foreground text-xs"
              >
                ✍️ Content Generator
              </button>
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full mt-4 bg-primary hover:bg-accent text-white gap-2 py-6"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate App
              </>
            )}
          </Button>
        </div>

        {/* Right: Code Preview */}
        <div className="glass rounded-xl border border-border/50 p-6 flex flex-col overflow-hidden">
          {generatedCode ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Generated Code</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={copyCode}
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="flex-1 bg-card rounded-lg border border-border/50 overflow-hidden flex flex-col">
                <pre className="flex-1 p-4 overflow-auto font-mono text-xs text-foreground">
                  <code>{generatedCode}</code>
                </pre>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Link href="/dashboard/workspace" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-accent text-white gap-2">
                    <Play className="w-4 h-4" />
                    Open in Workspace
                  </Button>
                </Link>
                <Button variant="outline">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Ready to Create?</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Describe your AI app idea in the left panel and click "Generate App" to see the code
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
