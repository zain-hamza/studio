'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

// Initialize Firebase on the client side
const { app, auth, firestore } = initializeFirebase();

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseProvider app={app} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
