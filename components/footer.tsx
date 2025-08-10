import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-border">
                <Image src="/logo.jpeg" alt="CabalVilla Logo" fill className="object-cover" />
              </div>
              <div className="font-semibold">CabalVilla</div>
            </div>
            <p className="text-muted-foreground mb-4">
              For Food & Drinks Lovers. Great food, vibrant nightlife, and a top‑notch carwash. Where flavor meets passion and memories are made.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Branches</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4" /> CabalVilla Tshivhulani: 3465 Makwarela, R523. Makwarela Sibasa 0970. 500m from Hayani Hospital.</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4" /> Lumveleni Food, Drinks & Carwash: 12/10/2/3(1562) Ngudza Farm 213, Thohoyandou, 0950, Vhembe. Next to Ngudza Primary School.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="grid gap-2">
              <li><Link href="#menu" className="text-muted-foreground hover:text-primary">Menu</Link></li>
              <li><Link href="#carwash" className="text-muted-foreground hover:text-primary">Carwash</Link></li>
              <li><Link href="#events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="#locations" className="text-muted-foreground hover:text-primary">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="grid gap-4">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <div>+27 76 959 6653</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">info@cabalvilla.co.za</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} CabalVilla. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground md:justify-end">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
              <Link href="#" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

