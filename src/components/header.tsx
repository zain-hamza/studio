import Link from 'next/link';
import { Layers3, BrainCircuit, Network, Info } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Layers3 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CS Compass</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="flex items-center space-x-2">
             <Button variant="ghost" asChild>
                <Link href="/#ai-advisor">
                  <BrainCircuit />
                  AI Advisor
                </Link>
             </Button>
             <Button variant="ghost" asChild>
                <Link href="/#hierarchy">
                  <Network />
                  Hierarchy
                </Link>
             </Button>
             <Button variant="ghost" asChild>
                <Link href="/about">
                  <Info />
                  About
                </Link>
             </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
