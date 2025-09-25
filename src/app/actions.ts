'use server';

import { getCareerSuggestions, type CareerSuggestionsInput, type CareerSuggestionsOutput } from "@/ai/flows/ai-career-advisor";
import { generateDayInTheLife, type DayInTheLifeInput, type DayInTheLifeOutput } from "@/ai/flows/generate-day-in-the-life";

export async function getCareerAdviceAction(input: CareerSuggestionsInput): Promise<CareerSuggestionsOutput> {
  try {
    const result = await getCareerSuggestions(input);
    return result;
  } catch (error) {
    console.error("Error in getCareerAdviceAction:", error);
    throw new Error("Failed to get career advice from AI.");
  }
}


export async function generateDayInTheLifeAction(input: DayInTheLifeInput): Promise<DayInTheLifeOutput> {
  try {
    const result = await generateDayInTheLife(input);
    return result;
  } catch (error) {
    console.error("Error in generateDayInTheLifeAction:", error);
    throw new Error("Failed to generate 'Day in the Life' from AI.");
  }
}
