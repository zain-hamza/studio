import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Compass, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  About CS Compass
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to demystify the world of computer science for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-8">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Compass className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                      </div>
                      <p className="text-muted-foreground">
                        CS Compass was born from a passion for computer science
                        and a desire to make its vast landscape accessible.
                        Whether you're a student choosing a path, a
                        professional considering a career change, or simply a
                        curious mind, our goal is to provide a clear,
                        comprehensive, and interactive guide to the world of
                        technology.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                       <div className="flex items-center gap-3 mb-2">
                        <Lightbulb className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold font-headline">Our Philosophy</h3>
                      </div>
                      <p className="text-muted-foreground">
                        We believe that understanding the different fields,
                        roles, and skills within computer science is the first
                        step towards building a fulfilling career. Our
                        AI-powered tools are designed to give you personalized
                        insights and a realistic glimpse into various tech
                        professions.
                      </p>
                    </div>
                  </li>
                  <li>
                     <div className="grid gap-1">
                       <div className="flex items-center gap-3 mb-2">
                        <Users className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold font-headline">Join Us</h3>
                      </div>
                      <p className="text-muted-foreground">
                        This project is an open-source initiative. We believe in
                        the power of community and collaboration to build tools
                        that benefit everyone. We welcome contributions and
                        feedback to make CS Compass even better.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="https://placehold.co/550x550.png"
                data-ai-hint="knowledge sharing"
                width="550"
                height="550"
                alt="Abstract image representing knowledge and collaboration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
