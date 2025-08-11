import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, Clock, Car, UtensilsCrossed, Wine } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

export const metadata = {
  title: "Branches | CabalVilla",
  description: "Find our branches: CabalVilla Tshivhulani and Lumveleni Food, Drinks & Carwash.",
}

const branches = [
  {
    branch: "Branch 1",
    name: "CabalVilla Tshivhulani",
    tagline: "For Food & Drinks Lovers",
    address: "3465 Makwarela, R523 · Makwarela Sibasa 0970 · 500m from Hayani Hospital",
    maps: "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523",
    phone: "+27 76 959 6653",
    hours: [
      { day: "Mon–Thu", time: "10:00 – 22:00" },
      { day: "Fri–Sat", time: "10:00 – 01:00" },
      { day: "Sun", time: "10:00 – 21:00" },
    ],
    products: [
      "Pap & Meat",
      "Kota",
      "Burgers",
      "Chicken & Chips",
      "Wors & Russians",
      "Beers & Ciders",
      "Wines & Spirits",
      "Soft Drinks",
    ],
    hasCarwash: false,
  },
  {
    branch: "Branch 2",
    name: "Lumveleni Food, Drinks & Carwash",
    tagline: "Eat • Sip • Shine",
    address: "12/10/2/3(1562) Ngudza Farm 213 · Thohoyandou · 0950 · Vhembe (Next to Ngudza Primary School)",
    maps: "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou",
    phone: "+27 76 959 6653",
    hours: [
      { day: "Mon–Thu", time: "10:00 – 22:00" },
      { day: "Fri–Sat", time: "10:00 – 01:00" },
      { day: "Sun", time: "10:00 – 21:00" },
    ],
    products: [
      "Pap & Meat",
      "Kota",
      "Chicken & Chips",
      "Wors & Russians",
      "Beers & Ciders",
      "Wines & Spirits",
      "Soft Drinks",
      "Carwash: Wash, Vacuum, Wax",
    ],
    hasCarwash: true,
  },
  {
    branch: "Branch 3",
    name: "Cabal Maniini",
    tagline: "For Food & Drinks Lovers",
    address: "Maniini · Thohoyandou · Limpopo",
    maps: "https://www.google.com/maps?q=Maniini+Thohoyandou",
    phone: "+27 76 959 6653",
    hours: [
      { day: "Mon–Thu", time: "10:00 – 22:00" },
      { day: "Fri–Sat", time: "10:00 – 01:00" },
      { day: "Sun", time: "10:00 – 21:00" },
    ],
    products: [
      "Pap & Meat",
      "Kota",
      "Chicken & Chips",
      "Wors & Russians",
      "Beers & Ciders",
      "Wines & Spirits",
      "Soft Drinks",
    ],
    hasCarwash: false,
  },
]

export default function BranchesPage() {
  return (
    <main className="min-h-screen">
      <section className="py-14">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Branches</h1>
          <p className="text-muted-foreground">See each branch clearly labeled with its details.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container grid md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <Card key={b.name}>
              <CardHeader>
                <CardTitle className="text-xl">{b.branch}: {b.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{b.tagline}</div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {b.address}</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {b.phone}</div>

                <div className="pt-1">
                  <div className="font-medium mb-1 flex items-center gap-2"><Clock className="h-4 w-4" /> Opening Hours</div>
                  <ul className="grid grid-cols-2 gap-1">
                    {b.hours.map((h) => (
                      <li key={h.day} className="flex justify-between">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <div className="font-medium mb-1 flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <Wine className="h-4 w-4" />
                    {b.hasCarwash && <Car className="h-4 w-4" />}
                    Products
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {b.products.map((p) => (
                      <Badge key={p} variant="secondary" className="bg-yellow-400/15 text-yellow-700 border border-yellow-400/30">
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  {/* Deep branch pages */}
                  <Link href={b.name.startsWith("Lumveleni") ? "/lumveleni" : b.name.startsWith("Cabal Maniini") ? "/maniini" : "/cabalvilla"} className="inline-flex items-center text-primary hover:underline">
                    View Branch Page <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="/menu" className="inline-flex items-center text-primary hover:underline">
                    View Menu <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  {b.hasCarwash && (
                    <Link href="/carwash" className="inline-flex items-center text-primary hover:underline">
                      Carwash Prices <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
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
      
      <Footer />
    </main>
  )
}
