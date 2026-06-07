import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { MOODS } from '@/constants/moods';
import ToggleGroupField from '@/components/form/toggle-group-field';
import { Option } from '@/components/form/form.types';

type Props = {
  control: any;
};

const MoodsField: React.FC<Props> = ({ control }) => {
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
  return (
    <ToggleGroupField
      name="mood"
      label="Mood"
      options={moodsOptions}
      control={control}
      itemClassName={(value) =>
        cn(
          'cursor-pointer h-14 rounded-2xl border border-border transition-all',
          MOODS[value as keyof typeof MOODS].activeClasses
        )
      }
      isRequired
    />
  );
};

export default MoodsField;
