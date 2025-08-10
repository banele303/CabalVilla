import Image from "next/image";
import { BrickWallIcon as Brick, Shield, ArrowLeft, Package, Truck, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ProductsPage() {
  const bricks = [
    {
      name: "Clay Brick",
      price: "R2.30",
      image: "/clay-brick.jpeg",
      description:
        "Traditional clay brick with excellent thermal properties and classic appearance. Perfect for load-bearing walls and decorative applications.",
      features: ["Durable", "Weather-resistant", "Classic appearance", "High thermal mass", "Fire resistant"],
      specifications: {
        "Compressive Strength": "10-15 MPa",
        "Water Absorption": "15-20%",
        "Dimensions": "222 x 106 x 73mm",
        "Weight": "2.5-3.0 kg"
      },
      popular: false,
    },
    {
      name: "Stock Cement Brick",
      price: "R1.99",
      image: "/cement-brick.jpeg",
      description:
        "Economical cement brick suitable for a wide range of construction applications. Consistent quality and affordable pricing.",
      features: ["Cost-effective", "Consistent size", "Easy to work with", "Good strength", "Versatile"],
      specifications: {
        "Compressive Strength": "7-10 MPa",
        "Water Absorption": "10-15%",
        "Dimensions": "222 x 106 x 73mm",
        "Weight": "2.8-3.2 kg"
      },
      popular: true,
    },
    {
      name: "Maxi Brick",
      price: "R3.95",
      image: "/cement-m-bricks.jpeg",
      description:
        "Larger format brick that speeds up construction and provides excellent structural integrity. Reduces labor costs significantly.",
      features: [
        "Faster wall construction",
        "Fewer mortar joints",
        "Strong and durable",
        "Cost-effective",
        "Better insulation"
      ],
      specifications: {
        "Compressive Strength": "12-18 MPa",
        "Water Absorption": "8-12%",
        "Dimensions": "290 x 140 x 90mm",
        "Weight": "3.5-4.0 kg"
      },
      popular: false,
    },
    {
      name: "M 135 Brick",
      price: "R8.50",
      image: "/140-Block.jpeg",
      description:
        "Premium quality brick with superior strength and finish for demanding applications. Engineered for structural excellence.",
      features: [
        "High compressive strength",
        "Precise dimensions",
        "Premium finish",
        "Structural grade",
        "Quality assured"
      ],
      specifications: {
        "Compressive Strength": "15-20 MPa",
        "Water Absorption": "5-8%",
        "Dimensions": "390 x 190 x 135mm",
        "Weight": "12-15 kg"
      },
      popular: false,
    },
    {
      name: "M 140 Brick",
      price: "R9.50",
      image: "/m190-Block.jpeg",
      description:
        "Our highest quality brick offering maximum strength and durability for critical structural elements. Premium grade construction material.",
      features: [
        "Maximum strength",
        "Superior durability",
        "Excellent load-bearing capacity",
        "Professional grade",
        "Long-term reliability"
      ],
      specifications: {
        "Compressive Strength": "20-25 MPa",
        "Water Absorption": "3-6%",
        "Dimensions": "390 x 190 x 140mm",
        "Weight": "13-16 kg"
      },
      popular: false,
    },
  ];

  const fences = [
    {
      name: "Galvanised Clearview 1800mm",
      image: "/fence1.jpeg",
      description: "Premium galvanised clearview fencing with excellent visibility and security. Perfect for residential perimeters and light commercial applications.",
      sizes: [
        { dimensions: "3000x1800x76x12.7", price: "R1 120", description: "Standard residential height" },
        { dimensions: "3000x1800x76x25", price: "R880", description: "Enhanced spacing for privacy" },
        { dimensions: "3000x1800x76x50", price: "R772", description: "Maximum spacing for visibility" }
      ],
      features: ["Galvanised coating", "Clear visibility", "Weather resistant", "Easy installation", "Low maintenance"],
      specifications: {
        "Panel Width": "3000mm",
        "Panel Height": "1800mm",
        "Post Spacing": "3000mm",
        "Wire Gauge": "4mm",
        "Coating": "Hot-dip galvanised"
      },
      popular: true,
    },
    {
      name: "Galvanised Clearview 2100mm",
      image: "/fence2.jpeg",
      description: "Mid-height galvanised clearview fencing perfect for residential and commercial use. Ideal balance of security and visibility.",
      sizes: [
        { dimensions: "3000x2100x76x12.7", price: "R1 340", description: "Premium commercial grade" },
        { dimensions: "3000x2100x76x25", price: "R1 040", description: "Standard commercial application" },
        { dimensions: "3000x2100x76x50", price: "R920", description: "Cost-effective option" }
      ],
      features: ["Enhanced height", "Superior strength", "Corrosion resistant", "Low maintenance", "Professional appearance"],
      specifications: {
        "Panel Width": "3000mm",
        "Panel Height": "2100mm",
        "Post Spacing": "3000mm",
        "Wire Gauge": "4mm",
        "Coating": "Hot-dip galvanised"
      },
      popular: false,
    },
    {
      name: "Galvanised Clearview 2400mm",
      image: "/fence3.jpeg",
      description: "High-security galvanised clearview fencing ideal for maximum protection. Perfect for industrial, commercial, and high-security applications.",
      sizes: [
        { dimensions: "3000x2400x76x12.7", price: "R1 400", description: "Maximum security grade" },
        { dimensions: "3000x2400x76x25", price: "R1 120", description: "High security standard" },
        { dimensions: "3000x2400x76x50", price: "R960", description: "Security with visibility" }
      ],
      features: ["Maximum height", "High security", "Professional grade", "Long lasting", "Anti-climb design"],
      specifications: {
        "Panel Width": "3000mm",
        "Panel Height": "2400mm",
        "Post Spacing": "3000mm",
        "Wire Gauge": "4mm",
        "Coating": "Hot-dip galvanised"
      },
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of high-quality construction materials.
              From premium bricks to security fencing, we provide solutions for all your building needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center text-center p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  All products manufactured to the highest standards
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and reliable delivery across the region
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Package className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Bulk Orders</h3>
                <p className="text-sm text-muted-foreground">
                  Special pricing for large quantity orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="bricks" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="bricks" className="flex items-center gap-2 text-lg py-3">
                <Brick className="h-5 w-5" />
                Brick Products
              </TabsTrigger>
              <TabsTrigger value="fencing" className="flex items-center gap-2 text-lg py-3">
                <Shield className="h-5 w-5" />
                Fencing Solutions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bricks">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  Premium Brick Products
                </h2>
                <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
                  With our state-of-the-art production facility, we manufacture high-quality bricks 
                  for all your construction needs. From economical options to premium solutions.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {bricks.map((brick, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
                  >
                    <div className="relative pt-[60%] w-full">
                      <Image
                        src={brick.image || "/placeholder.svg"}
                        alt={brick.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {brick.popular && (
                        <Badge className="absolute top-2 right-2 bg-primary">
                          Best Seller
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{brick.name}</CardTitle>
                        <span className="text-2xl font-bold text-primary">
                          {brick.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">
                        {brick.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {brick.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <Separator className="my-4" />

                      <div>
                        <h4 className="font-medium mb-2">Specifications:</h4>
                        <div className="space-y-1 text-sm">
                          {Object.entries(brick.specifications).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between">
                              <span className="text-muted-foreground">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Request Quote</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Bulk Pricing Table */}
              <div className="mt-16 bg-background rounded-lg p-8 shadow-sm border">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Bulk Orders & Special Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Save more with larger quantities. Contact us for custom pricing on orders over 10,000 units.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Brick Type</th>
                        <th className="text-left py-3 px-4">Unit Price</th>
                        <th className="text-left py-3 px-4">Bulk Price (1000+)</th>
                        <th className="text-left py-3 px-4">Bulk Price (5000+)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bricks.map((brick, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{brick.name}</td>
                          <td className="py-3 px-4 font-medium">{brick.price}</td>
                          <td className="py-3 px-4">
                            R{(parseFloat(brick.price.replace('R', '')) * 0.93).toFixed(2)}
                          </td>
                          <td className="py-3 px-4">
                            R{(parseFloat(brick.price.replace('R', '')) * 0.85).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg">Request Bulk Quote</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fencing">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  Galvanised Clearview Fencing
                </h2>
                <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
                  Professional-grade galvanised clearview fencing solutions for residential, 
                  commercial, and industrial applications with superior visibility and security.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                {fences.map((fence, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
                  >                    <div className="p-4 bg-muted/30">
                      <div className="relative h-96 w-full">
                        <Image
                          src={fence.image || "/placeholder.svg"}
                          alt={fence.name}
                          fill
                          className="object-cover rounded-lg shadow-md"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {fence.popular && (
                          <Badge className="absolute top-2 right-2 bg-primary">
                            Popular Choice
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{fence.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">
                        {fence.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Available Sizes & Pricing:</h4>
                        <div className="space-y-3">
                          {fence.sizes.map((size, idx) => (
                            <div key={idx} className="border rounded-lg p-3 bg-muted/30">
                              <div className="flex justify-between items-start mb-1">
                                <span className="font-mono text-sm font-medium">{size.dimensions}</span>
                                <span className="font-bold text-primary text-lg">{size.price}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{size.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {fence.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <Separator className="my-4" />

                      <div>
                        <h4 className="font-medium mb-2">Specifications:</h4>
                        <div className="space-y-1 text-sm">
                          {Object.entries(fence.specifications).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between">
                              <span className="text-muted-foreground">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Installation Quote</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Installation Services */}
              <div className="mt-16 bg-background rounded-lg p-8 shadow-sm border">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Professional Installation Services
                  </h3>
                  <p className="text-muted-foreground">
                    Our experienced team provides complete fencing installation services with warranty coverage.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Complete Package</h4>
                    <p className="text-sm text-muted-foreground">
                      Includes materials, installation, and cleanup
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      2-year warranty on workmanship and materials
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Fast Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Most projects completed within 1-3 days
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg">Schedule Site Assessment</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
