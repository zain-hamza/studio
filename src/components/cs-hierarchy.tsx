import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type CSHierarchy as CSHierarchyType } from '@/data/cs-hierarchy';
import { FieldCard } from './field-card';

interface CSHierarchyProps {
  data: CSHierarchyType[];
}

export function CSHierarchy({ data }: CSHierarchyProps) {
  if (data.length === 0) {
    return <p className="text-center text-muted-foreground">No fields match your search.</p>;
  }

  return (
    <Accordion type="multiple" className="w-full">
      {data.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger className="text-xl hover:no-underline font-headline bg-card p-4 rounded-lg transition-all hover:bg-secondary">
            <div className="flex items-center gap-4">
              <item.icon className="h-8 w-8 text-primary" />
              <span>{item.field}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-background">
            <p className="mb-6 text-muted-foreground">{item.description}</p>
             <Accordion type="multiple" className="w-full space-y-4">
               {item.subfields.map((subfield) => (
                <AccordionItem value={subfield.name} key={subfield.name} className="border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md">
                   <FieldCard subfield={subfield} />
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
