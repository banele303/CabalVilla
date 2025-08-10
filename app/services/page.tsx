import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Wrench, 
  Cog, 
  Building, 
  Hammer, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Construction Services | Elite Construction & Engineering Solutions",
  description: "Comprehensive construction services including electrical work, plumbing, mechanical engineering, civil engineering, general construction, and building services. Professional, reliable, and modern solutions.",
  keywords: "construction services, electrical work, plumbing, mechanical engineering, civil engineering, building construction, general contracting",
}

const services = [
  {
    title: "Electrical Works",
    description: "Complete electrical installations, repairs, and maintenance for residential, commercial, and industrial projects.",
    icon: Zap,
    image: "/electrical-work.jpg",
    href: "/services/electrical",
    features: ["Wiring & Installations", "Power Systems", "Lighting Solutions", "Electrical Maintenance"],
    badge: "Licensed & Certified"
  },
  {
    title: "Plumbing Services",
    description: "Professional plumbing solutions from basic repairs to complex commercial installations.",
    icon: Wrench,
    image: "/plumbing-work.jpg",
    href: "/services/plumbing",
    features: ["Pipe Installation", "Drainage Systems", "Water Heating", "Emergency Repairs"],
    badge: "24/7 Emergency"
  },
  {
    title: "Mechanical Engineering",
    description: "Advanced mechanical systems design, installation, and maintenance for all building types.",
    icon: Cog,
    image: "/mechanical1.jpg",
    href: "/services/mechanical",
    features: ["HVAC Systems", "Energy Solutions", "Maintenance", "System Optimization"],
    badge: "Energy Efficient"
  },
  {
    title: "Civil Engineering",
    description: "Expert civil engineering services for construction projects of all scales.",
    icon: Building,
    image: "/civil-engineering.jpg",
    href: "/services/civil",
    features: ["Structural Design", "Site Planning", "Project Management", "Quality Control"],
    badge: "Certified Engineers"
  },
  {
    title: "Building Services",
    description: "Comprehensive building services from foundation to finishing touches.",
    icon: Hammer,
    image: "/building-services.jpg",
    href: "/services/building",
    features: ["Construction", "Renovations", "Commercial Buildings", "Residential Projects"],
    badge: "Full Service"
  }
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-[90vh] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction3.webp"
            alt="Construction Services"
            fill
            className="object-cover opacity-20"
            priority
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAACQAAAQAAQUxQSAwAAAABHyAQIAQICwD+AQA="
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 sm:text-6xl lg:text-7xl">
            Professional <span className="text-red-500">Construction Services</span>
          </h1>
          
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-300 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-200 sm:text-xl">
            Excellence in engineering and construction solutions for commercial, residential, and industrial projects. Trusted by leading businesses and homeowners.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-300">
            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white">
              <Link href="#service-options">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-red-500" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-red-500" />
              <span>Expert Teams</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-red-500" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-red-500" />
              <span>Award Winning</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm"></div>
        <svg className="absolute -bottom-1 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,149.3C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </section>

      {/* Service Cards */}
      <section id="service-options" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Engineering & Construction Services</h2>
            <p className="text-lg text-gray-600">
              We provide end-to-end solutions across all major engineering disciplines with a focus on quality, safety, and client satisfaction.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all border-gray-200 shadow-lg hover:shadow-xl">
                <div className="relative h-48">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <Badge className="px-3 py-1 text-sm bg-red-500/20 text-red-700 border border-red-500/30">
                      {service.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className="p-2 mr-3 text-white rounded-full bg-red-600">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-2 text-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4 bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white">
                    <Link href={service.href} className="flex items-center justify-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-lg p-6 mx-auto mt-16 text-center bg-gray-100 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">Need a Custom Solution?</h3>
            <p className="mb-4 text-gray-600">
              We provide tailored engineering and construction solutions for unique project requirements.
            </p>
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600">
              With decades of experience and a commitment to excellence, we deliver projects that exceed expectations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 mb-4 rounded-full w-14 h-14 bg-blue-50">
                <CheckCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our projects with rigorous quality control processes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 mb-4 rounded-full w-14 h-14 bg-green-50">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of certified professionals with extensive industry experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 mb-4 rounded-full w-14 h-14 bg-red-50">
                <Star className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Client Satisfaction</h3>
              <p className="text-gray-600">
                Our client-centered approach ensures your project goals and requirements are fully met.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
