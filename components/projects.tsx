"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
	{ title: "Community Events", image: "/img2.jpeg" },
	{ title: "Local Artists", image: "/img3.jpeg" },
	{ title: "Food Festivals", image: "/img4.jpeg" },
];

export default function Projects() {
	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
					<div>
						<p className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600">
							Our Projects
						</p>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold">
							Bringing People Together
						</h2>
						<p className="mt-2 max-w-2xl text-muted-foreground">
							From live music to community events, we create memorable experiences
							for everyone.
						</p>
					</div>
					<Button asChild className="h-10 bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white">
						<Link href="#events">See Events</Link>
					</Button>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((p, i) => (
						<Card key={i} className="group overflow-hidden rounded-2xl">
							<div className="relative h-64">
								<Image
									src={p.image}
									alt={p.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-lg font-semibold text-white">{p.title}</h3>
								</div>
							</div>
							<CardContent className="p-4">
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">
										Highlights
									</span>
									<span className="inline-block h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-rose-600" />
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
