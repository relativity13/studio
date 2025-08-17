
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { Mission } from "@/components/about/mission";
import { ContactDetails } from "@/components/contact/contact-details";
import { AboutHero } from "@/components/about/hero";
import { Strength } from "@/components/landing/strength";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background px-4 md:px-8 lg:px-16">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="about">
          <AboutHero />
          <Mission />
        </div>
        <div id="products">
          <Products />
        </div>
        <Strength />
        <div id="contact">
          <ContactDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}
