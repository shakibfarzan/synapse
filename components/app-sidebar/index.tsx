'use client';

import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

import { Separator } from '@/components/ui/separator';
import AppSidebarHeader from '@/components/app-sidebar/app-sidebar-header';
import AppSidebarMenu from '@/components/app-sidebar/app-sidebar-menu';
import AppSidebarMoods from '@/components/app-sidebar/app-sidebar-moods';
import AppSidebarTags from '@/components/app-sidebar/app-sidebar-tags';
import AppSidebarFooter from '@/components/app-sidebar/app-sidebar-footer';

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
      <AppSidebarFooter />
    </Sidebar>
  );
}
