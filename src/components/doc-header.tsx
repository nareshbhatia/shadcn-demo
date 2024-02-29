import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Balance from 'react-wrap-balancer';

export interface DocHeaderProps {
  title: string;
  description?: string;
}

export function DocHeader({ title, description }: DocHeaderProps) {
  return (
    <>
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="truncate">Docs</div>
        <Icons.chevronRight className="size-4" />
        <div className="font-medium text-foreground">{title}</div>
      </div>
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
    </>
  );
}
