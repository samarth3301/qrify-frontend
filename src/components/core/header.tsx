"use-client";

import { QrCode } from "lucide-react";
import { Button } from "../ui/button";

const HeaderSection = () => {
  return (
      <header className="border-b border-gray-100 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-[#4A90E2] animate-float" />
            <span className="font-heading font-bold text-2xl text-[#333333]">Qrify</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#333333] hover:text-[#4A90E2] transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="#pricing" className="text-[#333333] hover:text-[#4A90E2] transition-all duration-300 hover:scale-105">
              Pricing
            </a>
            <a href="#about" className="text-[#333333] hover:text-[#4A90E2] transition-all duration-300 hover:scale-105">
              About
            </a>
            <Button
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </header>
  )
}

export default HeaderSection;
