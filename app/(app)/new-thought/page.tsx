import React from 'react';
import ThoughtForm from '@/components/thought-form';
import { auth } from '@clerk/nextjs/server';
import { getTags } from '@/db/tag';

const NewThoughtPage = async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const tags = await getTags(userId);
  return <ThoughtForm tags={tags} />;
};

export default NewThoughtPage;
