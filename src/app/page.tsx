import { Icons } from '@/components/icons';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { mainNavConfig } from '@/config/main-nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Shadcn Components Demo</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link
            className={cn(buttonVariants())}
            href={mainNavConfig.components.href}
          >
            Get Started
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'outline' }))}
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            <Icons.gitHub className="mr-2 size-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
