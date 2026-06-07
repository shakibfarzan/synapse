'use client';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { thoughtFormSchema, ThoughtFormValues } from '@/lib/schemas/thought.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mood } from '@/lib/generated/prisma/enums';
import { FieldGroup, FieldLegend, FieldSet } from '@/components/ui/field';
import InputField from '@/components/form/input-field';
import TextareaField from '@/components/form/textarea-field';
import ToggleGroupField from '@/components/form/toggle-group-field';
import { MOODS } from '@/constants/moods';
import { Option } from '@/components/form/form.types';
import MultiSelectField from '@/components/form/multi-select-field';
import UploaderField from '@/components/form/uploader-field';
import { cn } from '@/lib/utils';
import StarField from '@/components/star-field';

const ThoughtForm: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(thoughtFormSchema),
    defaultValues: {
      mood: Mood.DREAMY,
      content: '',
      image: undefined,
      tags: [],
      title: '',
    },
  });

  const moodsOptions = useMemo<Option[]>(
    () =>
      Object.values(MOODS).map((mood) => ({
        value: mood.key,
        label: () => (
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-current" />
            {mood.title}
          </div>
        ),
      })),
    []
  );

  function onSubmit(data: ThoughtFormValues) {
    // Do something with the form values.
    console.log(data);
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
            <ToggleGroupField
              name="mood"
              label="Mood"
              options={moodsOptions}
              control={form.control}
              itemClassName={(value) =>
                cn(
                  'cursor-pointer h-14 rounded-2xl border border-border transition-all',
                  MOODS[value as keyof typeof MOODS].activeClasses
                )
              }
              isRequired
            />
          </FieldGroup>
          <FieldGroup className="w-full sm:w-1/2 flex flex-col">
            <MultiSelectField
              name="tags"
              label="Tags"
              options={[]}
              isMultiSelect
              control={form.control}
              placeholder="Add tags..."
            />
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
      </FieldSet>
    </form>
  );
};

export default ThoughtForm;
