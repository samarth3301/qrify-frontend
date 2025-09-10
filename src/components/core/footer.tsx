"use-client";

import { QrCode } from "lucide-react";

const FooterSection = () => (
      <footer className="bg-gray-50 py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="h-6 w-6 text-[#4A90E2] animate-float" />
                <span className="font-heading font-bold text-xl text-[#333333]">Qrify</span>
              </div>
              <p className="text-gray-600">The most powerful platform for creating and managing dynamic QR codes.</p>
            </div>

            <div className="animate-slide-in-up">
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#features" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-slide-in-up-delayed">
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#about" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="font-heading font-semibold text-[#333333] mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A90E2] transition-colors duration-300 hover:translate-x-1">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 animate-fade-in-up">
            <p>&copy; 2024 Qrify. All rights reserved.</p>
          </div>
        </div>
      </footer> 
  )


export default FooterSection