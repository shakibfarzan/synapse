import React from 'react';
import { SidebarFooter } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { UserButton, useUser } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';

const AppSidebarFooter: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;
  return (
    <SidebarFooter className="mt-auto px-5 pb-6">
      <Separator className="mb-5 bg-foreground/10" />
      <div className="flex items-center gap-3">
        <UserButton
          appearance={{
            theme: shadcn,
            elements: {
              avatarBox: 'h-12! w-12!',
            },
          }}
        />
        <div className="flex flex-col gap-1.5 min-w-0">
          <span className="text-sm font-medium truncate">{user.fullName}</span>

          <span className="text-xs text-muted-foreground truncate">
            {user.primaryEmailAddress?.emailAddress}
          </span>
        </div>
      </div>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
