'use client';
import React from 'react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { StickyNote, Waypoints } from 'lucide-react';
import routes from '@/constants/routes';
import useIsCurrentPath from '@/hooks/use-is-current-path';
import { useRouter } from 'next/navigation';

const navigation = [
  {
    title: 'Mind Map',
    icon: Waypoints,
    route: routes.MIND_MAP,
  },
  {
    title: 'All Thoughts',
    icon: StickyNote,
    route: routes.ALL_THOUGHTS,
  },
];

const AppSidebarMenu = () => {
  const isCurrentPath = useIsCurrentPath();
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          {navigation.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => router.push(item.route)}
                isActive={isCurrentPath(item.route)}
                className="
                        relative h-12 cursor-pointer
                        text-foreground transition-all
                        hover:bg-foreground/5
                        data-[active=true]:bg-foreground/5
                        data-[active=true]:text-white
                      "
              >
                {isCurrentPath(item.route) && (
                  <div className="absolute left-0 h-8 w-1 rounded-r-full bg-primary" />
                )}

                <item.icon className="h-5 w-5" />

                <span className="text-base">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default AppSidebarMenu;
