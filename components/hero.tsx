"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music2, Sparkles, UtensilsCrossed, Wine, Car, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React, { useState, useEffect } from "react"

const slides = [
	{ src: "/hero2.jpeg", alt: "CabalVilla vibrant night life" },
	{ src: "/coolimg.jpeg", alt: "Refreshing drinks and cocktails" },
	{ src: "/car-wash.jpeg", alt: "Top notch car wash" },
	{ src: "/mealsfor.jpeg", alt: "Delicious meals" },
	{ src: "/stella.jpeg", alt: "Bar vibes" },
]

export default function Hero() {
	const [index, setIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		if (isPaused) return
		const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 5000)
		return () => clearInterval(t)
	}, [isPaused])

	const handlePrev = () => setIndex((p) => (p - 1 + slides.length) % slides.length)
	const handleNext = () => setIndex((p) => (p + 1) % slides.length)

	const mapsLink = "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523"
	const lumveleniMaps = "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou"
	const maniiniMaps = "https://www.google.com/maps?q=Maniini+Thohoyandou"

	return (
		<section
			className="relative overflow-hidden min-h-[65vh] md:min-h-[70vh] py-10 md:py-14 flex items-center"
			aria-label="CabalVilla highlight slider"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="absolute inset-0 z-0" aria-hidden>
				{slides.map((s, i) => (
					<div key={s.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}>
						<Image src={s.src} alt={s.alt} fill priority={i === 0} quality={95} sizes="100vw" className="object-cover object-center" />
					</div>
				))}
				<div className="absolute inset-0 bg-black/50" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
			</div>

			{/* Controls */}
			<div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 pointer-events-none">
				<button
					aria-label="Previous slide"
					onClick={handlePrev}
					className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer pointer-events-auto"
				>
					<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
				</button>
				<button
					aria-label="Next slide"
					onClick={handleNext}
					className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white cursor-pointer pointer-events-auto"
				>
					<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
				</button>
			</div>

			{/* Dots */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
				{slides.map((_, i) => (
					<button
						key={i}
						aria-label={`Go to slide ${i + 1}`}
						onClick={() => setIndex(i)}
						className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all cursor-pointer ${
							i === index ? "bg-red-500 ring-2 ring-red-400 ring-offset-2 ring-offset-black/40" : "bg-white/70 hover:bg-white"
						}`}
					/>
				))}
			</div>

			<div className="container relative z-10">
				<div className="grid lg:grid-cols-2 items-center gap-8">
					<div className="text-white text-center lg:text-left relative z-20">
						<Badge className="mb-4 bg-red-500/20 text-red-300 border-red-300/30">For Food & Drinks Lovers</Badge>
						<h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
							CabalVilla Tshivhulani
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500">Eat. Sip. Shine.</span>
						</h1>
						<p className="text-base sm:text-lg lg:text-xl text-gray-100/90 mb-6 max-w-2xl mx-auto lg:mx-0">
							Experience great food, vibrant nightlife, and a top‑notch car wash. Where flavor meets passion and memories are made.
						</p>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-8 text-sm sm:text-base text-white/90">
							<li className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-red-300"/> Pap & Meat, Kota, fresh dishes</li>
							<li className="flex items-center gap-2"><Wine className="h-4 w-4 text-red-300"/> Beers, Ciders, Wines</li>
							<li className="flex items-center gap-2"><Car className="h-4 w-4 text-red-300"/> Sparkling car wash care</li>
							<li className="flex items-center gap-2"><Music2 className="h-4 w-4 text-red-300"/> Live music & events</li>
						</ul>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
							<Button size="lg" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold shadow-lg cursor-pointer pointer-events-auto" asChild>
								<Link href="/menu" className="cursor-pointer">
									View Menu
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white shadow-lg cursor-pointer pointer-events-auto" asChild>
								<Link href={mapsLink} target="_blank" className="cursor-pointer">
									<MapPin className="mr-2 h-4 w-4" />
									Get Directions
								</Link>
							</Button>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 relative z-20">
						<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
							<h3 className="font-semibold text-lg mb-4 text-white">Our Branches</h3>
							<div className="grid sm:grid-cols-2 gap-4 text-sm">
								<div className="p-4 rounded-xl bg-black/30 border border-white/10">
									<div className="font-medium text-white">CabalVilla Tshivhulani</div>
									<div className="text-white/80 text-xs mb-3">For Food & Drinks Lovers</div>
									<div className="flex flex-wrap gap-2 relative z-30">
										<Button size="sm" className="h-8 bg-red-500 text-white hover:bg-red-400 cursor-pointer pointer-events-auto" asChild>
											<Link href="/cabalvilla" className="cursor-pointer">View</Link>
										</Button>
										<Button size="sm" className="h-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white cursor-pointer pointer-events-auto" asChild>
											<Link href={mapsLink} target="_blank" className="cursor-pointer"><MapPin className="mr-1 h-3 w-3" /> Directions</Link>
										</Button>
									</div>
								</div>
								<div className="p-4 rounded-xl bg-black/30 border border-white/10">
									<div className="font-medium text-white">Lumveleni Food, Drinks & Carwash</div>
									<div className="text-white/80 text-xs mb-3">Eat • Sip • Shine</div>
									<div className="flex flex-wrap gap-2 relative z-30">
										<Button size="sm" className="h-8 bg-red-500 text-white hover:bg-red-400 cursor-pointer pointer-events-auto" asChild>
											<Link href="/lumveleni" className="cursor-pointer">View</Link>
										</Button>
										<Button size="sm" className="h-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white cursor-pointer pointer-events-auto" asChild>
											<Link href={lumveleniMaps} target="_blank" className="cursor-pointer"><MapPin className="mr-1 h-3 w-3" /> Directions</Link>
										</Button>
									</div>
								</div>
								<div className="p-4 rounded-xl bg-black/30 border border-white/10">
									<div className="font-medium text-white">Cabal Maniini</div>
									<div className="text-white/80 text-xs mb-3">For Food & Drinks Lovers</div>
									<div className="flex flex-wrap gap-2 relative z-30">
										<Button size="sm" className="h-8 bg-red-500 text-white hover:bg-red-400 cursor-pointer pointer-events-auto" asChild>
											<Link href="/maniini" className="cursor-pointer">View</Link>
										</Button>
										<Button size="sm" className="h-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:text-white cursor-pointer pointer-events-auto" asChild>
											<Link href={maniiniMaps} target="_blank" className="cursor-pointer"><MapPin className="mr-1 h-3 w-3" /> Directions</Link>
										</Button>
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

