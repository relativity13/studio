import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl/none">
          Reliable Chemical Sourcing for the Modern Enterprise
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-foreground/80 md:text-xl">
          ChemTrade Edge provides a seamless procurement platform for
          high-purity chemicals, ensuring supply chain stability and
          competitive pricing for your business.
        </p>
        <div className="mt-8">
          <Button size="lg">Request to buy</Button>
        </div>
      </div>
    </section>
  );
}
