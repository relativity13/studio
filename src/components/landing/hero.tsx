import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl/none">
          Reliable Chemical Sourcing for the Modern Enterprise
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          hike corporation provides a seamless procurement platform for
          high-purity chemicals, ensuring supply chain stability and
          competitive pricing for your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/#products">
            <Button size="lg">Explore Products</Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
