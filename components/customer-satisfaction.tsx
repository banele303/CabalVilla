import { BadgeCheck, Clock, HeartHandshake, TruckIcon, Star, Award, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
	{
		name: "Thabo M.",
		text: "Amazing vibe and even better food! Definitely coming back.",
	},
	{ name: "Lerato K.", text: "The carwash is top-notch and quick!" },
	{ name: "Sibongile N.", text: "Friendly staff and great music on weekends." },
]

export default function CustomerSatisfaction() {
  const benefits = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Exceptional Quality",
      description: "Our products meet the highest industry standards for quality and performance.",
      metric: "99.8%",
      metricLabel: "Quality Rate"
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: "Timely Deliveries",
      description: "We ensure your materials arrive on schedule to keep your projects on track.",
      metric: "95%",
      metricLabel: "On-Time Delivery"
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: "Unparalleled Support",
      description: "Our team of experts is always ready to provide guidance and assistance.",
      metric: "24/7",
      metricLabel: "Support Available"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Trusted Partner",
      description: "Count on us for consistent, dependable service for all your building material needs.",
      metric: "1000+",
      metricLabel: "Happy Clients"
    },
  ]

	return (
		<section id="about" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
			<div className="container">
				<div className="text-center mb-12">
					<div className="flex items-center justify-center gap-2 mb-4">
						<Star className="h-6 w-6 text-primary fill-current" />
						<Star className="h-6 w-6 text-primary fill-current" />
						<Star className="h-6 w-6 text-primary fill-current" />
						<Star className="h-6 w-6 text-primary fill-current" />
						<Star className="h-6 w-6 text-primary fill-current" />
						<span className="ml-2 text-sm font-medium text-muted-foreground">4.9/5 Customer Rating</span>
					</div>
					<h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
						Customer{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
							Satisfaction
						</span>
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-muted-foreground">
						With a strong focus on customer satisfaction, we strive to provide timely deliveries, exceptional quality
						and unparalleled support. Experience the Ecomax difference.
					</p>
				</div>
				
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{benefits.map((benefit, index) => (
						<Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
							<CardContent className="p-6 h-full flex flex-col">
								<div className="flex items-center justify-between mb-4">
									<div className="group-hover:scale-110 transition-transform duration-300">
										{benefit.icon}
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-primary">{benefit.metric}</div>
										<div className="text-xs text-muted-foreground">{benefit.metricLabel}</div>
									</div>
								</div>
								<h3 className="mb-3 text-xl font-semibold group-hover:text-primary transition-colors">
									{benefit.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed flex-grow">
									{benefit.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Customer Testimonial Badge */}
				<div className="mt-12 text-center">
					<Card className="inline-block bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
						<CardContent className="p-6">
							<div className="flex items-center justify-center gap-3 mb-2">
								<Award className="h-6 w-6 text-primary" />
								<span className="font-semibold text-lg">Industry Recognition</span>
							</div>
							<p className="text-sm text-muted-foreground max-w-md">
								"Leading construction materials supplier in South Africa" - Construction Industry Awards 2023
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="text-center mt-10">
					<p className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600">
						What People Say
					</p>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold">Customer Satisfaction</h2>
					<p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
						We take pride in serving our community with excellent food, service,
						and entertainment.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3 mt-8">
					{reviews.map((r, i) => (
						<div key={i} className="rounded-2xl border bg-card p-6 shadow-sm">
							<div className="mb-3 flex items-center gap-1 text-red-500">
								{Array.from({ length: 5 }).map((_, j) => (
									<Star key={j} className="h-4 w-4 fill-current" />
								))}
							</div>
							<p className="text-sm text-muted-foreground">“{r.text}”</p>
							<p className="mt-3 font-medium">{r.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

