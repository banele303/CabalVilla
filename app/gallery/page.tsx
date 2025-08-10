import Image from "next/image"
import { Card } from "@/components/ui/card"
import Footer from "@/components/footer"

export const metadata = {
  title: "Gallery | CabalVilla",
  description: "Vibes from our food, drinks, nightlife and carwash.",
}

const images = [
  // Vibes & ambience
  { src: "/img1.jpeg", alt: "Vibes 1" },
  { src: "/img2.jpeg", alt: "Vibes 2" },
  { src: "/img3.jpeg", alt: "Vibes 3" },
  { src: "/img4.jpeg", alt: "Vibes 4" },
  { src: "/img6.jpeg", alt: "Vibes 6" },
  { src: "/img7.jpeg", alt: "Vibes 7" },
  { src: "/img8.jpeg", alt: "Vibes 8" },
  { src: "/hero2.jpeg", alt: "Night life vibes" },

  // Cool meals
  { src: "/cool-meal.jpeg", alt: "Cool meal" },
  { src: "/cool-meal2.jpeg", alt: "Cool meal 2" },
  { src: "/cool-meal4.jpeg", alt: "Cool meal 3" },
  { src: "/coolimg.jpeg", alt: "Cool platter" },
  { src: "/cools.jpeg", alt: "Cool combos" },
  { src: "/mealsfor.jpeg", alt: "Meals for sharing" },
  { src: "/chi-beans.jpeg", alt: "Chicken and beans" },
  { src: "/beaf-mbhida.jpeg", alt: "Beef mbhida" },

  // Fries
  { src: "/friess.jpeg", alt: "Crispy fries" },
  { src: "/friees4.jpeg", alt: "Loaded fries" },
  { src: "/friees5.jpeg", alt: "Golden fries" },

  // Chicken
  { src: "/chicken3.jpeg", alt: "Grilled chicken" },

  // Drinks & bar
  { src: "/drinks.jpeg", alt: "Refreshing drinks" },
  { src: "/stella.jpeg", alt: "Bar vibes" },
  { src: "/jamason.jpeg", alt: "Whiskey vibes" },
  { src: "/alhcol.jpeg", alt: "Alcohol selection" },
  { src: "/alhola2.jpeg", alt: "Beverage display" },

  // Carwash
  { src: "/car-wash.jpeg", alt: "Car wash service" },
  { src: "/car-wash2.jpeg", alt: "Professional car wash" },
  { src: "/car-wash4.jpeg", alt: "Quality cleaning" },
  { src: "/car-wash5.jpeg", alt: "Sparkling clean cars" },

  // Location aerials
  { src: "/areal-view1.jpeg", alt: "Aerial view 1" },
  { src: "/areal-view2.jpeg", alt: "Aerial view 2" },
  { src: "/arieal-view.jpeg", alt: "Aerial view 3" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="py-14">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Gallery</h1>
          <p className="text-muted-foreground">A look at the energy and flavor of CabalVilla.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <Card key={img.src} className="overflow-hidden">
                <div className="relative h-44 md:h-60">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
