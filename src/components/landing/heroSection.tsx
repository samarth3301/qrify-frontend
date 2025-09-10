import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (

      <section className="py-20 px-4 animate-fade-in-up">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#50E3C2]/20 text-[#0F766E] border-[#50E3C2]/30 animate-pulse-gentle">
            Dynamic QR Generation Platform
          </Badge>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-[#333333] mb-6 text-balance animate-slide-up">
            Create Dynamic QR Codes That <span className="text-[#4A90E2] animate-text-shimmer">Actually Work</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty animate-slide-up-delayed">
            Generate, customize, and manage QR codes that adapt to your needs. Track performance, update content, and
            engage your audience with professional QR solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed-2">
            <Button size="lg" className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Creating Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
  )
}

export default HeroSection;