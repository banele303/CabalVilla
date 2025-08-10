import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Cog, 
  Wind, 
  Thermometer, 
  Gauge,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Building2,
  Factory,
  Settings,
  Zap,
  Wrench
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mechanical Engineering Services | HVAC, Ventilation & Mechanical Systems",
  description: "Expert mechanical engineering services including HVAC design, ventilation systems, mechanical installations, and system optimization for commercial and industrial projects.",
  keywords: "mechanical engineering, HVAC systems, ventilation, mechanical design, air conditioning, heating systems, mechanical installation, system optimization",
}

const mechanicalServices = [
  {
    title: "HVAC Systems",
    description: "Complete heating, ventilation, and air conditioning solutions",
    icon: Wind,
    features: ["System Design", "Installation", "Maintenance", "Energy Optimization"]
  },
  {
    title: "Ventilation Systems",
    description: "Advanced ventilation and air quality management systems",
    icon: Wind,
    features: ["Air Quality Control", "Exhaust Systems", "Fresh Air Systems", "Industrial Ventilation"]
  },
  {
    title: "Heating Systems",
    description: "Efficient heating solutions for all building types",
    icon: Thermometer,
    features: ["Boiler Systems", "Radiant Heating", "Heat Pumps", "Central Heating"]
  },
  {
    title: "Mechanical Design",
    description: "Professional mechanical system design and engineering",
    icon: Cog,
    features: ["CAD Design", "Load Calculations", "System Specifications", "Technical Documentation"]
  }
]

const projectTypes = [
  {
    title: "Commercial HVAC",
    description: "HVAC solutions for office buildings, retail, and commercial spaces",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Office Building HVAC",
      "Retail HVAC Systems",
      "Restaurant Ventilation",
      "Medical Facility HVAC",
      "Educational HVAC",
      "Hotel HVAC Systems"
    ]
  },
  {
    title: "Industrial Mechanical",
    description: "Heavy-duty mechanical systems for industrial facilities",
    image: "/mechanical1.jpg",
    services: [
      "Factory Ventilation",
      "Process Cooling",
      "Industrial Heating",
      "Equipment Cooling",
      "Dust Collection",
      "Fume Extraction"
    ]
  },
  {
    title: "Specialized Systems",
    description: "Custom mechanical solutions for unique requirements",
    image: "https://images.unsplash.com/photo-1581094268590-8b6b09b272dd?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Clean Room HVAC",
      "Data Center Cooling",
      "Laboratory Ventilation",
      "Swimming Pool Systems",
      "Greenhouse Climate Control",
      "Cold Storage Systems"
    ]
  }
]

const capabilities = [
  {
    title: "System Design",
    description: "Professional mechanical system design using latest CAD software",
    icon: Cog,
  },
  {
    title: "Load Calculations", 
    description: "Accurate heating and cooling load calculations",
    icon: Gauge,
  },
  {
    title: "Energy Analysis",
    description: "Energy efficiency analysis and optimization",
    icon: Zap,
  },
  {
    title: "Installation",
    description: "Professional installation of mechanical systems",
    icon: Wrench,
  }
]

export default function MechanicalEngineeringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mechanical1.jpg"
            alt="Mechanical engineering systems"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADY="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-700/40"></div>
        </div>
        
        <div className="container relative text-white">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-construction-yellow/20 text-construction-yellow border-construction-yellow/30">
              ⚙️ Professional Mechanical Engineers
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-yellow to-construction-orange">
                Mechanical Engineering
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl opacity-90">
              Advanced mechanical systems design, HVAC solutions, and ventilation engineering for 
              commercial, industrial, and specialized applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-black">
                Get Engineering Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Clock className="mr-2 h-4 w-4" />
                Consultation: +27 83 389 5071
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mechanical Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mechanical solutions from design to installation and maintenance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanicalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Mechanical Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized mechanical engineering solutions for different industries and applications
            </p>
          </div>
          
          <Tabs defaultValue="commercial" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
            </TabsList>
            
            {projectTypes.map((project, index) => (
              <TabsContent key={index} value={project.title.toLowerCase().split(' ')[0]}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <Cog className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="grid gap-3">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="mt-8" asChild>
                      <Link href="/contact">
                        Get Quote for {project.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced engineering capabilities backed by experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Mechanical Engineering Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our mechanical engineers bring advanced technical expertise and innovative solutions 
                to every project, ensuring optimal performance and energy efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Professional Engineers</h3>
                    <p className="text-muted-foreground">Licensed professional engineers with extensive mechanical systems experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Energy Efficient Solutions</h3>
                    <p className="text-muted-foreground">Designs focused on energy efficiency and sustainable mechanical systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Cog className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-muted-foreground">Latest CAD software and engineering tools for precise system design.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
                alt="Mechanical engineering team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent rounded-2xl"></div>
              
              <Card className="absolute -bottom-6 -left-6 p-6 bg-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <Cog className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold">20+ Years</div>
                    <div className="text-sm text-muted-foreground">Engineering Experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Mechanical Engineering?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert mechanical engineering services from our licensed professionals. 
            We deliver efficient, reliable, and innovative mechanical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-black" asChild>
              <Link href="/contact">Get Engineering Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="tel:+27833895071">Call: +27 83 389 5071</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
