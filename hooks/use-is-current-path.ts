import { usePathname } from 'next/navigation';

type IsCurrentPath = (path: string) => boolean;

const useIsCurrentPath = () => {
  const pathname = usePathname();

  const isCurrentPath: IsCurrentPath = (inputPath) => inputPath === pathname;

  return isCurrentPath;
};

export default useIsCurrentPath;
