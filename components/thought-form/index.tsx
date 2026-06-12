'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { thoughtFormSchema, ThoughtFormValues } from '@/lib/schemas/thought.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mood } from '@/lib/generated/prisma/enums';
import { FieldGroup, FieldLegend, FieldSet } from '@/components/ui/field';
import InputField from '@/components/form/input-field';
import TextareaField from '@/components/form/textarea-field';
import UploaderField from '@/components/form/uploader-field';
import StarField from '@/components/star-field';
import MoodsField from '@/components/thought-form/moods-field';
import TagsField from '@/components/thought-form/tags-field';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import useAction from '@/hooks/use-action';
import { createThoughtAction } from '@/actions/thought';
import { Spinner } from '@/components/ui/spinner';

type Props = {
  tags: { id: string; name: string }[];
};

const ThoughtForm: React.FC<Props> = ({ tags }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(thoughtFormSchema),
    defaultValues: {
      mood: Mood.DREAMY,
      content: '',
      image: [],
      tags: [],
      title: '',
    },
  });

  const { execute, isPending, error } = useAction(createThoughtAction, {
    onSuccess: () => {
      router.push('/all-thoughts');
    },
  });

  async function onSubmit(data: ThoughtFormValues) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('mood', data.mood);
    data.tags?.forEach((tag) => formData.append('tags', tag.value));
    if (data.image?.length && data.image[0]) formData.append('image', data.image[0]);
    await execute(formData);
  }

  return (
    <form
      className="sm:p-16 p-10 relative h-full"
      style={{
        background: `
            radial-gradient(circle at top left, var(--accent), transparent 10%),
            radial-gradient(circle at bottom right, var(--accent), transparent 25%)
          `,
      }}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <StarField />
      <FieldSet className="w-full">
        <FieldLegend>New Thought</FieldLegend>
        <FieldGroup className="flex w-full flex-col sm:flex-row">
          <FieldGroup className="w-full sm:w-1/2 flex flex-col">
            <InputField
              name="title"
              label="Title"
              control={form.control}
              isRequired
              placeholder="What's on your mind?"
            />
            <TextareaField
              name="content"
              label="Content"
              control={form.control}
              isRequired
              placeholder="Write your thoughts here..."
              rows={8}
            />
            <MoodsField control={form.control} />
          </FieldGroup>
          <FieldGroup className="w-full sm:w-1/2 flex flex-col">
            <TagsField control={form.control} tags={tags} />
            <UploaderField
              name="image"
              label="Image"
              control={form.control}
              maxSizeMB={5}
              maxFiles={1}
              accept={{ 'image/*': ['jpg', 'png'] }}
            />
          </FieldGroup>
        </FieldGroup>
        <div className="w-full flex justify-end">
          <Button type="submit" className="max-w-min" disabled={isPending}>
            {isPending && <Spinner />}
            Create Thought
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default ThoughtForm;
