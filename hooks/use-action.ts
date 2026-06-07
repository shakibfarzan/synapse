'use client';

import { useState, useCallback, useTransition } from 'react';
import { ActionResult } from '@/lib/types';

type UseActionOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: string) => void;
};

type UseActionReturn<TInput, TData> = {
  execute: (input: TInput) => Promise<void>;
  data: TData | null;
  error: string | null;
  isPending: boolean;
  reset: () => void;
};

export default function useAction<TInput, TData>(
  action: (input: TInput) => Promise<ActionResult<TData>>,
  options?: UseActionOptions<TData>
): UseActionReturn<TInput, TData> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const reset = useCallback(() => {
    setData(null);
    setError(null);
  }, []);

  const execute = useCallback(
    async (input: TInput) => {
      setError(null);

      startTransition(async () => {
        const result = await action(input);

        if (!result.success) {
          setError(result.error);
          options?.onError?.(result.error);
          return;
        }

        setData(result.data);
        options?.onSuccess?.(result.data);
      });
    },
    [action, options]
  );

  return { execute, data, error, isPending, reset };
}
