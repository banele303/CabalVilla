import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  MapPin, 
  Calculator, 
  FileText,
  CheckCircle,
  ArrowRight,
  Award,
  Shield,
  Ruler,
  Hammer,
  Building,
  GitBranch
} from "lucide-react"

export const metadata: Metadata = {
  title: "Civil Engineering Services | Structural Design & Infrastructure Solutions",
  description: "Professional civil engineering services including structural design, site planning, foundation work, and infrastructure development for residential and commercial projects.",
  keywords: "civil engineering, structural design, site planning, foundation engineering, infrastructure development, construction engineering",
}

const civilServices = [
  {
    title: "Structural Design",
    description: "Professional structural engineering and design services",
    icon: Building2,
    features: ["Building Design", "Load Analysis", "Steel & Concrete Structures", "Seismic Design"]
  },
  {
    title: "Site Planning",
    description: "Comprehensive site development and planning solutions",
    icon: MapPin,
    features: ["Site Analysis", "Grading Plans", "Utility Design", "Environmental Planning"]
  },
  {
    title: "Foundation Engineering",
    description: "Expert foundation design and geotechnical services",
    icon: Hammer,
    features: ["Foundation Design", "Soil Analysis", "Retaining Walls", "Deep Foundations"]
  },
  {
    title: "Infrastructure Design",
    description: "Large-scale infrastructure and transportation projects",
    icon: GitBranch,
    features: ["Road Design", "Bridge Engineering", "Water Systems", "Stormwater Management"]
  }
]

const projectTypes = [
  {
    title: "Residential Projects",
    description: "Civil engineering for residential developments and custom homes",
    projects: [
      "Single Family Homes",
      "Multi-Family Developments", 
      "Subdivision Planning",
      "Site Preparation",
      "Utility Connections",
      "Drainage Systems"
    ]
  },
  {
    title: "Commercial Projects",
    description: "Engineering solutions for commercial and industrial facilities",
    projects: [
      "Office Buildings",
      "Retail Centers",
      "Industrial Facilities",
      "Warehouses",
      "Parking Structures",
      "Site Development"
    ]
  },
  {
    title: "Infrastructure Projects",
    description: "Large-scale infrastructure and public works projects",
    projects: [
      "Transportation Systems",
      "Water Treatment Plants",
      "Municipal Buildings",
      "Bridge Construction",
      "Utility Infrastructure",
      "Environmental Systems"
    ]
  }
]

export default function CivilEngineeringPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden h-[90vh] flex items-center">
        {/* Animated background with civil engineering elements */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/civil-engineering.jpg"
            alt="Advanced civil engineering services"
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/95 via-emerald-950/95 to-black/90"></div>
          
          {/* Animated pattern overlay */}
          <div className="absolute inset-0 bg-[url('/construction/flow.webp')] bg-repeat-x opacity-35 animate-pulse"></div>
          
          {/* Energy particles with increased brightness */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/70 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-emerald-400/60 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-green-400/60 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <Badge className="mb-6 px-3 py-1.5 text-sm font-medium bg-green-500/20 text-green-300 border-green-400/30 backdrop-blur-sm animate-fadeIn">
                🏗️ LICENSED & CERTIFIED CIVIL ENGINEERS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                Building Your 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-teal-200 animate-gradientShift shadow-white drop-shadow-lg">
                  Infrastructure
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-2xl drop-shadow">
                Expert civil engineering solutions from structural design to infrastructure development with 
                professional engineers available for all your residential, commercial, and industrial needs.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-500/30 transition-colors duration-300">
                    <Shield className="h-5 w-5 text-green-300" />
                  </div>
                  <span className="text-green-100 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-500/30 transition-colors duration-300">
                    <Award className="h-5 w-5 text-green-300" />
                  </div>
                  <span className="text-green-100 font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-500/30 transition-colors duration-300">
                    <Building2 className="h-5 w-5 text-green-300" />
                  </div>
                  <span className="text-green-100 font-medium">Modern Methods</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-500/30 transition-colors duration-300">
                    <Ruler className="h-5 w-5 text-green-300" />
                  </div>
                  <span className="text-green-100 font-medium">Precision Engineering</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/10">
                <Image 
                  src="/construction/civil-engineering.jpg" 
                  alt="Advanced civil engineering work" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Excellence</h3>
                  <p className="text-green-100 mb-4">Using the latest technology to deliver efficient and durable structures</p>
                  <Button variant="link" className="text-green-300 p-0 hover:text-green-100">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Civil Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions from concept to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {civilServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Civil Engineering Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional engineering services across multiple sectors and project scales
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {type.projects.map((project, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{project}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/contact">
                      Discuss {type.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Engineering Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Systematic approach ensuring quality and compliance in every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">1. Analysis & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Site analysis, requirements assessment, and preliminary design development
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">2. Design & Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed engineering design with structural calculations and code compliance
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">3. Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete technical drawings, specifications, and permit documentation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">4. Implementation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Construction oversight, quality assurance, and project completion support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Civil Engineering Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our licensed professional engineers bring decades of experience and cutting-edge 
                technology to deliver innovative, cost-effective, and sustainable engineering solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Licensed Professional Engineers</h3>
                    <p className="text-muted-foreground">State-licensed PEs with extensive civil engineering experience and expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Engineering Tools</h3>
                    <p className="text-muted-foreground">Latest CAD software and engineering analysis tools for precise design and modeling.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Code Compliance Expertise</h3>
                    <p className="text-muted-foreground">Thorough knowledge of building codes and regulations ensuring project approval.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/construction/interior-const.jpg"
                alt="Civil engineering team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
              
              <Card className="absolute -bottom-6 -left-6 p-6 bg-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">25+ Years</div>
                    <div className="text-sm text-muted-foreground">Engineering Excellence</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-700 to-emerald-900">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Civil Engineering Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert civil engineering consultation from our licensed professionals. 
            We deliver innovative, compliant, and cost-effective engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-black" asChild>
              <Link href="/contact">Get Engineering Consultation</Link>
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
