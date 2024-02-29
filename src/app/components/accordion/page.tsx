import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionDocs() {
  return (
    <>
      <DocPath docTitle="Accordion" />
      <Heading1
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        title="Accordion"
      />

      <Heading2>Example</Heading2>
      <Accordion className="w-full" collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
