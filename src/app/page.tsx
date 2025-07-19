import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { Mission } from "@/components/about/mission";
import { RequestProductForm } from "@/components/request-product/request-product-form";
import { SellProductForm } from "@/components/sell-product/sell-product-form";
import { ContactDetails } from "@/components/contact/contact-details";
import { AboutHero } from "@/components/about/hero";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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
        <div id="request-product">
          <RequestProductForm />
        </div>
        <div id="sell-product">
          <SellProductForm />
        </div>
        <div id="contact">
          <ContactDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}
