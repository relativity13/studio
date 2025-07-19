import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { SellProductForm } from "@/components/sell-product/sell-product-form";

export default function SellProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <SellProductForm />
      </main>
      <Footer />
    </div>
  );
}
