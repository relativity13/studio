import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const products = [
  { name: "Sodium Hydroxide", price: "$1,200/ton", image: "https://placehold.co/600x400.png", hint: "chemical flask" },
  { name: "Sulfuric Acid", price: "$850/ton", image: "https://placehold.co/600x400.png", hint: "laboratory equipment" },
  { name: "Acetone", price: "$1,500/ton", image: "https://placehold.co/600x400.png", hint: "science experiment" },
  { name: "Methanol", price: "$980/ton", image: "https://placehold.co/600x400.png", hint: "chemistry lab" },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Top Products</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            High-quality chemicals available for bulk enterprise orders.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl duration-300">
              <CardHeader className="p-0">
                <Image src={product.image} alt={product.name} width={600} height={400} className="h-48 w-full object-cover" data-ai-hint={product.hint} />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline mb-2 text-xl">{product.name}</CardTitle>
                <p className="text-lg font-semibold text-accent">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
