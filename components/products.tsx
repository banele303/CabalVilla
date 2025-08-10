import Image from "next/image";
import { BrickWallIcon as Brick, ArrowRight, ShoppingCart, Shield } from "lucide-react";
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
import Link from "next/link";

export default function Products() {
  const bricks = [
    {
      name: "Clay Brick",
      price: "R2.30",
      image: "/clay-brick.jpeg",
      description:
        "Traditional clay brick with excellent thermal properties and classic appearance.",
      features: ["Durable", "Weather-resistant", "Classic appearance"],
      popular: false,
    },
    {
      name: "Stock Cement Brick",
      price: "R1.99",
      image: "/cement-brick.jpeg",
      description:
        "Economical cement brick suitable for a wide range of construction applications.",
      features: ["Cost-effective", "Consistent size", "Easy to work with"],
      popular: true,
    },
    {
      name: "Maxi Brick",
      price: "R3.95",
      image: "/cement-m-bricks.jpeg",
      description:
        "Larger format brick that speeds up construction and provides excellent structural integrity.",
      features: [
        "Faster wall construction",
        "Fewer mortar joints",
        "Strong and durable",
      ],
      popular: false,
    },
    {
      name: "M 135 Brick",
      price: "R8.50",
      image: "/140-Block.jpeg",
      description:
        "Premium quality brick with superior strength and finish for demanding applications.",
      features: [
        "High compressive strength",
        "Precise dimensions",
        "Premium finish",
      ],
      popular: false,
    },
    {
      name: "M 140 Brick",
      price: "R9.50",
      image: "/m190-Block.jpeg",
      description:
        "Our highest quality brick offering maximum strength and durability for critical structural elements.",
      features: [
        "Maximum strength",
        "Superior durability",
        "Excellent load-bearing capacity",
      ],
      popular: false,
    },
  ];

  const fences = [
    {
      name: "Galvanised Clearview 1800mm",
      image: "/fence1.jpeg",
      description: "Premium galvanised clearview fencing with excellent visibility and security.",
      sizes: [
        { dimensions: "3000x1800x76x12.7", price: "R1 120" },
        { dimensions: "3000x1800x76x25", price: "R880" },
        { dimensions: "3000x1800x76x50", price: "R772" }
      ],
      features: ["Galvanised coating", "Clear visibility", "Weather resistant", "Easy installation"],
      popular: true,
    },
    {
      name: "Galvanised Clearview 2100mm",
      image: "/fence2.jpeg",
      description: "Mid-height galvanised clearview fencing perfect for residential and commercial use.",
      sizes: [
        { dimensions: "3000x2100x76x12.7", price: "R1 340" },
        { dimensions: "3000x2100x76x25", price: "R1 040" },
        { dimensions: "3000x2100x76x50", price: "R920" }
      ],
      features: ["Enhanced height", "Superior strength", "Corrosion resistant", "Low maintenance"],
      popular: false,
    },
    {
      name: "Galvanised Clearview 2400mm",
      image: "/fence3.jpeg",
      description: "High-security galvanised clearview fencing ideal for maximum protection.",
      sizes: [
        { dimensions: "3000x2400x76x12.7", price: "R1 400" },
        { dimensions: "3000x2400x76x25", price: "R1 120" },
        { dimensions: "3000x2400x76x50", price: "R960" }
      ],
      features: ["Maximum height", "High security", "Professional grade", "Long lasting"],
      popular: false,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our comprehensive range of high-quality construction materials.
            From premium bricks to security fencing, we provide solutions for all your building needs.
          </p>
        </div>

        <Tabs defaultValue="bricks" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="bricks" className="flex items-center gap-2">
              <Brick className="h-4 w-4" />
              Bricks
            </TabsTrigger>
            <TabsTrigger value="fencing" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Fencing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bricks">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">
                Premium Brick Products
              </h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                With our state-of-the-art production facility, we manufacture
                high-quality bricks for all your construction needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {bricks.map((brick, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={brick.image || "/placeholder.svg"}
                      alt={brick.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
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
                    <div>
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {brick.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fencing">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">
                Galvanised Clearview Fencing
              </h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Professional-grade galvanised clearview fencing solutions for residential, 
                commercial, and industrial applications with superior visibility and security.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {fences.map((fence, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
                >
                  <div className="p-4 bg-muted/30">
                    <div className="relative h-96 w-full">
                      <Image
                        src={fence.image || "/placeholder.svg"}
                        alt={fence.name}
                        fill
                        className="object-cover rounded-lg shadow-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
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
                      <h4 className="font-medium mb-2">Available Sizes:</h4>
                      <div className="space-y-2">
                        {fence.sizes.map((size, idx) => (
                          <div key={idx} className="flex justify-between items-center p-2 bg-muted/50 rounded text-sm">
                            <span className="font-mono">{size.dimensions}</span>
                            <span className="font-bold text-primary">{size.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {fence.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}