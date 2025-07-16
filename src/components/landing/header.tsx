import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <FlaskConical className="mr-2 h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">ChemTrade Edge</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button>Request to buy</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
