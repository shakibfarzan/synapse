'use server';

import { auth } from '@clerk/nextjs/server';
import { pinata } from '@/lib/pinata';
import { createThought } from '@/db/thought';
import { ActionResult } from '@/lib/types';
import { Mood, Prisma, Thought } from '@/lib/generated/prisma/client';
import { MOODS } from '@/constants/moods';

export async function createThoughtAction(formData: FormData): Promise<ActionResult<Thought>> {
  try {
    const { userId } = await auth();
    if (!userId) return { success: false, error: 'Unauthorized' };
    const raw = {
      title: (formData.get('title') as string) ?? '',
      content: (formData.get('content') as string) ?? '',
      mood: (formData.get('mood') as Mood) ?? MOODS.DREAMY,
      tags: formData.getAll('tags') as string[],
      image: formData.get('image') as File,
    };

    const { title, content, mood, tags, image } = raw;

    let imageCid: string | undefined;
    if (image && image.size > 0) {
      const upload = await pinata.upload.public.file(image);
      imageCid = upload.cid;
    }

    const thought = await createThought({
      title,
      content,
      mood,
      imageCid,
      userId,
      tags,
    });

    return { success: true, data: thought };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2003') {
        return { success: false, error: 'One or more tags not found' };
      }
    }
    console.error('[createThoughtAction]', error);
    return { success: false, error: 'Something went wrong' };
  }
}
