import React from 'react';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar';

const moods = [
  {
    name: 'All',
    count: 24,
    color: 'bg-sky-400',
  },
  {
    name: 'Dreamy',
    count: 7,
    color: 'bg-violet-400',
  },
  {
    name: 'Dark',
    count: 9,
    color: 'bg-fuchsia-400',
  },
  {
    name: 'Calm',
    count: 5,
    color: 'bg-cyan-400',
  },
  {
    name: 'Chaotic',
    count: 3,
    color: 'bg-rose-400',
  },
];

const AppSidebarMoods = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className="
                mb-4 px-2
                text-xs tracking-[0.25em]
                text-foreground/50
              "
      >
        MOODS
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <div className="space-y-4 px-2">
          {moods.map((mood) => (
            <div key={mood.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${mood.color} shadow-[0_0_10px_currentColor]`}
                />

                <span className="text-foreground/80">{mood.name}</span>
              </div>

              <span className="text-sm text-foreground/60">{mood.count}</span>
            </div>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default AppSidebarMoods;
