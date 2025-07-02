// src/ai/flows/ai-career-advisor.ts
'use server';

/**
 * @fileOverview Provides career advice within a specified computer science discipline.
 *
 * - getCareerSuggestions - A function that generates career suggestions based on user interests.
 * - CareerSuggestionsInput - The input type for the getCareerSuggestions function.
 * - CareerSuggestionsOutput - The return type for the getCareerSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerSuggestionsInputSchema = z.object({
  discipline: z.string().describe('The computer science discipline the user is interested in. Can be "Any".'),
  interests: z.string().describe('A brief description of the user\'s interests and skills.'),
});

export type CareerSuggestionsInput = z.infer<typeof CareerSuggestionsInputSchema>;

const CareerSuggestionsOutputSchema = z.object({
  suggestedRoles: z.array(z.string()).describe('A list of suggested career roles.'),
  suggestedCourses: z.array(z.string()).describe('A list of suggested courses or programs to maximize potential in the field.'),
  potentialSkills: z.array(z.string()).describe('A list of potential skills to develop for these roles.')
});

export type CareerSuggestionsOutput = z.infer<typeof CareerSuggestionsOutputSchema>;

export async function getCareerSuggestions(input: CareerSuggestionsInput): Promise<CareerSuggestionsOutput> {
  return aiCareerAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCareerAdvisorPrompt',
  input: {schema: CareerSuggestionsInputSchema},
  output: {schema: CareerSuggestionsOutputSchema},
  prompt: `You are an AI career advisor specializing in computer science.

You will provide career suggestions based on the user's interests.
The user has specified the following discipline: '{{{discipline}}}'.
If the discipline is 'Any', provide suggestions across the entire field of computer science. Otherwise, focus your suggestions on the specified discipline.

Interests: {{{interests}}}

Based on the above information, suggest relevant career roles, courses/programs, and potential skills to develop.

Format the output as a JSON object.
`
});

const aiCareerAdvisorFlow = ai.defineFlow(
  {
    name: 'aiCareerAdvisorFlow',
    inputSchema: CareerSuggestionsInputSchema,
    outputSchema: CareerSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
