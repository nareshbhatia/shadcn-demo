import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { findSidebarNavItem } from '@/config/sidebar-nav';

export default function ResizableDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Resizable']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />
    </>
  );
}
