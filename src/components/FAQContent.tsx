"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQContent() {
  const t = useTranslations("faq");

  const categoryKeys = ["compliance", "scope", "pricing", "privacy", "operations"];

  const faqData = categoryKeys.map((categoryKey) => {
    const categoryT = t.raw(`categories.${categoryKey}`);
    const questions = Object.keys(categoryT.questions).map((qKey) => ({
      question: categoryT.questions[qKey].question,
      answer: categoryT.questions[qKey].answer,
    }));

    return {
      category: categoryT.title,
      questions,
    };
  });

  return (
    <section className="flex flex-col items-center justify-center bg-bg-inverted" style={{ margin: '40px 0' }}>
      <div className="w-full max-w-3xl px-6">
        <div className="text-left mb-6">
          <h1 className="text-5xl font-bold text-label-inverted mb-12">{t("title")}</h1>
          <h2 className="text-title2-emphasized text-label-inverted">
            {faqData[0]?.category}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {categoryIndex > 0 && (
                <h2 className="text-title2-emphasized text-label-inverted mt-8 mb-4">
                  {category.category}
                </h2>
              )}
              {category.questions.map((item, index) => (
                <AccordionItem
                  key={`${categoryIndex}-${index}`}
                  value={`item-${categoryIndex}-${index}`}
                  className="border-0 rounded-2xl overflow-hidden bg-bg-secondary data-[state=open]:bg-bg-tertiary transition-colors"
                >
                  <AccordionTrigger className="text-headline text-label-inverted hover:no-underline text-left px-6 py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-label-inverted-secondary px-6 pb-5 pt-0">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}