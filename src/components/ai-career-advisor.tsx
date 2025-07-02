'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  BrainCircuit,
  Loader2,
  Briefcase,
  GraduationCap,
  Sparkles,
  BookOpen,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { csParentCategoriesData } from '@/data/cs-hierarchy';
import { useToast } from '@/hooks/use-toast';
import { getCareerAdviceAction } from '@/app/actions';
import { type CareerSuggestionsOutput } from '@/ai/flows/ai-career-advisor';
import { Badge } from './ui/badge';

const formSchema = z.object({
  discipline: z.string().optional(),
  interests: z
    .string()
    .min(10, 'Please describe your interests in at least 10 characters.')
    .max(500, 'Please keep your interests under 500 characters.'),
});

type FormData = z.infer<typeof formSchema>;

export default function AICareerAdvisor() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CareerSuggestionsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discipline: '',
      interests: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setResult(null);
    try {
      const submissionData = {
        ...data,
        discipline: data.discipline || 'Any',
      };
      const response = await getCareerAdviceAction(submissionData);
      setResult(response);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'There was a problem getting your career advice. Please try again.',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <BrainCircuit className="h-10 w-10 text-primary" />
            <div>
              <CardTitle className="text-3xl font-headline">
                AI Career Advisor
              </CardTitle>
              <CardDescription>
                Get personalized career suggestions powered by AI.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="discipline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select a CS Discipline</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="e.g., Software Engineering" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Any" className="font-semibold text-primary">Any Discipline</SelectItem>
                        {csParentCategoriesData.map((parent) => (
                          <SelectGroup key={parent.id}>
                            <SelectLabel>{parent.name}</SelectLabel>
                            {parent.fields.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.field}
                              >
                                {category.field}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests & Skills</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I love building beautiful user interfaces and thinking about user experience. I'm skilled in React and Figma.'"
                        className="resize-none"
                        {...field}
                        disabled={isLoading}
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Get Career Advice'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="flex items-center justify-center">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p>Our AI is crafting your personalized career path...</p>
          </div>
        )}
        {result && (
          <Card className="w-full bg-secondary shadow-lg animate-in fade-in-50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="text-primary"/> Your AI-Generated Career Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Briefcase className="h-5 w-5"/>Suggested Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedRoles.map((role, i) => (
                    <Badge key={i} variant="default">{role}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><GraduationCap className="h-5 w-5"/>Suggested Courses/Programs</h3>
                <ul className="list-disc list-inside space-y-1">
                  {result.suggestedCourses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><BookOpen className="h-5 w-5"/>Potential Skills to Develop</h3>
                 <div className="flex flex-wrap gap-2">
                  {result.potentialSkills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        {!isLoading && !result && (
            <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <p>Your personalized results will appear here.</p>
            </div>
        )}
      </div>
    </div>
  );
}
