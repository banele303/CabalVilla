import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Zap, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Plug,
  Battery,
  Settings,
  Home,
  Building2,
  Factory,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Electrical Services | Licensed Electricians & Electrical Contractors",
  description: "Expert electrical services including wiring, installations, repairs, and maintenance for residential, commercial, and industrial projects. Licensed electricians with 24/7 emergency service.",
  keywords: "electrical services, electricians, electrical installation, wiring, electrical repair, commercial electrical, residential electrical, industrial electrical",
}

const services = [
  {
    title: "Electrical Installation",
    description: "Complete electrical system installations for new construction and renovations",
    icon: Plug,
    features: ["New Wiring Systems", "Panel Installations", "Outlet & Switch Installation", "Circuit Installation"]
  },
  {
    title: "Lighting Solutions",
    description: "Professional lighting design and installation for all spaces",
    icon: Lightbulb,
    features: ["LED Lighting", "Outdoor Lighting", "Security Lighting", "Smart Lighting Systems"]
  },
  {
    title: "Power Systems",
    description: "Reliable power solutions and electrical infrastructure",
    icon: Battery,
    features: ["Generator Installation", "Backup Power Systems", "Solar Panel Installation", "Power Distribution"]
  },
  {
    title: "Electrical Maintenance",
    description: "Regular maintenance and emergency electrical repairs",
    icon: Settings,
    features: ["Preventive Maintenance", "Emergency Repairs", "Safety Inspections", "Code Compliance"]
  }
]

const sectors = [
  {
    title: "Residential Electrical",
    description: "Complete electrical services for homes and apartments",
    icon: Home,
    image: "/construction/electrical1.jpg",
    services: [
      "Home Wiring & Rewiring",
      "Electrical Panel Upgrades",
      "Ceiling Fan Installation",
      "GFCI Outlet Installation",
      "Home Automation Systems",
      "Electric Vehicle Charging Stations"
    ]
  },
  {
    title: "Commercial Electrical",
    description: "Professional electrical solutions for businesses",
    icon: Building2,
    image: "/construction/pannels.jpg",
    services: [
      "Office Building Electrical",
      "Retail Store Electrical",
      "Restaurant Electrical Systems",
      "Data Center Power Solutions",
      "Emergency Lighting Systems",
      "Energy Management Systems"
    ]
  },
  {
    title: "Industrial Electrical",
    description: "Heavy-duty electrical systems for industrial facilities",
    icon: Factory,
    image: "/construction/electrical.jpg",
    services: [
      "Industrial Motor Installation",
      "Heavy Machinery Wiring",
      "Control Panel Installation",
      "Power Distribution Systems",
      "Factory Automation",
      "Electrical Safety Systems"
    ]
  }
]

const certifications = [
  "Licensed Master Electricians",
  "NECA Member Company",
  "OSHA Safety Certified",
  "Bonded & Insured",
  "Emergency Service Available",
  "Warranty on All Work"
]

export default function ElectricalServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden h-[90vh] flex items-center">
        {/* Animated background with electrical elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/electrical-hero.jpg"
            alt="Advanced electrical services"
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/95 to-black/90"></div>
          
          {/* Animated circuit pattern overlay */}
          <div className="absolute inset-0 bg-[url('/construction/flow.webp')] bg-repeat-x opacity-35 animate-pulse"></div>
          
          {/* Energy particles with increased brightness */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/70 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-yellow-400/60 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-cyan-400/60 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <Badge className="mb-6 px-3 py-1.5 text-sm font-medium bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-sm animate-fadeIn">
                ⚡ LICENSED & CERTIFIED ELECTRICIANS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                Powering Your 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-yellow-200 animate-gradientShift shadow-white drop-shadow-lg">
                  Electrical Needs
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl drop-shadow">
                Expert electrical solutions from installation to maintenance with cutting-edge technology and 
                licensed professionals available 24/7 for all your residential, commercial, and industrial needs.
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
                    <Zap className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-100 font-medium">Smart Energy Solutions</span>
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
                  src="/construction/pannels.jpg" 
                  alt="Advanced electrical work" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Electrical Solutions</h3>
                  <p className="text-blue-100 mb-4">Using the latest technology to deliver efficient and safe electrical systems</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Electrical Services We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions for all your power and lighting needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
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

      {/* Sectors We Serve */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectors We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized electrical services tailored to different industry needs
            </p>
          </div>
          
          <Tabs defaultValue="residential" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
            </TabsList>
            
            {sectors.map((sector, index) => (
              <TabsContent key={index} value={sector.title.toLowerCase().split(' ')[0]}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <sector.icon className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-2xl font-bold text-white">{sector.title}</h3>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{sector.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{sector.description}</p>
                    
                    <div className="grid gap-3">
                      {sector.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="mt-8" asChild>
                      <Link href="/contact">
                        Get Quote for {sector.title}
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Electrical Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our licensed electricians bring expertise, safety, and reliability to every electrical project, 
                ensuring your electrical systems are installed and maintained to the highest standards.
              </p>
              
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">24/7 Emergency Service</h3>
                    <p className="text-sm text-muted-foreground">Available for electrical emergencies</p>
                  </div>
                </div>
                <p className="text-sm">
                  Electrical emergencies don't wait for business hours. Our emergency electricians 
                  are available 24/7 to handle urgent electrical issues.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Licensed & Insured</h3>
                    <p className="text-sm text-muted-foreground">Fully licensed master electricians</p>
                  </div>
                </div>
                <p className="text-sm">
                  All our electricians are fully licensed, bonded, and insured, giving you 
                  peace of mind with every electrical project.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Latest Technology</h3>
                    <p className="text-sm text-muted-foreground">Modern electrical solutions</p>
                  </div>
                </div>
                <p className="text-sm">
                  We use the latest electrical technology and equipment to ensure efficient, 
                  safe, and future-ready electrical installations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Electrical Services?
          </h2>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Get a free estimate from our licensed electricians. We provide reliable, 
            safe, and code-compliant electrical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/10" asChild>
              <Link href="tel:+27832225674">Call Emergency: +27 83 222 5674</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
