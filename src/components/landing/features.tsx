import { BarChart3, Globe, QrCode, Shield, Smartphone, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";


const FeaturesSection = () => {
  return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl text-[#333333] mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your QR code campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
                  <Zap className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Dynamic Content</CardTitle>
                <CardDescription>
                  Update QR code destinations without reprinting. Change URLs, content, and campaigns in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up">
              <CardHeader>
                <div className="w-12 h-12 bg-[#50E3C2]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
                  <BarChart3 className="h-6 w-6 text-[#50E3C2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Analytics & Insights</CardTitle>
                <CardDescription>
                  Track scans, locations, devices, and user behavior with comprehensive analytics dashboard.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
                  <Shield className="h-6 w-6 text-[#FFC107]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Enterprise Security</CardTitle>
                <CardDescription>
                  Password protection, expiration dates, and access controls to keep your content secure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left-delayed">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
                  <Smartphone className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Custom Design</CardTitle>
                <CardDescription>
                  Brand your QR codes with logos, colors, and custom frames that match your identity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up-delayed">
              <CardHeader>
                <div className="w-12 h-12 bg-[#50E3C2]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
                  <Globe className="h-6 w-6 text-[#50E3C2]" />
                </div>
                <CardTitle className="font-heading text-[#333333]">Global CDN</CardTitle>
                <CardDescription>
                  Lightning-fast QR code generation and scanning worldwide with our global infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right-delayed">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle">
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
  )
}

export default FeaturesSection;