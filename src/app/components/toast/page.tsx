import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';

export default function ToastDocs() {
  return (
    <>
      <DocPath docTitle="Sonner" />
      <Heading1
        description="A succinct message that is displayed temporarily."
        title="Toast"
      />
    </>
  );
}
