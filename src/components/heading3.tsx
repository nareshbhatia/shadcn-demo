import { cn } from '@/lib/utils';

export interface Heading3Props {
  children: React.ReactNode;
}

export function Heading3({ children }: Heading3Props) {
  return (
    <h3
      className={cn(
        'mt-8 mb-2 scroll-m-20 text-xl font-semibold tracking-tight',
      )}
    >
      {children}
    </h3>
  );
}
