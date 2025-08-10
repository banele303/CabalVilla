"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, UtensilsCrossed, Wine, ArrowRight, Car, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import React, { useState, useEffect } from "react"

export const metadata = {
  title: "CabalVilla | For Food & Drinks Lovers",
  description:
    "CabalVilla Tshivhulani — great food, vibrant night life, and top notch car wash. 3465 Makwarela, R523. 500m from Hayani Hospital.",
}

const mapsLink = "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523"
const phone = "+27 76 959 6653"

const slides = [
  { src: "/cool-meal.jpeg", alt: "Delicious food at CabalVilla" },
  { src: "/drinks.jpeg", alt: "Refreshing drinks" },
  { src: "/stella.jpeg", alt: "Night life vibes" },
  { src: "/hero2.jpeg", alt: "CabalVilla atmosphere" },
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
                <Image src="/logo.jpeg" alt="CabalVilla Logo" fill className="object-cover" priority />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">CabalVilla</h1>
                <p className="text-yellow-300 font-medium">For Food & Drinks Lovers</p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
              Experience the ultimate of great food, vibrant Night Life, and Top notch car wash service. Where flavor meets passion!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-black font-semibold shadow-lg cursor-pointer" asChild>
                <Link href="#menu">
                  View Menu & Prices
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

export default function CabalVillaBranchPage() {
  const menuItems = [
    { category: "Food", items: [
      { name: "Pap and Meat (Various)", price: "R35 - R65", description: "Traditional pap served with choice of meat" },
      { name: "Delicious Kota", price: "R25 - R45", description: "Fresh bunny chow with fillings" },
    ]},
    { category: "Drinks", items: [
      { name: "Beer", price: "R15 - R35", description: "Cold beers on tap and bottled" },
      { name: "Ciders", price: "R18 - R28", description: "Refreshing ciders" },
      { name: "Wine", price: "R25 - R150", description: "Selection of wines by glass or bottle" },
    ]},
  ]

  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Address & Location */}
      <section className="py-8">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                Address & Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3 text-sm text-muted-foreground">
              <div>3465 Makwarela, R523</div>
              <div>Makwarela Sibasa 0970</div>
              <div className="font-medium text-foreground">Makwarela Tshivhulani 500m From Hayani Hospital R523 Road.</div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                Contact
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

      {/* Menu & Prices */}
      <section id="menu" className="py-10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Menu & Prices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category) => (
              <Card key={category.category} className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {category.category === "Food" ? <UtensilsCrossed className="h-6 w-6 text-yellow-500" /> : <Wine className="h-6 w-6 text-yellow-500" />}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="font-bold text-yellow-600">{item.price}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-10 bg-muted/30">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              CabalVilla Tshivhulani is the best place to be, where flavor meets passion! We're a team dedicated to serving up delicious fresh dishes
              that will leave you craving for more. Our mission is to provide a warm and welcoming atmosphere where friends and family can gather to
              share a meal, drinks and create lasting memories. Come taste the difference for yourself.
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-yellow-500" />
                Car Wash
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              We're committed to delivering a sparkling clean ride every time. Our friendly team is dedicated to providing exceptional service, so you
              can trust us with your car's CARE. Top notch service for a sparkling clean ride.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "/cool-meal.jpeg", alt: "Cool meal 1" },
              { src: "/cool-meal2.jpeg", alt: "Cool meal 2" },
              { src: "/cool-meal4.jpeg", alt: "Cool meal 3" },
              { src: "/cools.jpeg", alt: "Cool drinks" },
              { src: "/drinks.jpeg", alt: "Refreshing drinks" },
              { src: "/stella.jpeg", alt: "Night life vibes" },
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
