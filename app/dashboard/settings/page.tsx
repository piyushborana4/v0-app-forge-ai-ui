'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Bell, Lock, User, Key, LogOut, Trash2 } from 'lucide-react'

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<'profile' | 'billing' | 'security' | 'notifications' | 'danger'>('profile')

  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'billing', label: 'Billing', icon: Key },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'danger', label: 'Danger Zone', icon: Trash2 }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="glass rounded-xl border border-border/50 p-4 h-fit lg:sticky lg:top-6">
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-smooth text-sm font-medium ${
                  activeSection === section.id
                    ? 'bg-primary/20 text-primary border border-primary/50'
                    : 'text-muted-foreground hover:bg-card hover:text-foreground'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeSection === 'profile' && (
            <div className="glass rounded-xl border border-border/50 p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/50">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                      C
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Profile Picture</h3>
                      <p className="text-muted-foreground text-sm mb-3">Change your profile avatar</p>
                      <Button variant="outline" size="sm">Upload Photo</Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Creator Name"
                      className="w-full bg-card border border-border/50 rounded-lg px-4 py-2 text-foreground focus:border-primary/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="creator@example.com"
                      className="w-full bg-card border border-border/50 rounded-lg px-4 py-2 text-foreground focus:border-primary/50 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      defaultValue="Building amazing AI applications"
                      className="w-full bg-card border border-border/50 rounded-lg px-4 py-2 text-foreground focus:border-primary/50 outline-none resize-none h-24"
                    />
                  </div>

                  <Button className="bg-primary hover:bg-accent text-white">Save Changes</Button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'billing' && (
            <div className="glass rounded-xl border border-border/50 p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Billing & Subscription</h2>

                <div className="space-y-6">
                  <div className="border border-border/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">Free Plan</h3>
                        <p className="text-sm text-muted-foreground">Up to 3 apps, 10K requests/month</p>
                      </div>
                      <span className="text-sm font-semibold">$0/month</span>
                    </div>
                    <Button variant="outline" size="sm" disabled>Current Plan</Button>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Upgrade Options</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Pro - $29/month', 'Enterprise - Custom'].map((plan) => (
                        <Button key={plan} variant="outline" className="justify-start">
                          Upgrade to {plan}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="glass rounded-xl border border-border/50 p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-6">Security</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Change Password</h3>
                  <p className="text-muted-foreground text-sm mb-4">Update your password regularly for security</p>
                  <Button variant="outline">Change Password</Button>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-semibold mb-2">Two-Factor Authentication</h3>
                  <p className="text-muted-foreground text-sm mb-4">Add an extra layer of security to your account</p>
                  <Button variant="outline">Enable 2FA</Button>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-semibold mb-2">API Keys</h3>
                  <p className="text-muted-foreground text-sm mb-4">Manage your API keys for integrations</p>
                  <Button variant="outline">View API Keys</Button>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-semibold mb-2">Active Sessions</h3>
                  <p className="text-muted-foreground text-sm mb-4">Manage your active login sessions</p>
                  <Button variant="outline">View Sessions</Button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="glass rounded-xl border border-border/50 p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-6">Notifications</h2>

              <div className="space-y-4">
                {[
                  { title: 'App Deployments', description: 'Get notified when your apps are deployed' },
                  { title: 'API Alerts', description: 'Alerts for API errors and downtime' },
                  { title: 'Weekly Reports', description: 'Receive weekly usage reports' },
                  { title: 'Team Invitations', description: 'Get notified about team invitations' }
                ].map((notif) => (
                  <div key={notif.title} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{notif.title}</h4>
                      <p className="text-sm text-muted-foreground">{notif.description}</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'danger' && (
            <div className="glass rounded-xl border border-destructive/50 p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-destructive">Danger Zone</h2>

              <div className="space-y-4">
                <div className="border border-border/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Delete Account</h3>
                  <p className="text-muted-foreground text-sm mb-4">Permanently delete your account and all data</p>
                  <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
