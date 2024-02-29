import { cn } from '@/lib/utils';

export interface Heading2Props {
  children: React.ReactNode;
}

export function Heading2({ children }: Heading2Props) {
  return (
    <h2
      className={cn(
        'mt-8 mb-2 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
      )}
    >
      {children}
    </h2>
  );
}
