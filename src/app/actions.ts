'use server';

import { getCareerSuggestions, type CareerSuggestionsInput, type CareerSuggestionsOutput } from "@/ai/flows/ai-career-advisor";

export async function getCareerAdviceAction(input: CareerSuggestionsInput): Promise<CareerSuggestionsOutput> {
  try {
    const result = await getCareerSuggestions(input);
    return result;
  } catch (error) {
    console.error("Error in getCareerAdviceAction:", error);
    // In a real app, you'd want more robust error handling
    throw new Error("Failed to get career advice from AI.");
  }
}
