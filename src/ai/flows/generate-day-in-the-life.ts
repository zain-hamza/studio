'use server';
/**
 * @fileOverview Generates a "Day in the Life" description for a given career role.
 *
 * - generateDayInTheLife - A function that creates a daily schedule for a tech role.
 * - DayInTheLifeInput - The input type for the generateDayInTheLife function.
 * - DayInTheLifeOutput - The return type for the generateDayInTheLife function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DayInTheLifeInputSchema = z.object({
  roleName: z.string().describe('The name of the career role.'),
});
export type DayInTheLifeInput = z.infer<typeof DayInTheLifeInputSchema>;

const DayInTheLifeOutputSchema = z.object({
  dayInTheLife: z
    .string()
    .describe(
      'A markdown-formatted description of a typical day for the given role. Use headings for time slots and bullet points for activities.'
    ),
});
export type DayInTheLifeOutput = z.infer<typeof DayInTheLifeOutputSchema>;

export async function generateDayInTheLife(
  input: DayInTheLifeInput
): Promise<DayInTheLifeOutput> {
  return generateDayInTheLifeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dayInTheLifePrompt',
  input: {schema: DayInTheLifeInputSchema},
  output: {schema: DayInTheLifeOutputSchema},
  prompt: `You are a career expert in the tech industry.
Given the role name '{{{roleName}}}', generate a plausible and interesting 'Day in the Life' schedule.
The output should be a single block of Markdown text.
Use markdown headings for time slots (e.g., '## 9:00 AM - 10:00 AM') and bullet points for activities within each time slot.
Make the description engaging and informative for someone exploring this career path.
`,
});

const generateDayInTheLifeFlow = ai.defineFlow(
  {
    name: 'generateDayInTheLifeFlow',
    inputSchema: DayInTheLifeInputSchema,
    outputSchema: DayInTheLifeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
