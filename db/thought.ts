import { prisma } from '@/lib/prisma';
import { Mood } from '@/lib/generated/prisma/enums';

type CreateThoughtData = {
  title: string;
  content: string;
  mood: Mood;
  imageCid?: string;
  userId: string;
  tags?: string[];
};

export async function createThought({
  title,
  content,
  mood,
  imageCid,
  userId,
  tags,
}: CreateThoughtData) {
  return prisma.thought.create({
    data: {
      title,
      content,
      mood,
      imageCid,
      userId,
      tags: tags?.length
        ? {
            create: tags.map((tagId) => ({ tagId })),
          }
        : undefined,
    },
    include: {
      tags: { include: { tag: true } },
    },
  });
}
