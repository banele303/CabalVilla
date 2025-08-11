import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

const branches = [
  {
    name: "CabalVilla Tshivhulani",
    tagline: "For Food & Drinks Lovers",
    address: "3465 Makwarela, R523 • Makwarela Sibasa 0970 • 500m from Hayani Hospital",
    maps: "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523",
    phone: "+27 76 959 6653",
  },
  {
    name: "Lumveleni Food, Drinks & Carwash",
    tagline: "Eat • Sip • Shine",
    address: "12/10/2/3(1562) Ngudza Farm 213 • Thohoyandou • 0950 • Vhembe (Next to Ngudza Primary School)",
    maps: "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou",
    phone: "+27 76 959 6653",
  },
  {
    name: "Cabal Maniini",
    tagline: "For Food & Drinks Lovers",
    address: "Maniini • Thohoyandou • Limpopo",
    maps: "https://www.google.com/maps?q=Maniini+Thohoyandou",
    phone: "+27 76 959 6653",
  },
]

export default function Branches() {
  return (
    <section id="locations" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Find Us</h2>
          <p className="text-muted-foreground mt-2">Three vibrant spots ready to welcome you.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Card key={b.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{b.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{b.tagline}</div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" /> {b.address}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" /> {b.phone}
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href={b.maps} target="_blank" className="inline-flex items-center text-primary hover:underline">
                    Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href={`tel:${b.phone.replace(/\s+/g, '')}`} className="inline-flex items-center text-primary hover:underline">
                    Call Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
