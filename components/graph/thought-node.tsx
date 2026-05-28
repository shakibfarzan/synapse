import React from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import { ThoughtNodeType } from '@/components/graph/graph.types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TagBadges from '@/components/graph/tag-badges';

const ThoughtNode: React.FC<NodeProps<ThoughtNodeType>> = ({
  data: { mood, text, date, image, title, tags },
}) => {
  return (
    <>
      <Handle type="target" position={Position.Left} isConnectable />
      <Card className="relative overflow-hidden border-solid border-white rounded-2xl">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp')",
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black to-black/40" />

        {/* Content */}
        <div className="relative z-10">
          <CardHeader className="gap-4">
            <TagBadges tags={tags ?? []} />
            <CardTitle className="w-7/12">{title}</CardTitle>
            <CardDescription className="w-7/12 text-foreground/70 text-xs">{text}</CardDescription>
          </CardHeader>
          <CardFooter className="text-foreground/70 text-xs">{date}</CardFooter>
        </div>
      </Card>
      <Handle type="source" position={Position.Right} isConnectable />
    </>
  );
};

export default ThoughtNode;
