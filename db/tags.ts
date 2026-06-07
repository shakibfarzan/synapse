import { prisma } from '@/lib/prisma';
import { CreateTagInput } from '@/lib/schemas/tag.schema';

export async function createTag({ name, userId }: CreateTagInput & { userId: string }) {
  return prisma.tag.upsert({
    where: { userId_name: { userId, name } },
    update: {},
    create: { name, userId },
  });
}

export async function getTagsWithCount(userId: string) {
  return prisma.tag.findMany({
    where: { userId },
    include: {
      _count: {
        select: { thoughts: true },
      },
    },
    orderBy: {
      thoughts: {
        _count: 'desc',
      },
    },
  });
}

export async function getTags(userId: string) {
  return prisma.tag.findMany({ where: { userId } });
}
