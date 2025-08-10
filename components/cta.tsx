import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-construction-yellow via-construction-orange to-construction-dark-orange text-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Start Your{" "}
            <span className="text-white">
              Construction Project?
            </span>
          </h2>
          <p className="mb-8 text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Partner with Elite Construction & Engineering for professional services that deliver exceptional quality,
            reliability, and value. Let's bring your construction vision to life with expert craftsmanship.
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="group shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-black hover:bg-white/90" asChild>
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-black text-black hover:bg-black/10 shadow-lg group"
              asChild
            >
              <Link href="tel:+27832225674">
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Call: +27 83 222 5674
              </Link>
            </Button>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <a 
              href="tel:+27634582860" 
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 group"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Call Now</span>
            </a>
            <a 
              href="https://wa.me/27634582860" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 group"
            >
              <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a 
              href="mailto:info@ecomax-manufacturing.com"
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="mb-4 text-xl md:text-2xl font-semibold">Stay Updated</h3>
            <p className="mb-6 text-primary-foreground/80">
              Get the latest news, product updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/30 transition-colors"
              />
              <Button variant="secondary" className="shrink-0 group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/70">
              By subscribing, you agree to receive marketing communications from Ecomax. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

