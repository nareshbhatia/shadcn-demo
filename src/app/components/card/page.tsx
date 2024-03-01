import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { findSidebarNavItem } from '@/config/sidebar-nav';
import { cn } from '@/lib/utils';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

export default function CardDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Card']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />

      <Heading2>Example</Heading2>
      <Card className={cn('w-[380px]')}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <Icons.bellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                key={index}
              >
                <span className="flex size-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Icons.check className="mr-2 size-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
