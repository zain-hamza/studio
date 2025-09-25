import Link from 'next/link';
import { Layers3, BrainCircuit, Network, Info, Menu, Star } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { AuthButton } from './auth-button';

export function Header() {
  const navLinks = [
    { href: '/#ai-advisor', label: 'AI Advisor', icon: <BrainCircuit /> },
    { href: '/#hierarchy', label: 'Hierarchy', icon: <Network /> },
    { href: '/saved-roles', label: 'Saved Roles', icon: <Star /> },
    { href: '/about', label: 'About', icon: <Info /> },
  ];

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
          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-2 md:flex">
            {navLinks.map((link) => (
              <Button variant="ghost" asChild key={link.href}>
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
            <AuthButton />
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link
                  href="/"
                  className="mr-6 mb-8 flex items-center space-x-2"
                >
                  <Layers3 className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">CS Compass</span>
                </Link>
                <nav className="grid gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-4 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-muted"
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                 <div className="absolute bottom-6 left-6">
                    <AuthButton />
                </div>
                <div className="absolute bottom-6 right-6">
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
