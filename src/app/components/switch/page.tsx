import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { findSidebarNavItem } from '@/config/sidebar-nav';

export default function SwitchDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Switch']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />

      <Heading2>Example</Heading2>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  );
}
