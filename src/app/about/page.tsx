import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
