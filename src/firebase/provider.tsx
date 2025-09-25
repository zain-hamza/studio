'use client';

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { createContext, useContext } from 'react';

const FirebaseAppContext = createContext<FirebaseApp | undefined>(undefined);
const FirebaseAuthContext = createContext<Auth | undefined>(undefined);
const FirebaseFirestoreContext = createContext<Firestore | undefined>(undefined);

export const FirebaseProvider = ({
  children,
  app,
  auth,
  firestore,
}: {
  children: React.ReactNode;
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}) => {
  return (
    <FirebaseAppContext.Provider value={app}>
      <FirebaseAuthContext.Provider value={auth}>
        <FirebaseFirestoreContext.Provider value={firestore}>
          {children}
        </FirebaseFirestoreContext.Provider>
      </FirebaseAuthContext.Provider>
    </FirebaseAppContext.Provider>
  );
};

export const useFirebaseApp = () => {
  const app = useContext(FirebaseAppContext);
  if (!app) {
    throw new Error('useFirebaseApp must be used within a FirebaseProvider');
  }
  return app;
};

export const useAuth = () => {
  const auth = useContext(FirebaseAuthContext);
  if (!auth) {
    throw new Error('useAuth must be used within a FirebaseProvider');
  }
  return auth;
};

export const useFirestore = () => {
  const firestore = useContext(FirebaseFirestoreContext);
  if (!firestore) {
    throw new Error('useFirestore must be used within a FirebaseProvider');
  }
  return firestore;
};
