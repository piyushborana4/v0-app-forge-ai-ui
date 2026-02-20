'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Code2, BarChart3 } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 relative z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">AppForge AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Pricing</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">Sign In</Button>
          <Link href="/dashboard">
            <Button size="sm" className="bg-primary hover:bg-accent text-white">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 max-w-6xl mx-auto">
        {/* Background gradient blur */}
        <div className="absolute inset-0 -top-40 -right-40 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative z-10 text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">
            Build AI Apps
            <span className="gradient-text"> Without Code</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Create powerful AI-powered applications in minutes. No coding required. Pure innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-accent text-white px-8">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border">
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Join 10,000+ users
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Build in minutes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Deploy instantly
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder - Glass card */}
        <div className="relative z-10 mt-16 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-2xl p-1 border border-border/50">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-border/50"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">AI Builders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, test, and deploy AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'AI Prompt Generator',
              description: 'Write prompts naturally and let AI generate your app logic'
            },
            {
              icon: Code2,
              title: 'Code Preview',
              description: 'See generated code in real-time before deployment'
            },
            {
              icon: Zap,
              title: 'Instant Deploy',
              description: 'One-click deployment to production with auto-scaling'
            },
            {
              icon: BarChart3,
              title: 'Analytics',
              description: 'Track performance and user engagement metrics'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-smooth group hover:glow-purple"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-primary transition-smooth" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="glass rounded-2xl p-12 border border-border/50">
          <h2 className="text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators building the future with AI
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-accent text-white px-8">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">AppForge AI</span>
              </div>
              <p className="text-sm text-muted-foreground">Zero-code AI app builder for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 AppForge AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-smooth">Twitter</a>
              <a href="#" className="hover:text-foreground transition-smooth">GitHub</a>
              <a href="#" className="hover:text-foreground transition-smooth">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
