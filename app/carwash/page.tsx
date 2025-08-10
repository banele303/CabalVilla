"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Car, Sparkles, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"
import React, { useState, useEffect } from "react"

const slides = [
	{ src: "/car-wash.jpeg", alt: "Professional car wash service" },
	{ src: "/car-wash2.jpeg", alt: "Premium car detailing" },
	{ src: "/car-wash4.jpeg", alt: "Sparkling clean results" },
	{ src: "/car-wash5.jpeg", alt: "Quality car care" },
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
			className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] py-14 md:py-20 flex items-center"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="absolute inset-0 z-0">
				{slides.map((s, i) => (
					<div
						key={s.src}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							i === index ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={s.src}
							alt={s.alt}
							fill
							priority={i === 0}
							quality={95}
							sizes="100vw"
							className="object-cover object-center"
						/>
					</div>
				))}
				<div className="absolute inset-0 bg-black/70" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
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
							i === index
								? "bg-red-500 ring-2 ring-red-400 ring-offset-2 ring-offset-black/40"
								: "bg-white/70 hover:bg-white"
						}`}
					/>
				))}
			</div>

			<div className="container relative z-10">
				<div className="grid lg:grid-cols-2 items-center gap-8">
					<div className="text-white text-center lg:text-left">
						<div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
							<div className="p-4 rounded-full bg-red-500/20 border border-red-500/30">
								<Car className="h-8 w-8 text-red-400" />
							</div>
							<div>
								<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
									Premium
								</h1>
								<p className="text-red-300 font-medium text-xl">
									Car Wash Services
								</p>
							</div>
						</div>
						<p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
							Professional car wash and detailing services at both our locations.
							From quick washes to premium detailing, we make your ride shine.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								size="lg"
								className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold shadow-lg cursor-pointer"
								asChild
							>
								<Link href="#services">
									View Services & Prices
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								size="lg"
								className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white shadow-lg cursor-pointer"
								asChild
							>
								<Link href="/branches">
									<MapPin className="mr-2 h-4 w-4" />
									Find Locations
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const rows = [
	{
		type: "Light Vehicle",
		go: "R20",
		inOut: "R40",
		full: "R60",
		tyres: "R20",
		engineChem: "R20",
		engineNoChem: "R60",
	},
	{
		type: "4x4 / SUV / Bakkies / Taxi",
		go: "R25",
		inOut: "R50",
		full: "R70",
		tyres: "R25",
		engineChem: "R20",
		engineNoChem: "R60",
	},
	{
		type: "Mini Bus",
		go: "R30",
		inOut: "R70",
		full: "R80",
		tyres: "R30",
		engineChem: "R20",
		engineNoChem: "R60",
	},
	{
		type: "Small Truck",
		go: "R50",
		inOut: "R100",
		full: "R150",
		tyres: "R45",
		engineChem: "R30",
		engineNoChem: "R70",
	},
	{
		type: "Tipper Truck",
		go: "R80",
		inOut: "R160",
		full: "R200",
		tyres: "R75",
		engineChem: "R30",
		engineNoChem: "R70",
	},
	{
		type: "TLB",
		go: "R90",
		inOut: "R180",
		full: "R250",
		tyres: "R85",
		engineChem: "R30",
		engineNoChem: "R80",
	},
	{
		type: "Bus",
		go: "R140",
		inOut: "R280",
		full: "R350",
		tyres: "R135",
		engineChem: "R40",
		engineNoChem: "R90",
	},
]

export default function CarwashPage() {
	return (
		<main className="min-h-screen">
			<HeroSlider />

			{/* Locations */}
			<section className="py-8">
				<div className="container">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
						Our Car Wash Locations
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card className="p-6">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-xl flex items-center gap-2">
									<MapPin className="h-5 w-5 text-red-500" />
									CabalVilla Tshivhulani
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 space-y-3">
								<div className="text-sm text-muted-foreground">
									<div>3465 Makwarela, R523</div>
									<div>Makwarela Sibasa 0970</div>
									<div className="font-medium text-foreground mt-2">
										500m From Hayani Hospital R523 Road
									</div>
								</div>
								<div className="flex gap-2">
									<Button size="sm" asChild>
										<Link href="/cabalvilla">View Branch</Link>
									</Button>
									<Button size="sm" variant="outline" asChild>
										<Link
											href="https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523"
											target="_blank"
										>
											<MapPin className="mr-1 h-3 w-3" />
											Directions
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="p-6">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-xl flex items-center gap-2">
									<MapPin className="h-5 w-5 text-red-500" />
									Lumveleni Branch
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 space-y-3">
								<div className="text-sm text-muted-foreground">
									<div>Next to Ngudza Primary School</div>
									<div>Thohoyandou, Limpopo</div>
									<div className="font-medium text-foreground mt-2">
										Easy access with ample parking
									</div>
								</div>
								<div className="flex gap-2">
									<Button size="sm" asChild>
										<Link href="/lumveleni">View Branch</Link>
									</Button>
									<Button size="sm" variant="outline" asChild>
										<Link
											href="https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou"
											target="_blank"
										>
											<MapPin className="mr-1 h-3 w-3" />
											Directions
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Services & Features */}
			<section className="py-10 bg-muted/30">
				<div className="container">
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
						Why Choose Our Car Wash
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-6">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="flex items-center gap-2">
									<Sparkles className="h-5 w-5 text-red-500" />
									Premium Quality
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-muted-foreground">
								Professional-grade equipment and eco-friendly products ensure your
								vehicle gets the best care possible.
							</CardContent>
						</Card>
						<Card className="p-6">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-red-500" />
									Fast Service
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-muted-foreground">
								Quick turnaround times without compromising on quality. Most
								services completed in 30-60 minutes.
							</CardContent>
						</Card>
						<Card className="p-6">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="flex items-center gap-2">
									<Phone className="h-5 w-5 text-red-500" />
									Expert Staff
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 text-muted-foreground">
								Trained professionals who care about your vehicle as much as you
								do. Friendly and reliable service.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section id="services" className="py-10">
				<div className="container">
					<h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
						Car Wash Pricing
					</h2>
					<Card>
						<CardHeader>
							<CardTitle>Service Pricing by Vehicle Type</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="w-[200px]">Vehicle Type</TableHead>
											<TableHead>Go (Exterior Only)</TableHead>
											<TableHead>In & Out</TableHead>
											<TableHead>Full Service</TableHead>
											<TableHead>Tyres</TableHead>
											<TableHead>Engine (Chemical)</TableHead>
											<TableHead>Engine (No Chemical)</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.type}>
												<TableCell className="font-medium">{row.type}</TableCell>
												<TableCell>{row.go}</TableCell>
												<TableCell>{row.inOut}</TableCell>
												<TableCell>{row.full}</TableCell>
												<TableCell>{row.tyres}</TableCell>
												<TableCell>{row.engineChem}</TableCell>
												<TableCell>{row.engineNoChem}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>

					<div className="mt-8 grid md:grid-cols-3 gap-4">
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								Go Service
							</Badge>
							<p className="text-sm text-muted-foreground">
								Quick exterior wash and rinse
							</p>
						</div>
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								In & Out
							</Badge>
							<p className="text-sm text-muted-foreground">
								Exterior wash plus interior vacuum
							</p>
						</div>
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								Full Service
							</Badge>
							<p className="text-sm text-muted-foreground">
								Complete wash, vacuum, windows, and detailing
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}
