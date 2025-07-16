import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center">
            <FlaskConical className="mr-2 h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">ChemTrade Edge</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About Us
          </Link>
          <Link href="/#products" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Products
          </Link>
          <Link href="/#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Testimonials
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>Request to buy</Button>
        </div>
      </div>
    </header>
  );
}
