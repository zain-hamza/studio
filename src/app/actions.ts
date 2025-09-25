'use server';

import { getCareerSuggestions, type CareerSuggestionsInput, type CareerSuggestionsOutput } from "@/ai/flows/ai-career-advisor";
import { generateDayInTheLife, type DayInTheLifeInput, type DayInTheLifeOutput } from "@/ai/flows/generate-day-in-the-life";
import { type Role } from '@/data/cs-hierarchy';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeAdminApp } from '@/firebase/admin';

initializeAdminApp();
const db = getFirestore();

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

interface PlainSubfield {
    name: string;
    skills: string[];
    tools: string[];
}

interface SaveRoleInput {
    userId: string;
    role: Role;
    subfield: PlainSubfield;
}

export async function saveRoleAction({ userId, role, subfield }: SaveRoleInput): Promise<{ success: boolean; roleId: string }> {
    if (!userId) {
        throw new Error('User is not authenticated.');
    }
    try {
        const savedRoleRef = db.collection('users').doc(userId).collection('savedRoles');
        const roleData = {
            name: role.name,
            responsibilities: role.responsibilities,
            skills: subfield.skills,
            tools: subfield.tools,
            parentSubfield: subfield.name,
            savedAt: new Date().toISOString()
        };

        const docRef = await savedRoleRef.add(roleData);

        return { success: true, roleId: docRef.id };
    } catch (error) {
        console.error('Error saving role:', error);
        throw new Error('Could not save the role.');
    }
}


interface UnsaveRoleInput {
    userId: string;
    roleId: string;
}

export async function unsaveRoleAction({ userId, roleId }: UnsaveRoleInput): Promise<{ success: boolean }> {
    if (!userId) {
        throw new Error('User is not authenticated.');
    }
    try {
        const roleRef = db.collection('users').doc(userId).collection('savedRoles').doc(roleId);
        await roleRef.delete();
        return { success: true };
    } catch (error) {
        console.error('Error unsaving role:', error);
        throw new Error('Could not unsave the role.');
    }
}
