import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AccordionComp() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-2xl"
      defaultValue="item-1"
    >
      {/* Item 1 */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold px-4 py-4">
          What is your return policy?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-center gap-4 px-6 py-4 text-center">
          <p>
            We offer a <strong>30-day return policy</strong> on most products.
            Items must be unused, in their original packaging, and accompanied
            by a receipt or proof of purchase.
          </p>
          <p>
            Once your return is received and inspected, we will notify you of
            the approval or rejection of your refund. If approved, a credit will
            automatically be applied to your original method of payment within
            5–7 business days.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Item 2 */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold px-4 py-4">
          How long does shipping take?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-center gap-4 px-6 py-4 text-center">
          <p>
            Standard shipping usually takes <strong>5–7 business days</strong>{" "}
            within the continental US. Expedited options are available at
            checkout if you need your order faster.
          </p>
          <p>
            International orders may take longer depending on customs and local
            delivery services. You will receive a tracking number once your
            order ships so you can follow it in real time.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Item 3 */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold px-4 py-4">
          Do you offer customer support?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-center gap-4 px-6 py-4 text-center">
          <p>
            Absolutely! Our support team is available <strong>24/7 via email</strong>{" "}
            and during business hours via live chat. We aim to respond to all
            inquiries within 24 hours.
          </p>
          <p>
            For faster help, please include your order number and a detailed
            description of the issue. You can also check our Help Center for
            answers to common questions.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
