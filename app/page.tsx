import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QrCode, Zap, BarChart3, Shield, Smartphone, Globe, Check } from "lucide-react"

export default function QrifyLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-[#4A90E2]" />
            <span className="font-heading font-bold text-2xl text-[#333333]">Qrify</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#333333] hover:text-[#4A90E2] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-[#333333] hover:text-[#4A90E2] transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-[#333333] hover:text-[#4A90E2] transition-colors">
              About
            </a>
            <Button
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white bg-transparent"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#50E3C2]/20 text-[#0F766E] border-[#50E3C2]/30">
            Dynamic QR Generation Platform
          </Badge>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-[#333333] mb-6 text-balance">
            Create Dynamic QR Codes That <span className="text-[#4A90E2]">Actually Work</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Generate, customize, and manage QR codes that adapt to your needs. Track performance, update content, and
            engage your audience with professional QR solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white px-8 py-3">
              Start Creating Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 bg-transparent"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#333333] mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your QR code campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Dynamic Content</CardTitle>
                <CardDescription>
                  Update QR code destinations without reprinting. Change URLs, content, and campaigns in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#50E3C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#50E3C2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Analytics & Insights</CardTitle>
                <CardDescription>
                  Track scans, locations, devices, and user behavior with comprehensive analytics dashboard.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#FFC107]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Enterprise Security</CardTitle>
                <CardDescription>
                  Password protection, expiration dates, and access controls to keep your content secure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Custom Design</CardTitle>
                <CardDescription>
                  Brand your QR codes with logos, colors, and custom frames that match your identity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#50E3C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#50E3C2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Global CDN</CardTitle>
                <CardDescription>
                  Lightning-fast QR code generation and scanning worldwide with our global infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-[#FFC107]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Bulk Generation</CardTitle>
                <CardDescription>
                  Create thousands of QR codes at once with CSV import and automated campaign management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#333333] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 hover:border-[#4A90E2]/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl text-[#333333]">Free</CardTitle>
                <div className="text-4xl font-bold text-[#333333] mt-4">$0</div>
                <CardDescription>Perfect for personal use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>5 Dynamic QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Standard templates</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-100 text-[#333333] hover:bg-gray-200">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-[#4A90E2] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#4A90E2] text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl text-[#333333]">Pro</CardTitle>
                <div className="text-4xl font-bold text-[#333333] mt-4">$19</div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>100 Dynamic QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Password protection</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-[#4A90E2]/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl text-[#333333]">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-[#333333] mt-4">$99</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Unlimited QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-100 text-[#333333] hover:bg-gray-200">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A90E2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4">Ready to Transform Your QR Strategy?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Qrify to create engaging, trackable QR experiences.
          </p>
          <Button size="lg" className="bg-white text-[#4A90E2] hover:bg-gray-100 px-8 py-3">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="h-6 w-6 text-[#4A90E2]" />
                <span className="font-heading font-bold text-xl text-[#333333]">Qrify</span>
              </div>
              <p className="text-gray-600">The most powerful platform for creating and managing dynamic QR codes.</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#features" className="hover:text-[#4A90E2] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#4A90E2] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#about" className="hover:text-[#4A90E2] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Qrify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
