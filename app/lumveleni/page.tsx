"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, UtensilsCrossed, Wine, Car, Music2, ArrowRight, ChevronLeft, ChevronRight, Waves, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import React, { useState, useEffect } from "react"

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
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer pointer-events-auto"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all cursor-pointer ${
              i === index ? "bg-red-500 ring-2 ring-red-400 ring-offset-2 ring-offset-black/40" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="text-white text-center lg:text-left">
            <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-300/30 text-sm px-4 py-2">Food, Drinks & Carwash</Badge>
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Lumveleni
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500">Eat • Sip • Shine</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
              Your complete destination for delicious food, refreshing drinks, live music entertainment, and professional car wash services. Where community meets quality in Thohoyandou.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-8 text-sm sm:text-base text-white/90">
              <li className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-red-300"/> Fresh Local Cuisine</li>
              <li className="flex items-center gap-2"><Wine className="h-4 w-4 text-red-300"/> Premium Beverages</li>
              <li className="flex items-center gap-2"><Car className="h-4 w-4 text-red-300"/> Professional Car Wash</li>
              <li className="flex items-center gap-2"><Music2 className="h-4 w-4 text-red-300"/> Live Entertainment</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold shadow-lg cursor-pointer" asChild>
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
          <div className="mt-6 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-4 text-white">The Lumveleni Difference</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-red-500/20">
                    <UtensilsCrossed className="h-4 w-4 text-red-300" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Fresh Daily Preparations</div>
                    <div className="text-white/80 text-xs">Made fresh daily with quality ingredients</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-red-500/20">
                    <Music2 className="h-4 w-4 text-red-300" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Live Entertainment</div>
                    <div className="text-white/80 text-xs">Regular live music and community events</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-red-500/20">
                    <Sparkles className="h-4 w-4 text-red-300" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Premium Car Care</div>
                    <div className="text-white/80 text-xs">Professional detailing and wash services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LumveleniBranchPage() {
  const foodMenuItems = [
    { name: "Pap & Meat (Beef)", price: "R40 - R60", description: "Traditional pap with tender beef cuts" },
    { name: "Pap & Meat (Chicken)", price: "R30 - R50", description: "Traditional pap with grilled chicken" },
    { name: "Pap & Meat (Pork)", price: "R35 - R55", description: "Traditional pap with succulent pork" },
    { name: "Delicious Kota (Small)", price: "R20", description: "Fresh bunny chow with choice of fillings" },
    { name: "Delicious Kota (Large)", price: "R30 - R40", description: "Large bunny chow perfect for sharing" },
    { name: "Grilled Chicken (Full)", price: "R65 - R85", description: "Perfectly grilled whole chicken" },
    { name: "Grilled Chicken (Half)", price: "R35 - R45", description: "Half chicken grilled to perfection" },
    { name: "Fish & Chips", price: "R40 - R55", description: "Fresh fish with crispy golden chips" },
    { name: "Beef Stew", price: "R45 - R65", description: "Hearty beef stew with vegetables" },
    { name: "Vetkoek & Mince", price: "R25 - R35", description: "Traditional vetkoek with savory mince" },
  ]

  const drinkMenuItems = [
    { name: "Local Beers", price: "R12 - R25", description: "Castle, Black Label, Carling Black Label" },
    { name: "Premium Beers", price: "R25 - R30", description: "Imported and craft beer selection" },
    { name: "Ciders", price: "R15 - R28", description: "Savanna, Hunter's, and fruit ciders" },
    { name: "Wine (Glass)", price: "R20 - R35", description: "Quality red and white wines" },
    { name: "Wine (Bottle)", price: "R70 - R120", description: "Premium wine bottles for sharing" },
    { name: "Soft Drinks", price: "R8 - R15", description: "Coca-Cola products and fresh juices" },
    { name: "Traditional Drinks", price: "R10 - R25", description: "Mageu, Amasi, and local specialties" },
    { name: "Hot Beverages", price: "R8 - R18", description: "Coffee, tea, and hot chocolate" },
  ]

  const carWashServices = [
    { name: "Basic Wash (Light Vehicle)", price: "R20", description: "Exterior wash and rinse" },
    { name: "Basic Wash (4x4/SUV)", price: "R25", description: "Exterior wash for larger vehicles" },
    { name: "In & Out (Light Vehicle)", price: "R40", description: "Exterior wash plus interior vacuum" },
    { name: "In & Out (4x4/SUV)", price: "R50", description: "Complete cleaning for SUVs" },
    { name: "Full Service (Light Vehicle)", price: "R60", description: "Complete detail with wax" },
    { name: "Full Service (4x4/SUV)", price: "R70", description: "Premium detailing service" },
    { name: "Engine Clean", price: "R20 - R30", description: "Professional engine bay cleaning" },
    { name: "Tyre Cleaning", price: "R20 - R25", description: "Deep clean and shine for tyres" },
  ]

  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Address & Contact */}
      <section className="py-8">
        <div className="container grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
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
                <Phone className="h-5 w-5 text-red-500" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <div className="text-lg font-semibold">{phone}</div>
              <div>
                <span className="block text-xs text-muted-foreground">Email</span>
                <Link href="mailto:info@cabalvilla.co.za" className="text-sm underline underline-offset-4">info@cabalvilla.co.za</Link>
              </div>
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
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl">Working Hours</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2 text-sm text-muted-foreground">
              <div>Mon - Wed: 08:00AM - 10:00PM</div>
              <div>Thur: 08:00AM - 00:00AM</div>
              <div>Fri - Sun: 08:00AM - 02:00AM</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Food Menu */}
      <section id="services" className="py-10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Complete Services & Prices</h2>
          <Card className="p-6 mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <UtensilsCrossed className="h-6 w-6 text-red-500" />
                Delicious Food Menu
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodMenuItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-red-600 text-sm">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Drinks Menu */}
          <Card className="p-6 mb-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Wine className="h-6 w-6 text-red-500" />
                Refreshing Beverages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {drinkMenuItems.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-red-600 text-sm">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Car Wash Services */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Car className="h-6 w-6 text-red-500" />
                Professional Car Wash Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {carWashServices.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="font-bold text-red-600 text-sm">{item.price}</div>
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
                  <Music2 className="h-5 w-5 text-red-500" />
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
                  <Sparkles className="h-5 w-5 text-red-500" />
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
                  <Waves className="h-5 w-5 text-red-500" />
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
          <div className="text-center mt-6">
            <Button asChild className="bg-gradient-to-r from-red-500 to-rose-600 text-white">
              <Link href="/gallery">View more</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
