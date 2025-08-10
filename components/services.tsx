import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UtensilsCrossed, Wine, Car, Music2, ArrowRight, CheckCircle } from "lucide-react"

const offerings = [
	{
		title: "Delicious Food",
		description:
			"Pap & Meat (various), Kota (Bunny Chow) and daily chef specials made fresh.",
		icon: UtensilsCrossed,
		image: "/cool-meal4.jpeg",
		href: "#menu",
		features: [
			"Pap & Meat",
			"Kota",
			"Fresh & Tasty",
			"Warm atmosphere",
		],
		color: "from-red-500 to-rose-600",
	},
	{
		title: "Refreshing Drinks",
		description: "Beers, Ciders and Wines to pair perfectly with your meal.",
		icon: Wine,
		image: "/drinks.jpeg",
		href: "#menu",
		features: ["Beers", "Ciders", "Wines", "Happy Hour"],
		color: "from-pink-500 to-rose-500",
	},
	{
		title: "Premium Carwash",
		description:
			"Sparkling clean ride every time. Sedans, SUVs and bakkies welcome.",
		icon: Car,
		image: "/car-wash2.jpeg",
		href: "#carwash",
		features: [
			"Hand Wash",
			"Interior Care",
			"Wax & Shine",
			"Friendly Team",
		],
		color: "from-cyan-500 to-blue-500",
	},
	{
		title: "Live Music & Events",
		description:
			"We host local, provincial and national artists that bring people together.",
		icon: Music2,
		image: "/img8.jpeg",
		href: "#events",
		features: [
			"Live DJs",
			"Artists",
			"Community Vibes",
			"Weekend Parties",
		],
		color: "from-purple-500 to-violet-500",
	},
]

export default function Services() {
	return (
		<section id="menu" className="py-16 lg:py-24">
			<div className="container">
				<div className="text-center mb-14">
					<Badge className="mb-3 bg-red-500/20 text-red-600 border-red-500/30">
						What We Offer
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold">
						Good Food, Good Drinks, Good Times
					</h2>
					<p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
						Come taste the difference where flavor meets passion and every visit
						feels like home.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{offerings.map((item, index) => (
						<Card
							key={index}
							className="group relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
						>
							<div className="relative h-44">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
								<div className={`absolute top-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${item.color} shadow-lg`}>
									<item.icon className="h-4 w-4" />
									{item.title}
								</div>
							</div>
							<CardHeader className="pb-2 pt-4 text-center">
								<CardTitle className="mt-1 text-xl">{item.title}</CardTitle>
								<CardDescription className="px-4">{item.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2 mb-5">
									{item.features.map((f, i) => (
										<span key={i} className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground bg-background/50">
											<CheckCircle className="h-3.5 w-3.5 text-primary" /> {f}
										</span>
									))}
								</div>
								<Button asChild className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white font-semibold">
									<Link href={item.href}>
										Explore
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</CardContent>
							<div className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${item.color}`} />
						</Card>
					))}
				</div>

				<div id="carwash" className="text-center">
					<Card className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-red-500/10 dark:to-rose-500/10">
						<CardContent className="pt-8 pb-8">
							<h3 className="text-2xl md:text-3xl font-bold mb-3">
								Carwash You Can Trust
							</h3>
							<p className="text-muted-foreground max-w-2xl mx-auto mb-6">
								We're committed to delivering a sparkling clean ride every time.
								Our friendly team provides exceptional care so you can trust us
								with your car's care.
							</p>
							<Button asChild size="lg">
								<Link href="#locations">Find a Branch</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
