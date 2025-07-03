'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { type Subfield } from '@/data/cs-hierarchy';
import { Briefcase, Wrench, GraduationCap, TrendingUp, Loader2, WandSparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { generateDayInTheLifeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface FieldCardProps {
  subfield: Subfield;
}

export function FieldCard({ subfield }: FieldCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDayInTheLifeClick = async (roleName: string) => {
    setIsLoading(true);
    setDialogTitle(`A Day in the Life of a ${roleName}`);
    setDialogContent('');
    setIsDialogOpen(true);

    generateDayInTheLifeAction({ roleName })
      .then((result) => {
        setDialogContent(result.dayInTheLife);
      })
      .catch((error) => {
        setIsDialogOpen(false);
        toast({
          variant: 'destructive',
          title: 'Error',
          description:
            'Could not generate the "Day in the Life". Please try again.',
        });
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <AccordionTrigger className="p-4 text-left hover:no-underline w-full">
        <div className="flex items-center gap-3 w-full">
            <subfield.icon className="h-6 w-6 text-accent" />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{subfield.name}</h3>
              <p className="text-sm text-muted-foreground">{subfield.description}</p>
            </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-6 bg-secondary/50">
        <div className="grid gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" /> Roles & Responsibilities
            </h4>
            <ul className="space-y-4">
              {subfield.roles.map((role) => (
                <li key={role.name}>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <strong className="font-medium">{role.name}</strong>
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-card hover:bg-card/90"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent accordion from toggling
                                handleDayInTheLifeClick(role.name);
                            }}
                            disabled={isLoading}
                        >
                            <WandSparkles className="mr-2 h-4 w-4 text-primary"/>
                            Day in the Life
                        </Button>
                    </div>
                  <p className="text-muted-foreground text-sm mt-1">{role.responsibilities}</p>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
          </DialogHeader>
          <div className="py-4 [&_h2]:font-headline [&_h2]:text-xl [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center gap-4 p-8 h-full text-muted-foreground">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  <p>Our AI is imagining a day for you...</p>
                </div>
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {dialogContent}
                </ReactMarkdown>
              )}
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
