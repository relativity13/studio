import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl/none uppercase">
          <span className="block text-2xl font-normal normal-case tracking-normal sm:text-3xl md:text-4xl text-foreground/90">Welcome to</span>
          HIKE corporation
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-lg text-foreground/80 md:text-xl text-justify">
          A Reliable Chemical Sourcing Company for the Modern Enterprises. We provide a seamless procurement platform for
          high-purity chemicals, ensuring supply chain stability and
          competitive pricing for your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/#products">
            <Button size="lg">Explore Products</Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
