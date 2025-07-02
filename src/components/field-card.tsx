import {
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { type Subfield } from '@/data/cs-hierarchy';
import { Briefcase, Wrench, GraduationCap, TrendingUp, ChevronDown } from 'lucide-react';


interface FieldCardProps {
  subfield: Subfield;
}

export function FieldCard({ subfield }: FieldCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md">
      <AccordionTrigger className="p-4 text-left hover:no-underline w-full">
        <div className="flex items-center gap-3 w-full justify-between">
          <div className="flex items-center gap-3">
            <subfield.icon className="h-6 w-6 text-accent" />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{subfield.name}</h3>
              <p className="text-sm text-muted-foreground">{subfield.description}</p>
            </div>
          </div>
          <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-6 bg-secondary/50">
        <div className="grid gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" /> Roles & Responsibilities
            </h4>
            <ul className="space-y-2">
              {subfield.roles.map((role) => (
                <li key={role.name}>
                  <strong className="font-medium">{role.name}:</strong>{' '}
                  <span className="text-muted-foreground">{role.responsibilities}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" /> Required Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {subfield.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                <Wrench className="h-5 w-5" /> Typical Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {subfield.tools.map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" /> Career Path
            </h4>
            <p className="text-muted-foreground">{subfield.careerPath}</p>
          </div>
        </div>
      </AccordionContent>
    </div>
  );
}
