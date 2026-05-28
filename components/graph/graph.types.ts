import type { Node } from '@xyflow/react';

export type ThoughtNodeType = Node<
  { title: string; text?: string; image?: string; date?: string; mood?: string; tags?: string[] },
  'thought'
>;
