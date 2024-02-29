import { cn } from '@/lib/utils';
import Balance from 'react-wrap-balancer';

export interface Heading1Props {
  title: string;
  description?: string;
}

export function Heading1({ title, description }: Heading1Props) {
  return (
    <div className="space-y-2">
      <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
        {title}
      </h1>
      {description !== undefined ? (
        <p className="text-lg text-muted-foreground">
          <Balance>{description}</Balance>
        </p>
      ) : undefined}
    </div>
  );
}
