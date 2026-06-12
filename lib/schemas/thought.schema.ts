import { z } from 'zod';
import { Mood } from '@/lib/generated/prisma/enums';

export const thoughtFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  mood: z.enum(Mood),
  tags: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .default([]),
  image: z.array(z.instanceof(File)).default([]),
});

export type ThoughtFormValues = z.infer<typeof thoughtFormSchema>;
