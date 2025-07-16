import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="bg-card py-16 md:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Ready to Optimize Your Chemical Supply Chain?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-foreground/80 md:text-xl">
          Contact us today to get a custom quote and learn how we can support
          your enterprise needs.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Request to buy</Button>
        </div>
      </div>
    </section>
  );
}
