import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Leaf, Zap, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";

/**
 * EcoTrack AI - Landing Page
 * Design: Organic Futurism
 * Color Palette: Forest Green (#1B4D2F), Sage Green (#9CAF88), Terracotta (#C86432)
 * Typography: Poppins (display), Inter (body), Playfair Display (accents)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EcoTrack AI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg-main.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Transform Waste Into <span className="text-accent">Circular Value</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              EcoTrack AI harnesses Agentic Artificial Intelligence to revolutionize circular economy management. Automatically optimize resource flows, maximize recycling efficiency, and unlock new revenue streams—all powered by intelligent agents that work 24/7.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Launch Platform <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Divider - Organic Wave */}
      <svg className="w-full h-24 md:h-32 text-background fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" opacity="0.1"></path>
        <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" opacity="0.05"></path>
      </svg>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Intelligent Features</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Powered by cutting-edge Agentic AI and IoT technology to deliver real-time insights and autonomous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Agentic AI Automation</h3>
              <p className="text-foreground/70">
                Autonomous agents make real-time decisions on waste routing, material valuation, and collection optimization without human intervention.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Real-Time Analytics</h3>
              <p className="text-foreground/70">
                IoT sensors and AI-powered computer vision deliver 99% accuracy in waste classification and environmental impact tracking.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border/50 bg-card">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Blockchain Transparency</h3>
              <p className="text-foreground/70">
                Immutable tracking of every recycled material through the supply chain with Green Points rewards system for participants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SVG Divider */}
      <svg className="w-full h-24 md:h-32 text-secondary/5 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z" opacity="0.1"></path>
      </svg>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Intelligent Dashboard
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Monitor your circular economy operations in real-time. Track waste flows, environmental impact, financial returns, and AI agent decisions all from a unified, intuitive interface.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Real-time waste tracking across multiple locations</span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">AI-optimized collection routes (up to 30% efficiency gain)</span>
                </li>
                <li className="flex gap-3">
                  <Leaf className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Environmental impact metrics and carbon footprint reduction</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Explore Dashboard <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/images/dashboard-bg.jpg" 
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Global Impact Potential
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center border-border/50 bg-card">
              <div className="text-4xl font-bold text-accent mb-2">$4.5T</div>
              <p className="text-foreground/70">Annual value from untapped recycling opportunities</p>
            </Card>
            <Card className="p-8 text-center border-border/50 bg-card">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-foreground/70">Waste classification accuracy with AI vision</p>
            </Card>
            <Card className="p-8 text-center border-border/50 bg-card">
              <div className="text-4xl font-bold text-secondary mb-2">30%</div>
              <p className="text-foreground/70">Collection route efficiency improvement</p>
            </Card>
            <Card className="p-8 text-center border-border/50 bg-card">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-foreground/70">Autonomous AI agent optimization</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Built for Every Stakeholder
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SMEs */}
            <Card className="p-8 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">For SMEs</h3>
              <p className="text-foreground/70 mb-6">
                Reduce waste disposal costs by up to 40%, achieve sustainability compliance, and unlock new revenue from recycled materials.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Automated waste management</li>
                <li>✓ Compliance reporting</li>
                <li>✓ Revenue optimization</li>
              </ul>
            </Card>

            {/* Residential */}
            <Card className="p-8 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">For Residential</h3>
              <p className="text-foreground/70 mb-6">
                Smart waste management for apartment complexes with resident incentives through Green Points rewards program.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Smart bin monitoring</li>
                <li>✓ Green Points rewards</li>
                <li>✓ Community engagement</li>
              </ul>
            </Card>

            {/* Government */}
            <Card className="p-8 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">For Municipalities</h3>
              <p className="text-foreground/70 mb-6">
                Data-driven waste management planning, optimized collection routes, and comprehensive environmental impact tracking.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Route optimization</li>
                <li>✓ Infrastructure planning</li>
                <li>✓ Sustainability metrics</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Investor Focus */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest in the Circular Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join leading investors and partners in transforming global waste management. Access our investor deck, financial projections, and technical documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Download Investor Deck
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary">EcoTrack AI</span>
              </div>
              <p className="text-foreground/60 text-sm">Intelligent circular economy management powered by Agentic AI.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
            <p>&copy; 2025 EcoTrack AI. All rights reserved. | Transforming Waste Into Circular Value</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
