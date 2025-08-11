import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Locations | CabalVilla",
  description: "Find CabalVilla branches in Tshivhulani and Lumveleni.",
}

const branches = [
  {
    name: "CabalVilla Tshivhulani",
    address: "3465 Makwarela, R523 · Makwarela Sibasa 0970 · 500m from Hayani Hospital",
    maps: "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523",
    phone: "+27 76 959 6653",
  },
  {
    name: "Lumveleni Food, Drinks & Carwash",
    address: "12/10/2/3(1562) Ngudza Farm 213 · Thohoyandou · 0950 · Vhembe (Next to Ngudza Primary School)",
    maps: "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou",
    phone: "+27 76 959 6653",
  },
  {
    name: "Cabal Maniini",
    address: "Maniini · Thohoyandou · Limpopo",
    maps: "https://www.google.com/maps?q=Maniini+Thohoyandou",
    phone: "+27 76 959 6653",
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-14">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Locations</h1>
          <p className="text-muted-foreground">We can’t wait to welcome you.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container grid md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <Card key={b.name}>
              <CardHeader>
                <CardTitle className="text-xl">{b.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {b.address}</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {b.phone}</div>
                <div className="flex gap-2 pt-2">
                  <Link href={b.maps} target="_blank" className="inline-flex items-center text-primary hover:underline">
                    Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href={`tel:${b.phone.replace(/\s+/g, '')}`} className="inline-flex items-center text-primary hover:underline">
                    Call <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
