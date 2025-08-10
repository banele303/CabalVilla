import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Project Manager, ABC Construction",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Ecomax Manufacturing has been our go-to supplier for all building materials for the past 5 years. Their consistent quality and reliable delivery schedules have helped us complete numerous projects on time and within budget.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Architect, Modern Designs",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The quality of bricks and slabs from Ecomax is exceptional. As an architect, I appreciate their attention to detail and commitment to sustainability. Their materials have helped bring my designs to life with precision and beauty.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, Chen Building Corp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "We've partnered with Ecomax for our high-rise developments, and their steel products have consistently met our rigorous standards. Their technical support team is always available to answer questions and provide solutions.",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don't just take our word for it. Here's what industry professionals have to say about our products and
            services.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

