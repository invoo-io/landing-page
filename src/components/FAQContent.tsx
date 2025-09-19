"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQContent() {
  const faqData = [
    {
      category: "VeriFActu Compliance (AEAT)",
      questions: [
        {
          question: "Is Invoo VeriFActu compliant?",
          answer: "Yes, Invoo is fully VeriFActu compliant. We handle all technical requirements and automatically submit your invoices to AEAT in real-time."
        },
        {
          question: "When does VeriFActu become mandatory?",
          answer: "The regulation sets 1 de julio de 2025 as the general entry into force. Some details roll out in stages; we'll switch to production endpoints as AEAT opens them and keep you updated in-app."
        },
        {
          question: "Does VeriFActu mean invoices are 'approved' instantly by AEAT?",
          answer: "No, VeriFActu is a reporting system, not an approval system. AEAT receives and records your invoices but doesn't approve or reject them in real-time."
        },
        {
          question: "Do I need my own digital certificate?",
          answer: "No, you don't need your own digital certificate. Invoo handles all the technical certification and communication with AEAT on your behalf."
        }
      ]
    },
    {
      category: "Scope and Availability",
      questions: [
        {
          question: "Who is Invoo for?",
          answer: "Invoo is designed for Spanish freelancers (autónomos) who want simple, compliant invoicing without the complexity of traditional accounting software."
        },
        {
          question: "What does Invoo include at launch?",
          answer: "At launch, Invoo includes professional invoice creation, automatic VeriFActu compliance, expense tracking, quarterly tax summaries, and a dashboard for your gestoría."
        },
        {
          question: "Is there a mobile app?",
          answer: "Yes, we have mobile apps for both iOS and Android, allowing you to create invoices and track expenses on the go."
        }
      ]
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "How much does Invoo cost?",
          answer: "Invoo costs €9/month for freelancers. This includes unlimited invoices, expense tracking, and full VeriFActu compliance."
        },
        {
          question: "Can I cancel anytime? Do you offer refunds?",
          answer: "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied with Invoo."
        },
        {
          question: "Is the gestoría plan really free?",
          answer: "Yes, the gestoría dashboard is completely free. Gestorías can access all their clients' data in real-time at no cost."
        }
      ]
    },
    {
      category: "Privacy and Security (GDPR)",
      questions: [
        {
          question: "Where is my data stored?",
          answer: "Your data is securely stored in EU data centers, fully compliant with GDPR and Spanish data protection regulations."
        },
        {
          question: "Who can see my invoices and expenses?",
          answer: "Only you and your authorized gestoría (if connected) can see your invoices and expenses. All data is encrypted and private."
        },
        {
          question: "Can I export my data?",
          answer: "Yes, you can export all your data at any time in CSV format, compatible with any accounting software."
        }
      ]
    },
    {
      category: "Operations and Support",
      questions: [
        {
          question: "What happens if AEAT is down?",
          answer: "If AEAT systems are down, Invoo queues your invoices and automatically resubmits them once AEAT is back online. You're always compliant."
        },
        {
          question: "How do I get help?",
          answer: "We offer email support at support@invoo.io and have extensive documentation. Premium support with faster response times is available."
        },
        {
          question: "When will Invoo be generally available?",
          answer: "Invoo will be generally available before July 1, 2025, well ahead of the VeriFActu mandatory date."
        }
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-black" style={{ margin: '40px 0' }}>
      <div className="w-full max-w-3xl px-6">
        <div className="text-left mb-6">
          <h1 className="text-5xl font-bold text-white mb-12">FAQs</h1>
          <p className="text-white text-lg font-bold">
            VeriFActu Compliance (AEAT)
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {categoryIndex > 0 && (
                <h2 className="text-white text-lg font-bold mt-8 mb-4">
                  {category.category}
                </h2>
              )}
              {category.questions.map((item, index) => (
                <AccordionItem
                  key={`${categoryIndex}-${index}`}
                  value={`item-${categoryIndex}-${index}`}
                  className=" bg-[#0D0D0D] border border-white/5 rounded-2xl overflow-hidden data-[state=open]:bg-[#1A1A1A] transition-colors"
                >
                  <AccordionTrigger className="text-white hover:no-underline hover:text-white/90 text-left font-normal px-6 py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 px-6 pb-5 pt-0">
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