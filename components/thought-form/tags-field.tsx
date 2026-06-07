import React, { useEffect } from 'react';
import MultiSelectField from '@/components/form/multi-select-field';
import useAction from '@/hooks/use-action';
import { getTagsAction } from '@/actions/tags';

type Props = {
  control: any;
};

const TagsField: React.FC<Props> = ({ control }) => {
  const { data, execute, isPending } = useAction(getTagsAction);

  useEffect(() => {
    (async () => {
      await execute(undefined);
    })();
  }, [execute]);

  return (
    <MultiSelectField
      name="tags"
      label="Tags"
      options={data ? data.map((tag) => ({ label: tag.name, value: tag.id })) : []}
      isMultiSelect
      control={control}
      placeholder="Add tags..."
      disabled={isPending}
    />
  );
};

export default TagsField;
