import { z } from 'zod';

export const createTagSchema = z.object({
  name: z
    .string()
    .min(1, 'Tag name is required')
    .max(50, 'Tag name must be 50 characters or less')
    .trim(),
});

export type CreateTagInput = z.infer<typeof createTagSchema>;
