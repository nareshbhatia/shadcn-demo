'use client';

import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { Heading3 } from '@/components/heading3';
import { Button } from '@/components/ui/button';
import { findSidebarNavItem } from '@/config/sidebar-nav';
import { toast } from 'sonner';

export default function SonnerDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Sonner']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  function handleClickSimple() {
    toast('Your message has been sent.');
  }

  function handleClickWithTitle() {
    toast('Uh oh! Something went wrong.', {
      description: 'There was a problem with your request.',
    });
  }

  function handleClickWithAction() {
    toast('Uh oh! Something went wrong.', {
      description: 'There was a problem with your request.',
      action: {
        label: 'Try again',
        onClick: () => {
          console.log('Try again');
        },
      },
    });
  }

  function handleClickDestructive() {
    toast.error('Uh oh! Something went wrong.', {
      description: 'There was a problem with your request.',
      action: {
        label: 'Try again',
        onClick: () => {
          console.log('Try again');
        },
      },
    });
  }

  function handleClickDuration() {
    toast.error('Uh oh! Something went wrong.', {
      duration: 10000,
      description: 'There was a problem with your request.',
      action: {
        label: 'Try again',
        onClick: () => {
          console.log('Try again');
        },
      },
    });
  }

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />

      <Heading2>Examples</Heading2>

      <Heading3>Simple</Heading3>
      <Button onClick={handleClickSimple} variant="secondary">
        Show Toast
      </Button>

      <Heading3>With Title</Heading3>
      <Button onClick={handleClickWithTitle} variant="secondary">
        Show Toast
      </Button>

      <Heading3>With Action</Heading3>
      <Button onClick={handleClickWithAction} variant="secondary">
        Show Toast
      </Button>

      <Heading3>Destructive</Heading3>
      <Button onClick={handleClickDestructive} variant="secondary">
        Show Toast
      </Button>

      <Heading3>With Duration = 10s (default is 4s)</Heading3>
      <Button onClick={handleClickDuration} variant="secondary">
        Show Toast
      </Button>
    </>
  );
}
