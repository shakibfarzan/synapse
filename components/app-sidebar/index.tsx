'use client';

import {
  Archive,
  BrainCircuit,
  MoreVertical,
  Plus,
  Star,
  StickyNote,
  Trash2,
  Waypoints,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppSidebarHeader from '@/components/app-sidebar/app-sidebar-header';
import AppSidebarMenu from '@/components/app-sidebar/app-sidebar-menu';
import AppSidebarMoods from '@/components/app-sidebar/app-sidebar-moods';
import AppSidebarTags from '@/components/app-sidebar/app-sidebar-tags';

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent className="px-3 py-6">
        <AppSidebarMenu />
        <Separator className="my-6 bg-foreground/10" />
        <AppSidebarMoods />
        <Separator className="my-6 bg-foreground/10" />
        <AppSidebarTags />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto px-5 pb-6">
        <Separator className="mb-5 bg-foreground/10" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-11 w-11 border border-white/10">
              <AvatarImage src="https://github.com/shadcn.png" />

              <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <div>
              <p className="font-medium text-zinc-200">amir reza</p>

              <p className="text-sm text-zinc-500">View profile</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="
                text-zinc-500
                hover:bg-white/5
                hover:text-white
              "
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
