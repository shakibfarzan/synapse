import React from 'react';
import { SidebarHeader } from '@/components/ui/sidebar';
import { BrainCircuit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import routes from '@/constants/routes';
import Image from 'next/image';

const AppSidebarHeader: React.FC = () => {
  const router = useRouter();
  return (
    <SidebarHeader className="px-5 pt-6">
      <div className="mb-8 flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={80} height={80} />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">synapse</h1>
          <p className="text-sm text-foreground/50">second brain</p>
        </div>
      </div>

      <Button
        onClick={() => router.push(routes.NEW_THOUGHT)}
        size="lg"
        className="font-medium shadow-[0_0_60px_var(--primary)]"
      >
        <div className="flex items-center gap-3 relative">
          <Plus className="h-5 w-5 absolute -left-6" />
          New Thought
        </div>
      </Button>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
