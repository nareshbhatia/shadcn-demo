import type { SidebarNavItem } from '@/types/nav';

export const sidebarNavConfig: SidebarNavItem[] = [
  {
    title: 'Components',
    items: [
      {
        title: 'Accordion',
        description:
          'A vertically stacked set of interactive headings that each reveal a section of content.',
        href: '/components/accordion',
        items: [],
      },
      {
        title: 'Card',
        description: 'Displays a card with header, content, and footer.',
        href: '/components/card',
        items: [],
      },
      {
        title: 'Data Table',
        description: 'Powerful table and datagrids built using TanStack Table.',
        href: '/components/data-table',
        items: [],
      },
      {
        title: 'Navigation Menu',
        description: 'A collection of links for navigating websites.',
        href: '/components/navigation-menu',
        items: [],
      },
      {
        title: 'Resizable',
        description:
          'Accessible resizable panel groups and layouts with keyboard support.',
        href: '/components/resizable',
        items: [],
      },
      {
        title: 'Sonner',
        description: 'An opinionated toast component for React.',
        href: '/components/sonner',
        items: [],
      },
      {
        title: 'Switch',
        description:
          'A control that allows the user to toggle between checked and not checked.',
        href: '/components/switch',
        items: [],
      },
      {
        title: 'Table',
        description: 'A responsive table component.',
        href: '/components/table',
        items: [],
      },
      {
        title: 'Toast',
        description: 'A succinct message that is displayed temporarily.',
        href: '/components/toast',
        items: [],
      },
    ],
  },
];

function findSidebarNavItemDeep(
  parentItem: SidebarNavItem,
  titles: string[],
): SidebarNavItem | undefined {
  const childItem = parentItem.items.find((item) => item.title === titles[0]);
  return childItem
    ? titles.length > 1
      ? findSidebarNavItemDeep(childItem, titles.slice(1))
      : childItem
    : undefined;
}

export function findSidebarNavItem(
  titles: string[],
): SidebarNavItem | undefined {
  const parentItem = sidebarNavConfig.find((item) => item.title === titles[0]);
  return parentItem
    ? titles.length > 1
      ? findSidebarNavItemDeep(parentItem, titles.slice(1))
      : parentItem
    : undefined;
}
