import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type MenuItem = { name: string; price: string }

type MenuSection = { title: string; items: MenuItem[] }

const sections: MenuSection[] = [
  {
    title: "CHICKEN DUST",
    items: [
      { name: "Quarter Chicken", price: "R50" },
      { name: "Half Chicken", price: "R70" },
      { name: "Full Chicken", price: "R130" },
      { name: "Quarter Chicken, Pap & Salad", price: "R65" },
      { name: "Half Chicken, Pap & Salad", price: "R85" },
      { name: "Full Chicken, Pap & Salad", price: "R150" },
    ],
  },
  {
    title: "BEEF / PORK STEW",
    items: [
      { name: "Beef Stew / Pork Stew / Maculu only", price: "R40" },
      { name: "Half Plate Pork", price: "R55" },
      { name: "Half Plate Beef", price: "R55" },
      { name: "Full Plate (Beef Stew, Pap & Salad)", price: "R70" },
      { name: "Full Plate (Pork Stew, Pap & Salad)", price: "R70" },
      { name: "Full Plate (Maculu, Pap & Salad)", price: "R70" },
    ],
  },
  {
    title: "CHICKEN & MUKOKOROSHI",
    items: [
      { name: "Mukokoroshi only & Salad", price: "R40" },
      { name: "Chicken only & Salad", price: "R40" },
      { name: "Half Plate Chicken Stew, Pap", price: "R55" },
      { name: "Half Plate Mukokoroshi, Pap", price: "R55" },
      { name: "Full Plate (Mukokoroshi, Pap & Salad)", price: "R70" },
      { name: "Full Plate (Chicken Stew, Pap & Salad)", price: "R70" },
    ],
  },
  {
    title: "EXTRAS",
    items: [
      { name: "Pap", price: "R15" },
      { name: "Muroho", price: "R10" },
      { name: "Cabbage", price: "R10" },
      { name: "Beetroot", price: "R15" },
      { name: "Salsa", price: "R10" },
      { name: "Atchaar", price: "R10" },
      { name: "Chakalaka", price: "R15" },
    ],
  },
  {
    title: "KOTA",
    items: [
      { name: "Chips, Achaar & Polony", price: "R15" },
      { name: "Chips, Achaar, Lettuce, Polony & Cheese", price: "R20" },
      { name: "Chips, Achaar, Lettuce, Polony & Cheese, Vienna", price: "R25" },
      { name: "Vienna & Half Russian (Chips, Achaar, Lettuce, Polony & Cheese)", price: "R35" },
      { name: "Vienna, Full Russian & ECC", price: "R40" },
      { name: "Vienna, Full Russian & Burger", price: "R45" },
    ],
  },
  {
    title: "SOFT DRINKS",
    items: [
      { name: "2L Coca-Cola / Sprite / Fanta Orange / Pineapple", price: "R28" },
      { name: "1L Coca-Cola / Tonic Water / Still Water", price: "R20" },
      { name: "500ml Still Water", price: "R10" },
      { name: "Other (various small drinks)", price: "R2–R7" },
    ],
  },
  {
    title: "BEER (COT – 660ml / 750ml)",
    items: [
      { name: "Windhoek Draught", price: "R25" },
      { name: "Windhoek Lager", price: "R25" },
      { name: "Castle Double Malt", price: "R25" },
      { name: "Heineken", price: "R28" },
      { name: "Castle Lite", price: "R23" },
      { name: "Amstel", price: "R25" },
      { name: "Black Label", price: "R25" },
      { name: "Castle Lager", price: "R23" },
      { name: "Hansa", price: "R23" },
      { name: "Milk Stout", price: "R25" },
    ],
  },
  {
    title: "BEER (DUMPY – 330ml)",
    items: [
      { name: "Black Label", price: "R20" },
      { name: "Castle Lite", price: "R19" },
      { name: "Heineken", price: "R20" },
      { name: "Stella", price: "R20" },
      { name: "Corona", price: "R25" },
    ],
  },
  {
    title: "BEER (CAN – 500ml / 550ml)",
    items: [
      { name: "Castle Lite", price: "R20" },
      { name: "Black Label", price: "R22" },
      { name: "Castle Lager", price: "R20" },
      { name: "Castle Milk Stout", price: "R21" },
      { name: "Hansa", price: "R20" },
      { name: "Amstel", price: "R22" },
      { name: "Windhoek Draught", price: "R22" },
      { name: "Windhoek Lager", price: "R22" },
      { name: "Heineken", price: "R23" },
    ],
  },
  {
    title: "CIDERS (DUMPY – 275ml / 330ml)",
    items: [
      { name: "Savanna Dry", price: "R22" },
      { name: "Fly Fish Lemon", price: "R20" },
      { name: "Extreme", price: "R25" },
      { name: "Belgravia Gin & Tonic", price: "R20" },
      { name: "Belgravia Dry Lemon", price: "R20" },
      { name: "Brutal Fruit", price: "R20" },
      { name: "Bernini Blush", price: "R20" },
    ],
  },
  {
    title: "CIDERS (CAN – 440ml / 500ml)",
    items: [
      { name: "Belgravia Gin & Tonic", price: "R25" },
      { name: "Belgravia Dry Lemon", price: "R25" },
      { name: "Pine Twist", price: "R25" },
      { name: "Extreme", price: "R29" },
      { name: "Hunters Dry", price: "R25" },
      { name: "Hunters Gold", price: "R25" },
      { name: "Fly Fish Lemon", price: "R22" },
      { name: "Brutal Fruit", price: "R25" },
      { name: "Bernini Blush", price: "R25" },
    ],
  },
  {
    title: "CIDERS (COT – 500ml / 660ml)",
    items: [
      { name: "Redd’s Dry", price: "R26" },
      { name: "Redd’s Original", price: "R26" },
      { name: "Pine Twist", price: "R36" },
      { name: "Fly Fish Lemon", price: "R25" },
      { name: "Hunters Gold", price: "R28" },
      { name: "Savanna Dry (500ml)", price: "R30" },
      { name: "Hunters Dry", price: "R28" },
    ],
  },
  {
    title: "GIN",
    items: [
      { name: "200ml Gordon’s", price: "R75" },
      { name: "50ml Gordon’s", price: "R30" },
    ],
  },
  {
    title: "WINE",
    items: [
      { name: "750ml Crackling White", price: "R45" },
      { name: "750ml Crackling Rose", price: "R45" },
      { name: "1.5L Crackling White", price: "R70" },
      { name: "1.5L Crackling Rose", price: "R70" },
    ],
  },
  {
    title: "WHISKY",
    items: [
      { name: "200ml Klipdrift", price: "R75" },
      { name: "50ml Klipdrift", price: "R30" },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Menu</h2>
          <p className="text-muted-foreground mt-2">Authentic flavors, generous portions, and great value.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Explore by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {sections.map((section) => (
                <AccordionItem key={section.title} value={section.title}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid sm:grid-cols-2 gap-x-8">
                      {section.items.map((item) => (
                        <div key={item.name} className="flex items-baseline justify-between py-2 border-b last:border-b-0">
                          <span className="pr-4 text-sm sm:text-base">{item.name}</span>
                          <span className="font-semibold text-sm sm:text-base">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
