import React, { useEffect } from 'react';
import MultiSelectField from '@/components/form/multi-select-field';
import useAction from '@/hooks/use-action';
import { getTagsAction } from '@/actions/tag';

type Props = {
  control: any;
  tags: { name: string; id: string }[];
};

const TagsField: React.FC<Props> = ({ control, tags }) => {
  return (
    <MultiSelectField
      name="tags"
      label="Tags"
      options={tags ? tags.map((tag) => ({ label: tag.name, value: tag.id })) : []}
      isMultiSelect
      control={control}
      placeholder="Add tags..."
    />
  );
};

export default TagsField;
