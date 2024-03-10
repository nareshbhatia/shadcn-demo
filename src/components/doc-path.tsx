import { Icons } from '@/icons';

export interface DocPathProps {
  sectionTitle?: string;
  docTitle: string;
}

export function DocPath({ sectionTitle = 'Docs', docTitle }: DocPathProps) {
  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      <div className="truncate">{sectionTitle}</div>
      <Icons.chevronRight className="size-4" />
      <div className="font-medium text-foreground">{docTitle}</div>
    </div>
  );
}
