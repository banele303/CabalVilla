import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, UtensilsCrossed, Wine, Car, Music2, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Lumveleni Food, Drinks & Carwash | Branch",
  description:
    "Welcome to Lumveleni Food, Drinks & Carwash — delicious food, refreshing drinks, live music, and a sparkling clean car. Located next to Ngudza Primary School, Thohoyandou.",
}

const mapsLink = "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou"
const phone = "+27 76 959 6653"

export default function LumveleniBranchPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-amber-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black" />
        <div className="container grid lg:grid-cols-[auto,1fr] items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden ring-1 ring-border shadow-md">
              <Image src="/anotherlogo.jpeg" alt="Lumveleni Logo" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Lumveleni</h1>
              <p className="text-muted-foreground">Food, Drinks & Carwash</p>
            </div>
          </div>
          <div className="text-sm md:text-base text-muted-foreground lg:justify-self-end">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center"><MapPin className="mr-2 h-4 w-4" /> Next to Ngudza Primary School, Thohoyandou</span>
              <span className="inline-flex items-center"><Phone className="mr-2 h-4 w-4" /> {phone}</span>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black" asChild>
                <Link href={mapsLink} target="_blank">
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`tel:${phone.replace(/\s+/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-10">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Welcome to Lumveleni Food, Drinks, and Carwash</h2>
            <p className="text-muted-foreground">
              Located in Lumveleni, next to Ngudza Primary School, we are a vibrant spot where you can enjoy delicious food, refreshing drinks, and
              a sparkling clean vehicle. Our mission is to provide exceptional service, quality products, and a welcoming atmosphere.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-5">
            <h3 className="font-semibold mb-2">Our Story</h3>
            <p className="text-sm text-muted-foreground">
              Lumveleni was founded with a passion for serving our community the best food, drinks, and car care. We believe in a warm, friendly
              environment where everyone feels at home. Our team is dedicated to ensuring every visit is a memorable one.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-6">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2"><UtensilsCrossed className="h-5 w-5 text-yellow-500" /><span className="font-medium">Delicious Food</span></div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Kota (Bunny Chow)</li>
                <li>• Pap and meat (various)</li>
                <li>• Chicken & Chips</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2"><Wine className="h-5 w-5 text-yellow-500" /><span className="font-medium">Refreshing Drinks</span></div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Beers</li>
                <li>• Ciders</li>
                <li>• Wines</li>
                <li>• Soft drinks</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2"><Car className="h-5 w-5 text-yellow-500" /><span className="font-medium">Carwash</span></div>
              <p className="text-sm text-muted-foreground">Wash, Vacuum, Wax — for sedans, SUVs, vans, and bakkies. State-of-the-art equipment for a sparkling finish.</p>
            </div>
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2"><Music2 className="h-5 w-5 text-yellow-500" /><span className="font-medium">Live Music & Events</span></div>
              <p className="text-sm text-muted-foreground">Hosting local, provincial and national artists that bring people together.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Kota", "Pap & Meat", "Chicken & Chips", "Beers", "Ciders", "Wines", "Soft Drinks", "Wash & Vacuum", "Wax",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-yellow-400/15 text-yellow-700 border border-yellow-400/30">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Carwash CTA */}
      <section className="py-10">
        <div className="container rounded-2xl border bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-zinc-900 dark:to-zinc-900 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-1">Our Carwash Services</h3>
              <p className="text-muted-foreground text-sm md:text-base">Sedans, SUVs, trucks — we clean them all. Quick, careful, and thorough so you leave shining.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/carwash">
                  View Prices
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={mapsLink} target="_blank">
                  <MapPin className="mr-2 h-4 w-4" /> Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-10">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-2">Find Us</h3>
            <p className="text-sm text-muted-foreground">We\'re conveniently located next to Ngudza Primary School in Lumveleni.</p>
            <div className="mt-3 space-y-1 text-sm">
              <div>lumveleni food, drinks and carwash</div>
              <div>12/10/2/3(1562) ngudza farm 213</div>
              <div>Thohoyandou</div>
              <div>0950</div>
              <div>Vhembe</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild>
                <Link href={mapsLink} target="_blank"><MapPin className="mr-2 h-4 w-4" /> Open in Maps</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`tel:${phone.replace(/\s+/g, "")}`}><Phone className="mr-2 h-4 w-4" /> Call Now</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-2">Join Our Community</h3>
            <p className="text-sm text-muted-foreground">Follow us on social media to stay up-to-date on the latest news, promotions, and events. We can\'t wait to welcome you.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Facebook</Badge>
              <Badge>Instagram</Badge>
              <Badge>WhatsApp</Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
