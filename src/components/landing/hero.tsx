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
          Our company is a trusted <strong>stearic acid supplier in Delhi NCR</strong>, offering premium quality products from leading brands like <strong> Godrej, Adani, and Sheel Chand</strong>. We provide reliable bulk and wholesale supplies of stearic acid used in cosmetics, rubber, plastics, pharmaceuticals, and candle manufacturing. With competitive prices and assured quality, we are one of the most dependable stearic acid dealers in Delhi NCR for industries seeking consistent supply and timely delivery.
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
