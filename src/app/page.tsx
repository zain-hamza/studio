'use client';

import { useState, useMemo } from 'react';
import { csParentCategoriesData, type ParentCategory, type CSHierarchy } from '@/data/cs-hierarchy';
import { Header } from '@/components/header';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CSHierarchy } from '@/components/cs-hierarchy';
import AICareerAdvisor from '@/components/ai-career-advisor';

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
          .filter(Boolean) as CSHierarchy[];

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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  CS Compass
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your interactive guide to the vast world of Computer Science.
                  Explore fields, discover career paths, and find your passion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-advisor" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
             <AICareerAdvisor />
          </div>
        </section>

        <section id="hierarchy" className="w-full py-12 md:py-24 bg-card">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CS Compass. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
