"use client";

import { Menu, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLumveleni = pathname?.startsWith("/lumveleni");
  const isManiini = pathname?.startsWith("/maniini");

  const brand = isLumveleni
    ? {
        name: "Lumveleni",
        tagline: "Food, Drinks & Carwash",
        logo: "/anotherlogo.jpeg",
        home: "/lumveleni",
        maps: "https://www.google.com/maps?q=Ngudza+Primary+School+Thohoyandou",
        handle: "@Lumveleni",
      }
    : isManiini
    ? {
        name: "Cabal Maniini",
        tagline: "For Food & Drinks Lovers",
        logo: "/logo.jpeg",
        home: "/maniini",
        maps: "https://www.google.com/maps?q=Maniini+Thohoyandou",
        handle: "@CabalManiini",
      }
    : {
        name: "CabalVilla",
        tagline: "For Food & Drinks Lovers",
        logo: "/logo.jpeg",
        home: "/",
        maps: "https://www.google.com/maps?q=Makwarela+Tshivhulani+Hayani+Hospital+R523",
        handle: "@CabalVilla",
      };

  const navItems = [
    { name: "Home", href: brand.home },
    { name: "Menu", href: "/menu" },
    { name: "Carwash", href: "/carwash" },
    { name: "Gallery", href: "/gallery" },
  { name: "CabalVilla Brunche", href: "/cabalvilla" },
  { name: "Lumveleni Brunche", href: "/lumveleni" },
  { name: "Cabal Maniini Brunche", href: "/maniini" },
    { name: "Contact", href: "/contact" },
  ];

  const mapsLink = brand.maps;

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container flex w-full h-20 md:h-34  items-center justify-between">
        <Link href={brand.home} className="flex items-center gap-3">
          <div className="relative h-16 w-[4rem]  md:h-20 md:w-[6rem] overflow-hidden ">
            <Image
              src={brand.logo}
              alt={`${brand.name} Logo`}
              fill
              className="object-cover"
              priority
            />
          </div>
         
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="tel:+27769596653">
              <Phone className="h-4 w-4 mr-2" />
              +27 76 959 6653
            </Link>
          </Button>

          <Button className="hidden md:inline-flex bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-500 text-white" asChild>
            <Link href={mapsLink} target="_blank">
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white" asChild>
                    <Link href={mapsLink} target="_blank" onClick={() => setIsMenuOpen(false)}>
                      <MapPin className="mr-2 h-4 w-4" />
                      Directions
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="tel:+27769596653" onClick={() => setIsMenuOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Link>
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">Follow us {brand.handle}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
