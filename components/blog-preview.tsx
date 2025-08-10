import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPreview() {
  const blogPosts = [
    {
      title: "The Future of Sustainable Building Materials",
      excerpt:
        "Explore emerging trends in eco-friendly construction materials and how they're shaping the future of sustainable architecture.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 15, 2023",
      readTime: "8 min read",
      category: "Sustainability",
    },
    {
      title: "Innovations in Concrete Technology",
      excerpt:
        "Discover how advancements in concrete formulation are creating stronger, more durable, and more environmentally friendly building solutions.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 22, 2023",
      readTime: "6 min read",
      category: "Innovation",
    },
    {
      title: "Building for Climate Resilience",
      excerpt:
        "Learn how modern building materials can help create structures that withstand extreme weather events and changing climate conditions.",
      image: "/placeholder.svg?height=300&width=500",
      date: "January 10, 2023",
      readTime: "10 min read",
      category: "Industry Trends",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Industry Insights</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stay informed with the latest trends, innovations, and best practices in the building materials and
            construction industry.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="h-full flex flex-col">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}

