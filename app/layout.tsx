import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import FloatingActionButton from "@/components/floating-action-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CabalVilla | Food, Drinks & Carwash",
  description:
    "CabalVilla: For Food & Drinks Lovers. Great food, refreshing drinks, vibrant events, and premium carwash in Tshivhulani & Lumveleni.",
  keywords:
    "CabalVilla, food, drinks, carwash, Tshivhulani, Lumveleni, kota, pap and meat, beer, ciders, wine, live music",
  openGraph: {
    title: "CabalVilla | Eat. Sip. Shine.",
    description:
      "Experience great food, drinks, live music, and premium carwash at CabalVilla.",
    url: "https://cabalvilla.example",
    siteName: "CabalVilla",
    images: [
      {
        url: "/hero2.jpeg",
        width: 1200,
        height: 630,
        alt: "CabalVilla",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          {children}
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'