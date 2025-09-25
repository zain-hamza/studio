'use client';

import { type DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { unsaveRoleAction } from '@/firebase/actions';
import { useUser } from '@/firebase/auth/use-user';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Briefcase, GraduationCap, Wrench } from 'lucide-react';

interface SavedRoleCardProps {
  role: DocumentData;
}

export function SavedRoleCard({ role }: SavedRoleCardProps) {
    const { user } = useUser();
    const { toast } = useToast();

    const handleUnsave = async () => {
        if (!user) {
            toast({ variant: 'destructive', title: 'You must be signed in.' });
            return;
        }

        try {
            await unsaveRoleAction({ userId: user.uid, roleId: role.id });
            toast({ title: 'Role Unsaved', description: `${role.name} has been removed from your saved list.`});
        } catch (error) {
            toast({ variant: 'destructive', title: 'Error', description: 'Could not unsave role. Please try again.' });
            console.error(error);
        }
    }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="font-headline text-2xl">{role.name}</CardTitle>
            <CardDescription>{role.parentSubfield}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={handleUnsave} aria-label="Unsave role">
            <Trash2 className="h-5 w-5 text-destructive" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm text-primary"><Briefcase className="h-4 w-4" /> Responsibilities</h4>
            <p className="text-sm text-muted-foreground">{role.responsibilities}</p>
        </div>
         <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm text-primary"><GraduationCap className="h-4 w-4" /> Skills</h4>
             <div className="flex flex-wrap gap-1">
                {role.skills?.map((skill: string) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
            </div>
        </div>
         <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm text-primary"><Wrench className="h-4 w-4" /> Tools</h4>
             <div className="flex flex-wrap gap-1">
                {role.tools?.map((tool: string) => <Badge key={tool} variant="outline">{tool}</Badge>)}
            </div>
        </div>

      </CardContent>
    </Card>
  );
}
