import type { Icons } from '@/icons';

export interface NavItem {
  title: string;
  description?: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type SidebarNavItem = NavItemWithChildren;
