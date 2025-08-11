import { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import Branches from "@/components/branches"
import Menu from "@/components/menu"

export const metadata: Metadata = {
  title: "CabalVilla | Food, Drinks & Carwash in Tshivhulani, Lumveleni & Maniini",
  description: "CabalVilla: For Food & Drinks Lovers. Great food, vibrant nightlife, and a top‑notch carwash. Visit our Tshivhulani, Lumveleni and Maniini branches.",
  keywords: "CabalVilla, Tshivhulani, Lumveleni, Maniini, food, drinks, carwash, kota, pap and meat, beer, ciders, wine, live music",
  openGraph: {
    title: "CabalVilla | Eat. Sip. Shine.",
    description: "Experience great food, refreshing drinks, live music, and premium carwash at CabalVilla.",
    type: "website",
    images: [
      { url: "/hero2.jpeg", width: 1200, height: 630, alt: "CabalVilla" },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Menu />
      <Projects />
      <Branches />
      <Footer />
    </main>
  )
}

