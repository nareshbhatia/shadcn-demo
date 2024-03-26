import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { findSidebarNavItem } from '@/config/sidebar-nav';

export default function PopoverDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Popover']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />

      <Heading2>Example</Heading2>
      <div className="flex h-96 items-center justify-center space-x-2 rounded-lg border">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    className="col-span-2 h-8"
                    defaultValue="100%"
                    id="width"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    className="col-span-2 h-8"
                    defaultValue="300px"
                    id="maxWidth"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    className="col-span-2 h-8"
                    defaultValue="25px"
                    id="height"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    className="col-span-2 h-8"
                    defaultValue="none"
                    id="maxHeight"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
