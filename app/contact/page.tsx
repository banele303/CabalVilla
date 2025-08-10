import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | CabalVilla",
  description: "Get in touch with CabalVilla for food, drinks, events, and premium carwash services in Tshivhulani and Lumveleni.",
}

const contactInfo = [
  { icon: Phone, title: "Call Us", primary: "+27 76 959 6653", action: "tel:+27769596653", color: "bg-yellow-400 text-black" },
  { icon: MessageCircle, title: "WhatsApp", primary: "+27 76 959 6653", action: "https://wa.me/27769596653", color: "bg-green-600 text-white" },
  { icon: Mail, title: "Email", primary: "info@cabalvilla.co.za", action: "mailto:info@cabalvilla.co.za", color: "bg-blue-500 text-white" },
]

const branches = [
  { name: "CabalVilla Tshivhulani", address: "3465 Makwarela, R523 • Makwarela Sibasa 0970 • 500m from Hayani Hospital", maps: "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523" },
  { name: "Lumveleni Food, Drinks & Carwash", address: "12/10/2/3(1562) Ngudza Farm 213 • Thohoyandou • 0950 • Vhembe (Next to Ngudza Primary School)", maps: "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img8.jpeg" alt="Contact CabalVilla" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative text-white text-center">
          <Badge className="mb-4 bg-yellow-400/20 text-yellow-300 border-yellow-300/30">We'd love to hear from you</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Contact CabalVilla</h1>
          <p className="text-white/90 max-w-2xl mx-auto">Bookings, events, menu questions or carwash—reach us anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300"><Link href="tel:+27769596653">Call Now</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10"><Link href="#branches">Find a Branch</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((c) => (
              <Card key={c.title} className="text-center">
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm ${c.color} mb-3`}>{c.primary}</div>
                  <Button asChild variant="outline"><Link href={c.action} target={c.action.startsWith('http') ? '_blank' : undefined}>Contact</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="branches" className="py-16 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Branches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((b) => (
              <Card key={b.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{b.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {b.address}</div>
                  <div className="flex gap-2">
                    <Button asChild size="sm"><Link href={b.maps} target="_blank">Get Directions</Link></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
