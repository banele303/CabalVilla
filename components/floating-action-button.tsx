"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin,
  X,
  ChevronUp
} from "lucide-react"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Now",
      action: "tel:+27769596653",
      description: "+27 76 959 6653",
      color: "bg-red-500 hover:bg-red-600 text-white"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: "https://wa.me/27769596653",
      description: "Chat with us",
      color: "bg-emerald-500 hover:bg-emerald-600 text-white"
    },
    {
      icon: Mail,
      label: "Email",
      action: "mailto:info@cabalvilla.co.za",
      description: "Send Email",
      color: "bg-blue-500 hover:bg-blue-600 text-white"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      action: "#locations",
      description: "Get Directions",
      color: "bg-red-500 hover:bg-red-600 text-white"
    }
  ]

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 space-y-3">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-in slide-in-from-right duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="ml-auto shadow-lg border-0">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-medium text-sm">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </div>
                      <Button
                        size="sm"
                        className={`h-12 w-12 rounded-full ${option.color} shadow-lg`}
                        asChild
                      >
                        <Link href={option.action} target={option.action.startsWith('http') ? '_blank' : undefined}>
                          <option.icon className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-45' 
              : 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500'
          } text-white`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <Phone className="h-6 w-6" />
            </div>
          )}
        </Button>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 h-12 w-12 rounded-full bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground shadow-lg backdrop-blur-sm z-40"
          size="sm"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
