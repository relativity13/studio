
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Globe, BadgeDollarSign, Truck } from "lucide-react";

const strengths = [
  {
    title: "Quality Assurance",
    description: "We source from certified suppliers and conduct rigorous in-house testing to guarantee product purity and consistency.",
    icon: <ShieldCheck className="h-12 w-12 mx-auto text-primary" />,
  },
  {
    title: "Customer Satisfaction",
    description: "Our extensive network of partners ensures we can source and deliver chemicals anywhere in the world, efficiently.",
    icon: <Globe className="h-12 w-12 mx-auto text-primary" />,
  },
  {
    title: "Competitive Pricing",
    description: "By optimizing our supply chain and leveraging bulk purchasing, we offer the most competitive prices in the market.",
    icon: <BadgeDollarSign className="h-12 w-12 mx-auto text-primary" />,
  },
  {
    title: "On Time Delivery",
    description: "Our logistics team ensures timely and secure delivery of your orders, minimizing downtime for your operations.",
    icon: <Truck className="h-12 w-12 mx-auto text-primary" />,
  },
];

export function Strength() {
  return (
    <section id="strength" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Strength</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength) => (
            <Card key={strength.title} className="overflow-hidden transition-all hover:shadow-xl duration-300 text-center border rounded-lg">
              <CardHeader>
                {strength.icon}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline mb-2 text-xl">{strength.title}</CardTitle>
                <p className="text-foreground/80 text-justify">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
