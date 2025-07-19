import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  { quote: "hike corporation revolutionized our procurement process. Their reliability and pricing are unmatched.", name: "Jane Doe", company: "PharmaCorp", logo: "https://placehold.co/100x40.png", hint: "company logo" },
  { quote: "The quality of chemicals and the seamless logistics have made them our most trusted partner.", name: "John Smith", company: "Innovate Labs", logo: "https://placehold.co/100x40.png", hint: "tech logo" },
  { quote: "We've seen a 15% reduction in costs and a more stable supply chain since we switched to hike corporation.", name: "Samantha Bee", company: "AgroSolutions", logo: "https://placehold.co/100x40.png", hint: "nature logo" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Trusted by Industry Leaders</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
            See what our partners have to say about our service.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-4xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center md:p-12">
                      <p className="text-lg font-medium text-foreground/90 md:text-xl">"{testimonial.quote}"</p>
                      <div className="mt-6">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.company}</p>
                      </div>
                      <div className="mt-6">
                        <Image src={testimonial.logo} alt={`${testimonial.company} logo`} width={100} height={40} className="opacity-60" data-ai-hint={testimonial.hint} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
