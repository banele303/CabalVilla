import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Wrench, 
  Droplets, 
  ShowerHead, 
  Thermometer,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Home,
  Building2,
  Waves,
  Wrench as Pipe,
  Gauge,
  Zap,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Plumbing Services | Licensed Plumbers & Pipe Installation",
  description: "Expert plumbing services including pipe installation, drainage systems, water heating, and emergency repairs. Licensed plumbers with 24/7 emergency service for residential and commercial.",
  keywords: "plumbing services, plumbers, pipe installation, drainage systems, water heater repair, emergency plumbing, commercial plumbing, residential plumbing",
}

const services = [
  {
    title: "Pipe Installation & Repair",
    description: "Professional pipe installation, repair, and replacement services",
    icon: Pipe,
    features: ["Water Line Installation", "Sewer Line Repair", "Pipe Replacement", "Leak Detection & Repair"]
  },
  {
    title: "Drainage Systems",
    description: "Complete drainage solutions for optimal water flow",
    icon: Waves,
    features: ["Drain Cleaning", "Sewer Line Installation", "Storm Drainage", "Drainage Maintenance"]
  },
  {
    title: "Water Heating Solutions",
    description: "Water heater installation, repair, and maintenance",
    icon: Thermometer,
    features: ["Water Heater Installation", "Tankless Water Heaters", "Water Heater Repair", "Energy-Efficient Systems"]
  },
  {
    title: "Fixture Installation",
    description: "Professional installation of plumbing fixtures",
    icon: ShowerHead,
    features: ["Bathroom Fixtures", "Kitchen Plumbing", "Faucet Installation", "Toilet Installation"]
  }
]

const emergencyServices = [
  {
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes to minimize water damage",
    icon: Droplets,
  },
  {
    title: "Drain Blockages",
    description: "Fast clearing of blocked drains and sewer lines",
    icon: Waves,
  },
  {
    title: "Water Heater Failure",
    description: "Emergency water heater repair and replacement",
    icon: Thermometer,
  },
  {
    title: "Gas Line Issues",
    description: "Safe gas line repair and leak detection",
    icon: Gauge,
  }
]

const plumbingProjects = [
  {
    title: "Residential Plumbing",
    description: "Complete plumbing services for homes and apartments",
    image: "/construction/plumbing3.jpg",
    services: [
      "Bathroom Plumbing",
      "Kitchen Plumbing", 
      "Water Line Installation",
      "Sewer Line Repair",
      "Water Heater Services",
      "Plumbing Inspections"
    ]
  },
  {
    title: "Commercial Plumbing",
    description: "Professional plumbing solutions for businesses",
    image: "/construction/plumbing5.jpg", 
    services: [
      "Office Building Plumbing",
      "Restaurant Plumbing",
      "Retail Store Plumbing",
      "Industrial Plumbing",
      "Backflow Prevention",
      "Grease Trap Services"
    ]
  }
]

export default function PlumbingServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden h-[90vh] flex items-center">
        {/* Animated background with plumbing elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/plumbing-hero.jpg"
            alt="Advanced plumbing services"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADY="
          />
          
          {/* Even darker overlay with gradients for maximum text readability */}
          <div className="absolute inset-0 bg-black/95"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-cyan-950/95 to-black/90"></div>
          
          {/* Animated pattern overlay */}
          <div className="absolute inset-0 bg-[url('/construction/flow.webp')] bg-repeat-x opacity-35 animate-pulse"></div>
          
          {/* Energy particles with increased brightness */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/70 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-400/60 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-blue-400/60 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <Badge className="mb-6 px-3 py-1.5 text-sm font-medium bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-sm animate-fadeIn">
                🔧 LICENSED & CERTIFIED PLUMBERS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                Expert Plumbing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-100 animate-gradientShift shadow-white drop-shadow-lg">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl drop-shadow">
                Professional plumbing installations, repairs, and maintenance with licensed plumbers 
                available 24/7 for all your residential and commercial emergency services.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Shield className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-100 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-100 font-medium">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Award className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-100 font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Droplets className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-100 font-medium">Water Conservation</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Emergency: +27 83 222 5674
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <Image 
                  src="/plumbing-work.jpg" 
                  alt="Advanced plumbing work" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Plumbing Solutions</h3>
                  <p className="text-blue-100 mb-4">Using the latest technology to deliver efficient and reliable plumbing systems</p>
                  <Button variant="link" className="text-blue-300 p-0 hover:text-blue-100">
                    Learn About Our Process <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm"></div>
        <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,149.3C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Plumbing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple repairs to complex installations, we handle all your plumbing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
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

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-red-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              🚨 24/7 Emergency Service
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">Emergency Plumbing Services</h2>
            <p className="text-xl text-red-700 max-w-2xl mx-auto">
              Plumbing emergencies can't wait. Our emergency plumbers are available 24/7 to handle urgent issues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="text-center border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-red-900">{service.title}</CardTitle>
                  <CardDescription className="text-red-700">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="tel:+27832225674">
                Call Emergency Line: +27 83 222 5674
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Plumbing Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized plumbing services for residential and commercial properties
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {plumbingProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <CardHeader>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid gap-3 mb-6">
                    {project.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      Get Quote for {project.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
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
                Why Choose Our Plumbing Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our licensed plumbers bring years of experience and expertise to every plumbing project, 
                ensuring reliable and long-lasting solutions for your property.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-muted-foreground">All our plumbers are fully licensed, bonded, and insured for your protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
                    <p className="text-muted-foreground">Emergency plumbers available around the clock for urgent plumbing issues.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">We stand behind our work with comprehensive warranties on all plumbing services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/construction/plumbing7.jpg"
                alt="Professional plumbing team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              
              <Card className="absolute -bottom-6 -left-6 p-6 bg-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">15+ Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Plumbing Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free estimate from our licensed plumbers. We provide reliable, 
            efficient, and code-compliant plumbing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-black" asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="tel:+27832225674">Emergency: +27 83 222 5674</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
