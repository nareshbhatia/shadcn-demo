'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link className="mr-6 flex items-center space-x-2" href="/">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
          href="/docs"
        >
          Docs
        </Link>
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
          href="/docs/components"
        >
          Components
        </Link>
        <Link
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
          href={siteConfig.links.github}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
