'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { csParentCategoriesData, type ParentCategory, type CSHierarchy as CSHierarchyType } from '@/data/cs-hierarchy';
import { Header } from '@/components/header';
import { Input } from '@/components/ui/input';
import { Search, BrainCircuit, Network, WandSparkles } from 'lucide-react';
import { CSHierarchy } from '@/components/cs-hierarchy';
import AICareerAdvisor from '@/components/ai-career-advisor';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return csParentCategoriesData;
    }

    const lowercasedFilter = searchTerm.toLowerCase();

    return csParentCategoriesData
      .map((parent) => {
        const matchingFields = parent.fields
          .map((field) => {
            const matchingSubfields = field.subfields.filter(
              (subfield) =>
                subfield.name.toLowerCase().includes(lowercasedFilter) ||
                subfield.description.toLowerCase().includes(lowercasedFilter) ||
                subfield.roles.some((role) =>
                  role.name.toLowerCase().includes(lowercasedFilter)
                ) ||
                subfield.skills.some((skill) =>
                  skill.toLowerCase().includes(lowercasedFilter)
                ) ||
                subfield.tools.some((tool) =>
                  tool.toLowerCase().includes(lowercasedFilter)
                )
            );

            const fieldItselfMatches =
              field.field.toLowerCase().includes(lowercasedFilter) ||
              field.description.toLowerCase().includes(lowercasedFilter);

            if (matchingSubfields.length > 0 || fieldItselfMatches) {
              return {
                ...field,
                subfields: fieldItselfMatches
                  ? field.subfields
                  : matchingSubfields,
              };
            }
            return null;
          })
          .filter(Boolean) as CSHierarchyType[];

        const parentItselfMatches =
          parent.name.toLowerCase().includes(lowercasedFilter) ||
          parent.description.toLowerCase().includes(lowercasedFilter);

        if (matchingFields.length > 0 || parentItselfMatches) {
          return {
            ...parent,
            fields: parentItselfMatches ? parent.fields : matchingFields,
          };
        }
        return null;
      })
      .filter(Boolean) as ParentCategory[];
  }, [searchTerm]);


  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                    CS Compass
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                    Your interactive guide to the vast world of Computer Science.
                    Explore fields, discover career paths, and find your passion.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="#ai-advisor">Get AI Advice</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#hierarchy">Explore Fields</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                data-ai-hint="computer science abstract"
                alt="Hero"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="how-to-use" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Getting Started
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover your path in computer science in a few easy steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Step 1: Get Advice</CardTitle>
                  <BrainCircuit className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use the AI Advisor. Input your interests to get personalized career suggestions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Step 2: Explore Fields</CardTitle>
                  <Network className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dive into the hierarchy to browse through various CS disciplines and their sub-fields.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Step 3: Discover Roles</CardTitle>
                  <WandSparkles className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Click "Day in the Life" on any role to get a realistic, AI-generated daily schedule.
                  </p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Step 4: Search Anything</CardTitle>
                  <Search className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use the powerful search bar to filter fields, roles, skills, and tools instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="ai-advisor" className="w-full py-12 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
             <AICareerAdvisor />
          </div>
        </section>

        <section id="hierarchy" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Explore the Fields of CS
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into the disciplines of computer science. Use the search
                  to filter roles, skills, and tools.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for a field, role, skill..."
                  className="w-full rounded-full pl-10 pr-4 py-3 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="mx-auto max-w-5xl">
              <CSHierarchy data={filteredData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
