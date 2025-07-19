
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { RequestProductForm } from "@/components/request-product/request-product-form";

export default function RequestProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <RequestProductForm />
      </main>
      <Footer />
    </div>
  );
}
