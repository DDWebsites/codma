import SectionTitle from "@/components/reusable/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { faqItems } from "@/constants";

export default function FAQ() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          tag="FAQ"
          title="Questions Fréquemment Posées"
          description="Trouvez des réponses aux questions les plus courantes."
        />
        <div className="max-w-4xl mx-auto mt-15">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-200/30 border border-gray-300 rounded-2xl px-6 data-[state=open]:bg-muted/50 shadow-sm data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline group cursor-pointer">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <Plus className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:hidden" />
                      <Minus className="h-5 w-5 text-primary transition-transform duration-300 hidden group-data-[state=open]:block" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous avez encore des questions ? Nous sommes là pour vous aider !
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/contact">Contacter le support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
