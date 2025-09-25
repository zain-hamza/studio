import 'server-only';
import { initializeAdminApp } from '@/firebase/admin';
import admin from 'firebase-admin';
import { cache } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  authorId: string;
  createdAt: admin.firestore.Timestamp;
  updatedAt: admin.firestore.Timestamp;
}

initializeAdminApp();
const db = admin.firestore();

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const snapshot = await db
    .collection('blogPosts')
    .where('isPublished', '==', true)
    .orderBy('createdAt', 'desc')
    .get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as BlogPost)
  );
});

export const getBlogPost = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const snapshot = await db
      .collection('blogPosts')
      .where('slug', '==', slug)
      .where('isPublished', '==', true)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as BlogPost;
  }
);
