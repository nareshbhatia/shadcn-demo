import type { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mainNav = {
  components: {
    title: 'Components',
    href: '/components/sonner',
  },
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Components',
      href: '/components/sonner',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/shadcn/ui',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Components',
      items: [
        {
          title: 'Sonner',
          href: '/components/sonner',
          items: [],
        },
        {
          title: 'Toast',
          href: '/components/toast',
          items: [],
        },
      ],
    },
  ],
};
