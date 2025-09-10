import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge, Check } from "lucide-react"
import { Button } from "../ui/button"


const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl text-[#333333] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 hover:border-[#4A90E2]/50 transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl text-[#333333]">Free</CardTitle>
                <div className="text-4xl font-bold text-[#333333] mt-4">$0</div>
                <CardDescription>Perfect for personal use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>5 Dynamic QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Standard templates</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-100 text-[#333333] hover:bg-gray-200 transition-all duration-300 hover:scale-105">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-[#4A90E2] relative animate-slide-in-up">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
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
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>100 Dynamic QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Password protection</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-[#4A90E2]/50 transition-all duration-300 hover:scale-105 animate-slide-in-right">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl text-[#333333]">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-[#333333] mt-4">$99</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Unlimited QR codes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[#50E3C2] mr-3 animate-checkmark" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-100 text-[#333333] hover:bg-gray-200 transition-all duration-300 hover:scale-105">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default PricingSection