'use client';

import { mainNavConfig } from '@/config/main-nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <Link className="flex items-center space-x-2" href="/">
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm md:flex">
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/components')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
          href={mainNavConfig.components.href}
        >
          {mainNavConfig.components.title}
        </Link>
        <Link
          className={cn(
            'text-foreground/60 transition-colors hover:text-foreground/80',
          )}
          href={siteConfig.links.github}
        >
          GitHub
        </Link>
      </nav>
    </>
  );
}
