import React, { useEffect } from 'react';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import CreateTagDialog from '@/components/app-sidebar/create-tag-dialog';
import useAction from '@/hooks/use-action';
import { getTagsWithCountAction } from '@/app/actions';
import { Spinner } from '@/components/ui/spinner';

const AppSidebarTags = () => {
  const { execute: fetchTags, data: tags, error, isPending } = useAction(getTagsWithCountAction);

  useEffect(() => {
    (async () => {
      await fetchTags(undefined);
    })();
  }, [fetchTags]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className="
                flex items-center justify-between w-full
                mb-4 px-2
                text-xs tracking-[0.25em]
                text-foreground/50
              "
      >
        TAGS
        <CreateTagDialog onCreated={() => fetchTags(undefined)} />
      </SidebarGroupLabel>

      <SidebarGroupContent>
        {isPending ? (
          <Spinner />
        ) : tags?.length ? (
          <div className="flex flex-wrap gap-3 px-2">
            {tags.map((tag) => (
              <Tag key={tag.name} name={tag.name} count={tag._count.thoughts} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center text-muted-foreground">No tags found</div>
        )}
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
