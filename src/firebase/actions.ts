'use client';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  type Firestore,
} from 'firebase/firestore';
import { initializeFirebase } from '.';
import { type Role, type Subfield } from '@/data/cs-hierarchy';

const { firestore } = initializeFirebase();

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

export async function saveRoleAction({ userId, role, subfield }: SaveRoleInput) {
    if (!userId) {
        throw new Error('User is not authenticated.');
    }
    try {
        const savedRoleRef = collection(firestore, 'users', userId, 'savedRoles');
        const roleData = {
            name: role.name,
            responsibilities: role.responsibilities,
            skills: subfield.skills,
            tools: subfield.tools,
            parentSubfield: subfield.name,
            savedAt: new Date().toISOString()
        };

        const docRef = await addDoc(savedRoleRef, roleData);
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

export async function unsaveRoleAction({ userId, roleId }: UnsaveRoleInput) {
    if (!userId) {
        throw new Error('User is not authenticated.');
    }
    try {
        const roleRef = doc(firestore, 'users', userId, 'savedRoles', roleId);
        await deleteDoc(roleRef);
        return { success: true };
    } catch (error) {
        console.error('Error unsaving role:', error);
        throw new Error('Could not unsave the role.');
    }
}
