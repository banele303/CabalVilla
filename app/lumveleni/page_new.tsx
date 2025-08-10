"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, UtensilsCrossed, Wine, Car, Music2, ArrowRight, ChevronLeft, ChevronRight, Waves, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import React, { useState, useEffect } from "react"

export const metadata = {
  title: "Lumveleni Food, Drinks & Carwash | Branch",
  description:
    "Welcome to Lumveleni Food, Drinks & Carwash — delicious food, refreshing drinks, live music, and a sparkling clean car. Located next to Ngudza Primary School, Thohoyandou.",
}

const mapsLink = "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou"
const phone = "+27 76 959 6653"

const slides = [
  { src: "/car-wash.jpeg", alt: "Lumveleni Car Wash" },
  { src: "/friess.jpeg", alt: "Fresh food at Lumveleni" },
  { src: "/drinks.jpeg", alt: "Refreshing drinks" },
  { src: "/car-wash2.jpeg", alt: "Professional car wash service" },
]

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [isPaused])

  const handlePrev = () => setIndex((p) => (p - 1 + slides.length) % slides.length)
  const handleNext = () => setIndex((p) => (p + 1) % slides.length)

  return (
    <section
      className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh] py-10 md:py-14 flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div key={s.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}>
            <Image src={s.src} alt={s.alt} fill priority={i === 0} quality={95} sizes="100vw" className="object-cover object-center" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3">
        <button
          onClick={handlePrev}
          className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all cursor-pointer ${
              i === index ? "bg-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-black/40" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="text-white text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden ring-2 ring-yellow-400/50 shadow-lg">
                <Image src="/anotherlogo.jpeg" alt="Lumveleni Logo" fill className="object-cover" priority />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Lumveleni</h1>
                <p className="text-yellow-300 font-medium">Food, Drinks & Carwash</p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
              Your complete destination for delicious food, refreshing drinks, live music entertainment, and professional car wash services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-black font-semibold shadow-lg cursor-pointer" asChild>
                <Link href="#services">
                  View Services & Prices
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white shadow-lg cursor-pointer" asChild>
                <Link href={mapsLink} target="_blank">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LumveleniBranchPage() {
  const foodMenuItems = [
    { name: "Pap & Meat (Various)", price: "R30 - R60", description: "Traditional pap with choice of meat" },
    { name: "Delicious Kota", price: "R20 - R40", description: "Fresh bunny chow with fillings" },
    { name: "Grilled Chicken", price: "R45 - R85", description: "Perfectly grilled chicken portions" },
    { name: "Fish & Chips", price: "R35 - R55", description: "Fresh fish with crispy chips" },
  ]

  const drinkMenuItems = [
    { name: "Cold Beers", price: "R12 - R30", description: "Ice cold beers on tap and bottled" },
    { name: "Wine Selection", price: "R20 - R120", description: "Quality wines by glass or bottle" },
    { name: "Soft Drinks", price: "R8 - R15", description: "Refreshing sodas and juices" },
    { name: "Traditional Drinks", price: "R10 - R25", description: "Local favorites and specialties" },
  ]

  const carWashServices = [
    { name: "Basic Wash", price: "R35", description: "Exterior wash and rinse" },
    { name: "Full Service", price: "R65", description: "Exterior wash, interior vacuum, windows" },
    { name: "Premium Detail", price: "R120", description: "Complete detail with wax and polish" },
    { name: "Engine Clean", price: "R45", description: "Professional engine bay cleaning" },
  ]

  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Address & Contact */}
      <section className="py-8">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                Location & Address
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3 text-sm text-muted-foreground">
              <div>Next to Ngudza Primary School</div>
              <div>Thohoyandou, Limpopo</div>
              <div className="font-medium text-foreground">Easy to find and accessible location with ample parking space.</div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <div className="text-lg font-semibold">{phone}</div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href={`tel:${phone.replace(/\s+/g, "")}`}>Call Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={mapsLink} target="_blank">Directions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Food Menu */}
      <section id="services" className="py-10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Food Menu & Prices</h2>
          <Card className="p-6 mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <UtensilsCrossed className="h-6 w-6 text-yellow-500" />
                Delicious Food
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 gap-4">
                {foodMenuItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-yellow-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Drinks Menu */}
          <Card className="p-6 mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Wine className="h-6 w-6 text-yellow-500" />
                Refreshing Drinks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 gap-4">
                {drinkMenuItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-yellow-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Car Wash Services */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Car className="h-6 w-6 text-yellow-500" />
                Professional Car Wash Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 gap-4">
                {carWashServices.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-yellow-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features & Experience */}
      <section className="py-10 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Lumveleni Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-yellow-500" />
                  Live Entertainment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                Enjoy live music performances and entertainment while you dine and relax. Our vibrant atmosphere creates the perfect setting for memorable evenings.
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  Premium Service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                We pride ourselves on delivering exceptional service across all our offerings - from fresh food preparation to professional car care that leaves your vehicle spotless.
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-yellow-500" />
                  Community Hub
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                More than just a restaurant and car wash - we're a community gathering place where friends meet, families celebrate, and memories are made.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "/car-wash.jpeg", alt: "Car wash service" },
              { src: "/friess.jpeg", alt: "Fresh food" },
              { src: "/car-wash2.jpeg", alt: "Professional cleaning" },
              { src: "/car-wash4.jpeg", alt: "Quality service" },
              { src: "/car-wash5.jpeg", alt: "Clean cars" },
              { src: "/drinks.jpeg", alt: "Refreshing beverages" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" quality={95} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
