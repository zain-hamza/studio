
'use client';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type FirebaseError,
} from 'firebase/auth';
import Link from 'next/link';
import { useUser } from '@/firebase/auth/use-user';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogIn, LogOut, Star } from 'lucide-react';
import { useFirebaseApp } from '@/firebase';

function UserAvatar() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return '';
    const names = name.split(' ');
    return names
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Avatar>
      <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? ''} />
      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
    </Avatar>
  );
}

export function AuthButton() {
  const { user, loading } = useUser();
  const app = useFirebaseApp();
  const auth = getAuth(app);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code !== 'auth/popup-closed-by-user') {
        console.error('Error signing in with Google', error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  if (loading) {
    return <Button variant="ghost" size="icon" disabled></Button>;
  }

  if (!user) {
    return (
      <Button variant="ghost" onClick={handleSignIn}>
        <LogIn className="mr-2" />
        Sign In
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/saved-roles">
            <Star className="mr-2 h-4 w-4" />
            <span>Saved Roles</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
