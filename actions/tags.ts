'use server';

import { auth } from '@clerk/nextjs/server';
import { createTagSchema, CreateTagInput } from '@/lib/schemas/tag.schema';
import { ActionResult } from '@/lib/types';
import { createTag, getTags, getTagsWithCount } from '@/db/tags';
import { Prisma, Tag } from '@/lib/generated/prisma/client';

export async function createTagAction(input: CreateTagInput): Promise<ActionResult<Tag>> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const parsed = createTagSchema.safeParse(input);
    if (!parsed.success) {
      return { success: false, error: parsed.error.message };
    }

    const tag = await createTag({ ...parsed.data, userId });
    return { success: true, data: tag };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { success: false, error: 'Tag already exists' };
      }
    }
    console.error('[createTagAction]', error);
    return { success: false, error: 'Something went wrong' };
  }
}

export async function getTagsWithCountAction(): Promise<
  ActionResult<Awaited<ReturnType<typeof getTagsWithCount>>>
> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const tags = await getTagsWithCount(userId);
    return { success: true, data: tags };
  } catch (error) {
    console.error('[getTagsWithCountAction]', error);
    return { success: false, error: 'Something went wrong' };
  }
}

export async function getTagsAction(): Promise<ActionResult<Awaited<ReturnType<typeof getTags>>>> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const tags = await getTags(userId);
    return { success: true, data: tags };
  } catch (error) {
    console.error('[getTagsAction]', error);
    return { success: false, error: 'Something went wrong' };
  }
}
