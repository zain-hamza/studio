'use server';

import { getCareerSuggestions, type CareerSuggestionsInput, type CareerSuggestionsOutput } from "@/ai/flows/ai-career-advisor";
import { generateDayInTheLife, type DayInTheLifeInput, type DayInTheLifeOutput } from "@/ai/flows/generate-day-in-the-life";
import { generateRoleImage, type RoleImageInput, type RoleImageOutput } from "@/ai/flows/generate-role-image";

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


export async function generateDayInTheLifeAction(input: DayInTheLifeInput): Promise<DayInTheLifeOutput> {
  try {
    const result = await generateDayInTheLife(input);
    return result;
  } catch (error) {
    console.error("Error in generateDayInTheLifeAction:", error);
    throw new Error("Failed to generate 'Day in the Life' from AI.");
  }
}


export async function generateRoleImageAction(input: RoleImageInput): Promise<RoleImageOutput> {
  try {
    const result = await generateRoleImage(input);
    return result;
  } catch (error) {
    console.error("Error in generateRoleImageAction:", error);
    throw new Error("Failed to generate role image from AI.");
  }
}
