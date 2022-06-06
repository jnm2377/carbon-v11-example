import { Accordion as CarbonAccordion, AccordionItem } from '@carbon/react';

export function Accordion() {
  return (
    <CarbonAccordion className="accordion-spacing">
      <AccordionItem title="Section 1 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 2 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
    </CarbonAccordion>
  );
}
