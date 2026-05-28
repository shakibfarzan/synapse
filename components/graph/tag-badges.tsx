import React from 'react';
import { Badge } from '@/components/ui/badge';

type Props = {
  tags: string[];
};

const TagBadges: React.FC<Props> = ({ tags }) => {
  if (tags.length === 0) return null;
  return (
    <div className="wrap-normal">
      {tags.map((tag) => (
        <Badge className="w-min" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagBadges;
