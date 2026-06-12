import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateTagInput, createTagSchema } from '@/lib/schemas/tag.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import useAction from '@/hooks/use-action';
import { createTagAction } from '@/actions/tag';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import InputField from '@/components/form/input-field';
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';
type CreateTagDialogProps = {
  onCreated?: () => void;
};

const CreateTagDialog: React.FC<CreateTagDialogProps> = ({ onCreated }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<CreateTagInput>({
    resolver: zodResolver(createTagSchema),
    defaultValues: {
      name: '',
    },
  });

  const { execute, isPending } = useAction(createTagAction, {
    onSuccess: () => {
      form.reset();
      setOpen(false);
      onCreated?.();
      router.refresh();
    },
  });

  const handleOpenChange = (value: boolean) => {
    if (!value) form.reset();
    setOpen(value);
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="cursor-pointer" asChild>
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Tag</DialogTitle>
          <DialogDescription>Add a new tag to organize your thoughts.</DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(execute)} className="space-y-4">
          <InputField
            name="name"
            label="Name"
            control={form.control}
            isRequired
            placeholder="Tag name"
          />

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Spinner />}
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTagDialog;
