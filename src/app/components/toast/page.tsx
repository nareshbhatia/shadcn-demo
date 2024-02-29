'use client';

import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { Heading3 } from '@/components/heading3';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export default function ToastDocs() {
  const { toast } = useToast();

  function handleClickSimple() {
    toast({
      description: 'Your message has been sent.',
    });
  }

  function handleClickWithTitle() {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    });
  }

  function handleClickWithAction() {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  function handleClickDestructive() {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  function handleClickDuration() {
    toast({
      duration: 10000,
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <>
      <DocPath docTitle="Sonner" />
      <Heading1
        description="A succinct message that is displayed temporarily."
        title="Toast"
      />

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

      <Heading3>With Duration = 10s (default is 5s)</Heading3>
      <Button onClick={handleClickDuration} variant="secondary">
        Show Toast
      </Button>
    </>
  );
}
