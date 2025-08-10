import Image from "next/image";
import { ArrowLeft, MapPin, Phone, Mail, UtensilsCrossed, Wine, Car, Music2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img7.jpeg" alt="CabalVilla vibes" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative text-white">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-yellow-400/20 text-yellow-300 border-yellow-300/30">For Food & Drinks Lovers</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">About CabalVilla</h1>
            <p className="text-lg text-white/90">We’re a vibrant home for great food, refreshing drinks, live music, and premium carwash care. Where flavor meets passion and memories are made.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">CabalVilla Tshivhulani started with a simple idea: bring people together around delicious food, good music, and warm hospitality. From our signature Kota and Pap & Meat to an inviting nightlife scene, we’ve become the go‑to spot for friends and family.</p>
              <p className="text-muted-foreground">We’ve since grown with a second branch, Lumveleni Food, Drinks & Carwash, serving the community next to Ngudza Primary School with the same passion and quality—plus our sparkling wash-and-shine service for all vehicles.</p>
              <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
                <div className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-primary" /> Kota, Pap & Meat</div>
                <div className="flex items-center gap-2"><Wine className="h-4 w-4 text-primary" /> Beers, Ciders, Wines</div>
                <div className="flex items-center gap-2"><Car className="h-4 w-4 text-primary" /> Premium Carwash</div>
                <div className="flex items-center gap-2"><Music2 className="h-4 w-4 text-primary" /> Live Music & Events</div>
              </div>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <Image src="/cool-meal2.jpeg" alt="Delicious meals" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CabalVilla Tshivhulani</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 3465 Makwarela, R523, Makwarela Sibasa 0970. 500m from Hayani Hospital.</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +27 76 959 6653</div>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm"><Link href="https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523" target="_blank">Directions</Link></Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Lumveleni Food, Drinks & Carwash</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 12/10/2/3(1562) Ngudza Farm 213, Thohoyandou, 0950, Vhembe. Next to Ngudza Primary School.</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +27 76 959 6653</div>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm"><Link href="https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou" target="_blank">Directions</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carwash */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 rounded-xl overflow-hidden order-2 lg:order-1">
              <Image src="/car-wash5.jpeg" alt="Premium carwash" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Premium Carwash Care</h2>
              <p className="text-muted-foreground mb-4">We’re committed to delivering a sparkling clean ride every time. From sedans to SUVs and trucks, our friendly team provides interior and exterior care you can trust.</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Sparkles className="h-4 w-4 text-primary" /> Hand wash • Interior clean • Wax & Shine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="py-16 bg-muted/40">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-3">Come Taste the Difference</h2>
          <p className="text-muted-foreground mb-6">Join our community and follow CabalVilla for the latest news, promotions, and events.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link href="tel:+27769596653">Call: +27 76 959 6653</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="#locations">Find a Branch</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
