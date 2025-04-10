import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <div className="w-screen max-w-4xl p-4 bg-amber-50 mt-[5vh] rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">📦 What kind of products can I buy on LocalBoss?</AccordionTrigger>
          <AccordionContent className="text-gray-800">
            You can buy groceries, food, beverages, electronics, and other daily essentials—all from local businesses in your area.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold">🚚 How fast is delivery?</AccordionTrigger>
          <AccordionContent className="text-gray-800">
            We aim for same-day delivery for all orders made before evening hours, depending on store hours and availability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold">💳 How do I pay for my orders?</AccordionTrigger>
          <AccordionContent className="text-gray-800">
            You can pay via card, UPI, or cash on delivery—whichever works best for you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold">🏪 How do you support local stores?</AccordionTrigger>
          <AccordionContent className="text-gray-800">
            Every item you purchase is directly fulfilled by a local shop. We handle the logistics, they focus on great service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold">📍 Where is LocalBoss available?</AccordionTrigger>
          <AccordionContent className="text-gray-800">
            We’re currently serving select neighborhoods and rapidly expanding. Stay tuned for updates in your area!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
