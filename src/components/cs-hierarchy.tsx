import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type ParentCategory } from '@/data/cs-hierarchy';
import { FieldCard } from './field-card';

interface CSHierarchyProps {
  data: ParentCategory[];
}

export function CSHierarchy({ data }: CSHierarchyProps) {
  if (data.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No fields match your search.
      </p>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-6">
      {data.map((parent) => (
        <AccordionItem
          value={parent.id}
          key={parent.id}
          className="border rounded-lg overflow-hidden bg-card shadow-lg"
        >
          <AccordionTrigger className="text-2xl hover:no-underline font-headline bg-card p-6 transition-all hover:bg-secondary/50">
            <div className="flex items-center gap-4">
              <parent.icon className="h-10 w-10 text-primary" />
              <div className="text-left">
                <span>{parent.name}</span>
                 <p className="text-sm font-normal text-muted-foreground mt-1">{parent.description}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 pt-0 bg-background">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {parent.fields.map((item) => (
                <AccordionItem
                  value={item.id}
                  key={item.id}
                  className="border rounded-lg overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-xl hover:no-underline font-headline bg-card p-4 transition-all hover:bg-secondary/50">
                    <div className="flex items-center gap-4">
                      <item.icon className="h-8 w-8 text-accent" />
                      <span>{item.field}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-background">
                    <p className="mb-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full space-y-4"
                    >
                      {item.subfields.map((subfield) => (
                        <AccordionItem
                          value={subfield.name}
                          key={subfield.name}
                          className="border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md"
                        >
                          <FieldCard subfield={subfield} />
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
