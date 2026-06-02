import { Mood } from '@/lib/generated/prisma/enums';

export const MOODS = {
  [Mood.DREAMY]: {
    key: Mood.DREAMY,
    title: 'Dreamy',
    color: 'bg-violet-400',
    activeClasses:
      'data-[state=on]:bg-violet-400/15 data-[state=on]:border-violet-400/50 text-violet-400 data-[state=on]:text-violet-400 hover:bg-violet-400/15 hover:border-violet-400/50 hover:text-violet-400',
  },
  [Mood.CALM]: {
    key: Mood.CALM,
    title: 'Calm',
    color: 'bg-cyan-400',
    activeClasses:
      'data-[state=on]:bg-cyan-400/15 data-[state=on]:border-cyan-400/50 text-cyan-400 data-[state=on]:text-cyan-400 hover:bg-cyan-400/15 hover:border-cyan-400/50 hover:text-cyan-400',
  },
  [Mood.DARK]: {
    key: Mood.DARK,
    title: 'Dark',
    color: 'bg-slate-400',
    activeClasses:
      'data-[state=on]:bg-slate-400/15 data-[state=on]:border-slate-400/50 text-slate-400 data-[state=on]:text-slate-400 hover:bg-slate-400/15 hover:border-slate-400/50 hover:text-slate-400',
  },
  [Mood.CHAOTIC]: {
    key: Mood.CHAOTIC,
    title: 'Chaotic',
    color: 'bg-orange-400',
    activeClasses:
      'data-[state=on]:bg-orange-400/15 data-[state=on]:border-orange-400/50 text-orange-400 data-[state=on]:text-orange-400 hover:bg-orange-400/15 hover:border-orange-400/50 hover:text-orange-400',
  },
} as const;
