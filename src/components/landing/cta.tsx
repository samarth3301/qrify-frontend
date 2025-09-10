import { Button } from "../ui/button";

const CtaSection = () => {
  return (

      <section className="py-20 bg-[#4A90E2] animate-fade-in-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4 animate-slide-up">
            Ready to Transform Your QR Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-up-delayed">
            Join thousands of businesses using Qrify to create engaging, trackable QR experiences.
          </p>
          <Button size="lg" className="bg-white text-[#4A90E2] hover:bg-gray-100 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-gentle">
            Start Your Free Trial
          </Button>
        </div>
      </section> 
    )
}

export default CtaSection;