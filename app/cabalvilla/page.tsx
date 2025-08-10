"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, UtensilsCrossed, Wine, ArrowRight, Car, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import React, { useState, useEffect } from "react"

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
						<Badge className="mb-6 bg-red-500/20 text-red-300 border-red-300/30 text-sm px-4 py-2">For Food & Drinks Lovers</Badge>
						<h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
							CabalVilla
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500">Tshivhulani</span>
						</h1>
						<p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
							Experience the ultimate destination for great food, vibrant nightlife, and premium car wash services. Where authentic flavors meet passionate hospitality in the heart of Tshivhulani.
						</p>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-8 text-sm sm:text-base text-white/90">
							<li className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-red-300"/> Traditional Pap & Meat</li>
							<li className="flex items-center gap-2"><Wine className="h-4 w-4 text-red-300"/> Premium Drinks & Wines</li>
							<li className="flex items-center gap-2"><Car className="h-4 w-4 text-red-300"/> Professional Car Wash</li>
							<li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-red-300"/> Family-Friendly Atmosphere</li>
						</ul>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button size="lg" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold shadow-lg cursor-pointer" asChild>
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
					<div className="mt-6 lg:mt-0">
						<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
							<h3 className="font-semibold text-lg mb-4 text-white">Why Choose CabalVilla?</h3>
							<div className="space-y-4 text-sm">
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-red-500/20">
										<UtensilsCrossed className="h-4 w-4 text-red-300" />
									</div>
									<div>
										<div className="font-medium text-white">Authentic Local Cuisine</div>
										<div className="text-white/80 text-xs">Traditional recipes with modern presentation</div>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-red-500/20">
										<Wine className="h-4 w-4 text-red-300" />
									</div>
									<div>
										<div className="font-medium text-white">Premium Beverages</div>
										<div className="text-white/80 text-xs">Carefully selected drinks and local favorites</div>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-red-500/20">
										<Car className="h-4 w-4 text-red-300" />
									</div>
									<div>
										<div className="font-medium text-white">Top-Notch Car Wash</div>
										<div className="text-white/80 text-xs">Professional service for a sparkling clean ride</div>
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

export default function CabalVillaBranchPage() {
	const menuItems = [
		{ category: "Traditional Food", items: [
			{ name: "Pap and Meat (Beef)", price: "R45 - R65", description: "Traditional pap served with tender beef cuts" },
			{ name: "Pap and Meat (Chicken)", price: "R35 - R55", description: "Traditional pap with grilled chicken portions" },
			{ name: "Pap and Meat (Pork)", price: "R40 - R60", description: "Traditional pap with succulent pork" },
			{ name: "Delicious Kota (Small)", price: "R25", description: "Fresh bunny chow with choice of fillings" },
			{ name: "Delicious Kota (Large)", price: "R35 - R45", description: "Large bunny chow perfect for sharing" },
			{ name: "Grilled Fish", price: "R50 - R70", description: "Fresh fish grilled to perfection" },
		]},
		{ category: "Beverages", items: [
			{ name: "Local Beers", price: "R15 - R25", description: "Castle, Black Label, and local favorites" },
			{ name: "Premium Beers", price: "R28 - R35", description: "Imported and craft beers" },
			{ name: "Ciders", price: "R18 - R28", description: "Refreshing fruit ciders" },
			{ name: "Wine (Glass)", price: "R25 - R45", description: "Selection of red and white wines" },
			{ name: "Wine (Bottle)", price: "R80 - R150", description: "Premium wine bottles" },
			{ name: "Soft Drinks", price: "R12 - R18", description: "Coca-Cola, Fanta, and fresh juices" },
		]},
		{ category: "Car Wash Services", items: [
			{ name: "Basic Wash", price: "R20 - R25", description: "Exterior rinse and wash" },
			{ name: "Full Service", price: "R40 - R70", description: "Interior and exterior cleaning" },
			{ name: "Premium Detail", price: "R60 - R150", description: "Complete detailing service" },
			{ name: "Engine Clean", price: "R20 - R30", description: "Professional engine bay cleaning" },
		]},
	]

	return (
		<main className="min-h-screen">
			<HeroSlider />

			{/* Address & Location */}
			<section className="py-8">
				<div className="container grid md:grid-cols-3 gap-8">
					<Card className="p-6">
						<CardHeader className="p-0 mb-4">
							<CardTitle className="text-xl flex items-center gap-2">
								<MapPin className="h-5 w-5 text-red-500" />
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
								<Phone className="h-5 w-5 text-red-500" />
								Contact
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

			{/* Menu & Prices */}
			<section id="menu" className="py-10">
				<div className="container">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Menu & Prices</h2>
					<div className="grid lg:grid-cols-3 gap-8">
						{menuItems.map((category) => (
							<Card key={category.category} className="p-6">
								<CardHeader className="p-0 mb-6">
									<CardTitle className="text-xl flex items-center gap-2">
										{category.category === "Traditional Food" ? (
											<UtensilsCrossed className="h-5 w-5 text-red-500" />
										) : category.category === "Beverages" ? (
											<Wine className="h-5 w-5 text-red-500" />
										) : (
											<Car className="h-5 w-5 text-red-500" />
										)}
										{category.category}
									</CardTitle>
								</CardHeader>
								<CardContent className="p-0 space-y-4">
									{category.items.map((item) => (
										<div key={item.name} className="flex justify-between items-start gap-4 p-3 rounded-lg border">
											<div className="flex-1">
												<h4 className="font-semibold text-sm">{item.name}</h4>
												<p className="text-xs text-muted-foreground">{item.description}</p>
											</div>
											<div className="font-bold text-red-600 text-sm">{item.price}</div>
										</div>
									))}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* What Makes Us Special */}
			<section className="py-10 bg-muted/30">
				<div className="container">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Makes CabalVilla Special</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="p-6 text-center">
							<CardHeader className="p-0 mb-4">
								<div className="mx-auto p-3 rounded-full bg-rose-100 w-fit">
									<UtensilsCrossed className="h-6 w-6 text-rose-600" />
								</div>
								<CardTitle className="text-lg">Authentic Cuisine</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-sm text-muted-foreground">
								Traditional recipes passed down through generations, prepared with love and authentic ingredients.
							</CardContent>
						</Card>
						<Card className="p-6 text-center">
							<CardHeader className="p-0 mb-4">
								<div className="mx-auto p-3 rounded-full bg-rose-100 w-fit">
									<Wine className="h-6 w-6 text-rose-600" />
								</div>
								<CardTitle className="text-lg">Premium Drinks</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-sm text-muted-foreground">
								Carefully curated selection of local and international beverages to complement your dining experience.
							</CardContent>
						</Card>
						<Card className="p-6 text-center">
							<CardHeader className="p-0 mb-4">
								<div className="mx-auto p-3 rounded-full bg-rose-100 w-fit">
									<Car className="h-6 w-6 text-rose-600" />
								</div>
								<CardTitle className="text-lg">Car Care Excellence</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-sm text-muted-foreground">
								Professional car wash services using quality products to keep your vehicle looking pristine.
							</CardContent>
						</Card>
						<Card className="p-6 text-center">
							<CardHeader className="p-0 mb-4">
								<div className="mx-auto p-3 rounded-full bg-rose-100 w-fit">
									<Phone className="h-6 w-6 text-rose-600" />
								</div>
								<CardTitle className="text-lg">Friendly Service</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-sm text-muted-foreground">
								Warm hospitality and attentive service that makes every visit feel like coming home.
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
