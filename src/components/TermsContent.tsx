"use client";

import { useTranslations } from "next-intl";

export default function TermsContent() {
  const t = useTranslations("terms");

  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="text-label-inverted-secondary leading-relaxed mb-4 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  const renderList = (items: string[]) => {
    return (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-label-inverted-secondary leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="min-h-screen bg-bg-inverted py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-label-inverted mb-6">{t("title")}</h1>
        <p className="text-sm mb-12" style={{ color: 'var(--label-secondary-dark)' }}>
          {t("lastUpdated")}
        </p>

        <div className="space-y-12">
          {/* Section 1: Agreement to Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section1.title")}</h2>
            {renderParagraphs(t("section1.content"))}
          </div>

          {/* Section 2: Service Description */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section2.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section2.intro")}</p>
            {renderList(t.raw("section2.items"))}
          </div>

          {/* Section 3: Account Registration */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section3.title")}</h2>
            {renderList(t.raw("section3.items"))}
          </div>

          {/* Section 4: Pricing and Payment */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section4.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section4.sub1.title")}</h3>
                {renderList(t.raw("section4.sub1.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section4.sub2.title")}</h3>
                {renderList(t.raw("section4.sub2.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section4.sub3.title")}</h3>
                {renderList(t.raw("section4.sub3.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section4.sub4.title")}</h3>
                {renderList(t.raw("section4.sub4.items"))}
              </div>
            </div>
          </div>

          {/* Section 5: User Obligations */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section5.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section5.intro")}</p>
            {renderList(t.raw("section5.items"))}
          </div>

          {/* Section 6: Verifactu Compliance */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section6.title")}</h2>
            {renderList(t.raw("section6.items"))}
          </div>

          {/* Section 7: Gestoría Access */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section7.title")}</h2>
            {renderList(t.raw("section7.items"))}
          </div>

          {/* Section 8: Data Protection */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section8.title")}</h2>
            {renderList(t.raw("section8.items"))}

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section8.retention.title")}</h3>
              {renderList(t.raw("section8.retention.items"))}
            </div>

            <p className="text-label-inverted-secondary mt-6">{t("section8.ownership")}</p>
          </div>

          {/* Section 9: Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section9.title")}</h2>
            {renderList(t.raw("section9.items"))}
          </div>

          {/* Section 10: Service Availability */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section10.title")}</h2>
            {renderList(t.raw("section10.items"))}
          </div>

          {/* Section 11: Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section11.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section11.intro")}</p>
            {renderList(t.raw("section11.items"))}
          </div>

          {/* Section 12: Indemnification */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section12.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section12.intro")}</p>
            {renderList(t.raw("section12.items"))}
          </div>

          {/* Section 13: Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section13.title")}</h2>
            {renderList(t.raw("section13.items"))}
          </div>

          {/* Section 14: Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section14.title")}</h2>
            <p className="text-label-inverted-secondary mb-6">{t("section14.law")}</p>

            <div>
              <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section14.disputes.title")}</h3>
              {renderList(t.raw("section14.disputes.items"))}
            </div>
          </div>

          {/* Section 15: Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section15.title")}</h2>
            {renderList(t.raw("section15.items"))}
          </div>

          {/* Section 16: Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section16.title")}</h2>
            <div className="p-4 bg-bg-secondary rounded-lg">
              {renderParagraphs(t("section16.contact"))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
