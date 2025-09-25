'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { useFirestore } from '@/firebase';
import { collection, onSnapshot, query, type DocumentData } from 'firebase/firestore';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Loader2, StarOff } from 'lucide-react';
import { SavedRoleCard } from '@/components/saved-role-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SavedRolesPage() {
  const { user, loading: userLoading } = useUser();
  const firestore = useFirestore();
  const [savedRoles, setSavedRoles] = useState<DocumentData[]>([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  useEffect(() => {
    if (user) {
      const savedRolesCollection = collection(
        firestore,
        'users',
        user.uid,
        'savedRoles'
      );
      const q = query(savedRolesCollection);

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const roles = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSavedRoles(roles);
        setLoadingRoles(false);
      }, (error) => {
        console.error("Error fetching saved roles: ", error);
        setLoadingRoles(false);
      });

      return () => unsubscribe();
    } else if (!userLoading) {
        setLoadingRoles(false);
    }
  }, [user, firestore, userLoading]);

  const isLoading = userLoading || loadingRoles;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  Your Saved Roles
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Review and explore the career paths you are most interested in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {isLoading ? (
              <div className="flex justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            ) : user ? (
              savedRoles.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {savedRoles.map((role) => (
                    <SavedRoleCard key={role.id} role={role} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg flex flex-col items-center gap-4">
                    <StarOff className="h-12 w-12" />
                    <p className="text-lg">You haven't saved any roles yet.</p>
                     <Button asChild>
                        <Link href="/#hierarchy">Explore Roles</Link>
                    </Button>
                </div>
              )
            ) : (
                <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                    <p>Please sign in to see your saved roles.</p>
                </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
