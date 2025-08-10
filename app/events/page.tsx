import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
  title: "Events | CabalVilla",
  description: "Live music, DJs and community events at CabalVilla.",
}

const events = [
  { title: "Friday Night Live DJ", date: "Every Friday", desc: "Afro-house and Amapiano vibes.", image: "/img8.jpeg" },
  { title: "Local Artists Showcase", date: "Monthly", desc: "Local, provincial & national artists.", image: "/img7.jpeg" },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/stella.jpeg" alt="Events" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Events</h1>
          <p className="text-white/90 mt-2 max-w-2xl">Good music, great people. See what’s on.</p>
          <div className="mt-4">
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
              <Link href="/contact">Book an Event</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <Card key={e.title} className="overflow-hidden">
              <div className="relative h-56">
                <Image src={e.image} alt={e.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{e.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">{e.date}</div>
                <p className="mt-2">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <Card>
            <CardHeader>
              <CardTitle>House Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>Right of admission reserved</li>
                <li>No underage drinking</li>
                <li>Respect our neighbors and keep it friendly</li>
                <li>Management may request ID at any time</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
