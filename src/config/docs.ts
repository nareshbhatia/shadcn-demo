import type { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mainNav = {
  components: {
    title: 'Components',
    href: '/components/accordion',
  },
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Components',
      href: '/components/accordion',
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
          title: 'Accordion',
          href: '/components/accordion',
          items: [],
        },
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
