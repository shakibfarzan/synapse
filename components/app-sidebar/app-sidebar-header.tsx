import React from 'react';
import { SidebarHeader } from '@/components/ui/sidebar';
import { BrainCircuit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import routes from '@/constants/routes';

const AppSidebarHeader: React.FC = () => {
  const router = useRouter();
  return (
    <SidebarHeader className="px-5 pt-6">
      <div className="mb-8 flex items-center gap-4">
        <div
          className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-linear-to-br
                from-primary to-accent
                shadow-[0_0_60px_var(--primary)]
              "
        >
          <BrainCircuit className="h-7 w-7" />
        </div>

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
        <div className="flex items-center gap-3">
          <Plus className="h-5 w-5" />
          New Thought
        </div>
      </Button>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
