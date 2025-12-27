import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity, Leaf, TrendingUp, Zap, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Link } from "wouter";

/**
 * EcoTrack AI - Interactive Dashboard
 * Showcases real-time waste tracking, AI agent decisions, and environmental impact
 */

export default function Dashboard() {
  // Sample data for visualizations
  const wasteData = [
    { name: "Mon", plastic: 240, metal: 320, electronics: 180 },
    { name: "Tue", plastic: 280, metal: 350, electronics: 220 },
    { name: "Wed", plastic: 200, metal: 300, electronics: 150 },
    { name: "Thu", plastic: 320, metal: 380, electronics: 280 },
    { name: "Fri", plastic: 350, metal: 420, electronics: 310 },
    { name: "Sat", plastic: 280, metal: 340, electronics: 200 },
    { name: "Sun", plastic: 240, metal: 280, electronics: 180 },
  ];

  const impactData = [
    { name: "Plastic", value: 35, fill: "#1B4D2F" },
    { name: "Metal", value: 45, fill: "#9CAF88" },
    { name: "Electronics", value: 20, fill: "#C86432" },
  ];

  const emissionReduction = [
    { month: "Jan", reduction: 120 },
    { month: "Feb", reduction: 180 },
    { month: "Mar", reduction: 240 },
    { month: "Apr", reduction: 310 },
    { month: "May", reduction: 420 },
    { month: "Jun", reduction: 580 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">EcoTrack Dashboard</h1>
              <p className="text-foreground/60 mt-1">Real-time circular economy intelligence</p>
            </div>
            <Link href="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground/60 text-sm mb-2">Total Waste Processed</p>
                <p className="text-3xl font-bold text-primary">2,847 kg</p>
                <p className="text-xs text-accent mt-2">↑ 12% from last week</p>
              </div>
              <Leaf className="w-12 h-12 text-primary/20" />
            </div>
          </Card>

          <Card className="p-6 bg-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground/60 text-sm mb-2">CO₂ Emissions Avoided</p>
                <p className="text-3xl font-bold text-accent">580 kg</p>
                <p className="text-xs text-accent mt-2">↑ 48% from last month</p>
              </div>
              <TrendingUp className="w-12 h-12 text-accent/20" />
            </div>
          </Card>

          <Card className="p-6 bg-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground/60 text-sm mb-2">Revenue Generated</p>
                <p className="text-3xl font-bold text-secondary">$3,240</p>
                <p className="text-xs text-accent mt-2">↑ 8% from last week</p>
              </div>
              <Zap className="w-12 h-12 text-secondary/20" />
            </div>
          </Card>

          <Card className="p-6 bg-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-foreground/60 text-sm mb-2">AI Agent Decisions</p>
                <p className="text-3xl font-bold text-primary">1,247</p>
                <p className="text-xs text-accent mt-2">Autonomous optimizations</p>
              </div>
              <Activity className="w-12 h-12 text-primary/20" />
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Waste Collection Trend */}
          <Card className="lg:col-span-2 p-6 bg-card border-border/50">
            <h3 className="text-xl font-bold text-primary mb-6">Weekly Waste Collection</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D4C9C0" />
                <XAxis dataKey="name" stroke="#6B7C6B" />
                <YAxis stroke="#6B7C6B" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #D4C9C0" }}
                  cursor={{ fill: "#1B4D2F", opacity: 0.1 }}
                />
                <Legend />
                <Bar dataKey="plastic" stackId="a" fill="#1B4D2F" name="Plastic" />
                <Bar dataKey="metal" stackId="a" fill="#9CAF88" name="Metal" />
                <Bar dataKey="electronics" stackId="a" fill="#C86432" name="Electronics" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Waste Composition */}
          <Card className="p-6 bg-card border-border/50">
            <h3 className="text-xl font-bold text-primary mb-6">Waste Composition</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={impactData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {impactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Emission Reduction Trend */}
        <Card className="p-6 bg-card border-border/50 mb-12">
          <h3 className="text-xl font-bold text-primary mb-6">CO₂ Emissions Reduction Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emissionReduction}>
              <CartesianGrid strokeDasharray="3 3" stroke="#D4C9C0" />
              <XAxis dataKey="month" stroke="#6B7C6B" />
              <YAxis stroke="#6B7C6B" />
              <Tooltip 
                contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #D4C9C0" }}
                cursor={{ stroke: "#1B4D2F", strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="reduction" 
                stroke="#C86432" 
                strokeWidth={3}
                dot={{ fill: "#C86432", r: 5 }}
                activeDot={{ r: 7 }}
                name="CO₂ Avoided (kg)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* AI Agent Activity */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-card border-border/50">
            <h3 className="text-xl font-bold text-primary mb-6">Recent AI Agent Decisions</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Route Optimization</p>
                  <p className="text-sm text-foreground/60">Agent optimized collection route, saving 12% fuel</p>
                  <p className="text-xs text-foreground/40 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-border/50">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Price Negotiation</p>
                  <p className="text-sm text-foreground/60">Secured 8% better rate for recycled metal</p>
                  <p className="text-xs text-foreground/40 mt-1">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Waste Reclassification</p>
                  <p className="text-sm text-foreground/60">Identified 45kg of misclassified electronics</p>
                  <p className="text-xs text-foreground/40 mt-1">6 hours ago</p>
                </div>
              </div>
            </div>
          </Card>

          {/* System Status */}
          <Card className="p-6 bg-card border-border/50">
            <h3 className="text-xl font-bold text-primary mb-6">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground">IoT Sensors</span>
                </div>
                <span className="text-sm font-semibold text-accent">247 Active</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground">AI Agents</span>
                </div>
                <span className="text-sm font-semibold text-accent">12 Running</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground">Data Processing</span>
                </div>
                <span className="text-sm font-semibold text-accent">99.8% Uptime</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground">Blockchain Sync</span>
                </div>
                <span className="text-sm font-semibold text-accent">Synced</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Ready to Scale Your Impact?</h3>
              <p className="text-foreground/70">Connect your waste streams and let our AI agents optimize your circular economy operations.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Free Trial
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
