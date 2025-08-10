import Image from "next/image"
import { Leaf, Lightbulb, Recycle, Award, Factory } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

export default function Sustainability() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Eco-Friendly Materials",
      description: "We use environmentally friendly materials to minimize our ecological footprint.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-500" />,
      title: "Sustainable Practices",
      description: "Our manufacturing processes are designed to reduce waste and conserve resources.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-500" />,
      title: "Innovative Solutions",
      description: "We continuously research and develop new ways to improve our products and processes.",
    },
  ]

  const sustainabilityMetrics = [
    { label: "Recycled Content in Products", value: 35, target: "40% by 2025" },
    { label: "Reduction in Carbon Emissions", value: 28, target: "50% by 2030" },
    { label: "Water Conservation", value: 45, target: "60% by 2025" },
    { label: "Waste Reduction", value: 52, target: "75% by 2030" },
  ]

  const certifications = [
    { name: "LEED Certified", icon: <Award className="h-6 w-6" /> },
    { name: "ISO 14001", icon: <Factory className="h-6 w-6" /> },
    { name: "Cradle to Cradle", icon: <Recycle className="h-6 w-6" /> },
    { name: "Energy Star Partner", icon: <Lightbulb className="h-6 w-6" /> },
  ]

  return (
    <section id="sustainability" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Sustainability &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading the industry with eco-friendly practices and cutting-edge technology.
            Building a sustainable future, one brick at a time.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div>
            <div className="grid gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/mechanical1.jpg"
              alt="Sustainable manufacturing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Modern Manufacturing</h3>
              <p className="text-sm opacity-90">State-of-the-art facilities with sustainable practices</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold mb-6">Sustainable Innovation</h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our research and development team is dedicated to creating innovative building materials that reduce
              environmental impact without compromising on quality or performance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Low-carbon concrete formulations reducing CO2 emissions by up to 30%</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Bricks manufactured with up to 40% recycled material content</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Energy-efficient processes reducing power consumption by 25%</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Water recycling systems reusing up to 80% of process water</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-6">Certifications & Standards</h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We maintain the highest industry standards and certifications to ensure quality and sustainability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <span className="font-medium">{cert.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl border">
              <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">Our Commitment</h5>
              <p className="text-sm text-muted-foreground">
                We're committed to achieving carbon neutrality by 2030 and leading the construction industry 
                towards a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

