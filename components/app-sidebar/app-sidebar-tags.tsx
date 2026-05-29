import React from 'react';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
const tags = [
  {
    name: 'music',
    count: 6,
  },
  {
    name: 'inspiration',
    count: 4,
  },
  {
    name: 'ideas',
    count: 7,
  },
  {
    name: 'anxiety',
    count: 3,
  },
];

const AppSidebarTags = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className="
                mb-4 px-2
                text-xs tracking-[0.25em]
                text-zinc-500
              "
      >
        TAGS
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <div className="flex flex-wrap gap-3 px-2">
          {tags.map((tag) => (
            <Tag key={tag.name} {...tag} />
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default AppSidebarTags;

type TagProps = {
  name: string;
  count: number;
};

const Tag: React.FC<TagProps> = ({ count, name }) => {
  return (
    <Badge
      key={name}
      className="rounded-xl border border-foreground/5
               bg-foreground/5 px-4 py-2
               text-sm font-medium text-foreground/80
               hover:bg-foreground/10"
    >
      <div className="flex items-center gap-2">
        <span>{name}</span>
        <span className="text-foreground/50">{count}</span>
      </div>
    </Badge>
  );
};
