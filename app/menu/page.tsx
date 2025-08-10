import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Menu from "@/components/menu"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Sparkles, Wine, Clock, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Menu | CabalVilla",
  description: "Explore CabalVilla's full menu: Chicken Dust, Stews, Kota, Extras, soft drinks, beers, ciders, gin, wine, whisky.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Modern Hero */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src="/cool-meal.jpeg" alt="CabalVilla Menu" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="container relative text-white">
          <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-300/30">Our Signature Menu</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Eat. Sip. Shine.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500">CabalVilla Menu</span>
          </h1>
          <p className="text-white/90 mt-3 max-w-2xl">
            Authentic flavors, generous portions, great value. From Pap & Meat to Kota and the coldest drinks.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold" asChild>
              <a href="#full-menu" className="cursor-pointer">View Full Menu <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/20" asChild>
              <a href="#specials" className="cursor-pointer">Today’s Specials</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Pap & Meat</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Kota</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Grilled Chicken</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Fries</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Beers & Ciders</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Wines</span>
          </div>
        </div>
      </section>

      {/* Featured Picks */}
      <section className="py-10">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Picks</h2>
            <Badge variant="secondary" className="bg-rose-100 text-rose-800 dark:bg-red-500/20 dark:text-red-300">Chef’s Choice</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*
              { src: "/cool-meal2.jpeg", title: "Pap & Beef", price: "R55" },
              { src: "/friess.jpeg", title: "Crispy Fries", price: "R20" },
              { src: "/chicken3.jpeg", title: "Quarter Chicken", price: "R45" },
              { src: "/cool-meal4.jpeg", title: "Kota Deluxe", price: "R35" },
            ].map((item) => (
              <Card key={item.title} className="overflow-hidden group">
                <div className="relative h-40">
                  <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-red-300 text-sm">{item.price}</div>
                  </div>
                </div>
              </Card>
            ))}
            */}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section id="full-menu" className="pt-2 pb-6">
        <Menu />
      </section>

      {/* Info Cards */}
      <section id="specials" className="py-12">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative">
            <CardHeader className="pb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-red-500" />
              <CardTitle>Daily Specials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon: Kota + 500ml Water – R35</li>
                <li>Wed: Quarter Chicken + Pap – R55</li>
                <li>Fri: Happy Hour 5–7pm</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-red-500" />
              <CardTitle>Allergens & Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Please inform us of any allergies. Some items may contain gluten, dairy, or nuts.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 flex items-center gap-2">
              <Wine className="h-5 w-5 text-red-500" />
              <CardTitle>Make it a Combo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Add chips or salad and a soft drink to any meal and save.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 flex items-center gap-2">
              <Clock className="h-5 w-5 text-red-500" />
              <CardTitle>Hours & Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">Open daily • 9:00 – 22:00</div>
              <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><MapPin className="h-4 w-4" /> Tshivhulani & Lumveleni</div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
