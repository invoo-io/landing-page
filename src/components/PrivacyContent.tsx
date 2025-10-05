"use client";

import { useTranslations } from "next-intl";

export default function PrivacyContent() {
  const t = useTranslations("privacy");

  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="text-label-inverted-secondary leading-relaxed mb-4 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  const renderList = (items: string[]) => {
    return (
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="text-label-inverted-secondary leading-relaxed flex">
            <span className="mr-2">•</span>
            <span>{item}</span>
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
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section1.title")}</h2>
            {renderParagraphs(t("section1.content"))}
            <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
              {renderParagraphs(t("section1.controller"))}
            </div>
          </div>

          {/* Section 2: Data We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section2.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section2.sub1.title")}</h3>
                {renderList(t.raw("section2.sub1.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section2.sub2.title")}</h3>
                {renderList(t.raw("section2.sub2.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section2.sub3.title")}</h3>
                {renderList(t.raw("section2.sub3.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section2.sub4.title")}</h3>
                {renderList(t.raw("section2.sub4.items"))}
                <p className="text-label-inverted-secondary mt-4 italic">{t("section2.sub4.note")}</p>
              </div>
            </div>
          </div>

          {/* Section 3: How We Use Your Data */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section3.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section3.sub1.title")}</h3>
                <p className="text-label-inverted-secondary mb-4">{t("section3.sub1.intro")}</p>
                {renderList(t.raw("section3.sub1.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section3.sub2.title")}</h3>
                {renderList(t.raw("section3.sub2.items"))}
              </div>
            </div>
          </div>

          {/* Section 4: Data Sharing */}
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
                <p className="text-label-inverted-secondary">{t("section4.sub3.content")}</p>
              </div>
            </div>
          </div>

          {/* Section 5: Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section5.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section5.intro")}</p>
            {renderList(t.raw("section5.items"))}
            <p className="text-label-inverted-secondary mt-4 italic">{t("section5.note")}</p>
          </div>

          {/* Section 6: Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section6.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section6.intro")}</p>
            {renderList(t.raw("section6.items"))}
            <p className="text-label-inverted-secondary mt-6 font-semibold">{t("section6.contact")}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section6.deletion.title")}</h3>
              <p className="text-label-inverted-secondary mb-4">{t("section6.deletion.intro")}</p>
              {renderList(t.raw("section6.deletion.items"))}
            </div>
          </div>

          {/* Section 7: Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section7.title")}</h2>
            {renderList(t.raw("section7.items"))}
          </div>

          {/* Section 8: Cookie Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section8.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section8.sub1.title")}</h3>
                <p className="text-label-inverted-secondary mb-4">{t("section8.sub1.intro")}</p>
                {renderList(t.raw("section8.sub1.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section8.sub2.title")}</h3>
                <p className="text-label-inverted-secondary mb-4">{t("section8.sub2.intro")}</p>
                {renderList(t.raw("section8.sub2.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section8.sub3.title")}</h3>
                <p className="text-label-inverted-secondary mb-4">{t("section8.sub3.intro")}</p>
                {renderList(t.raw("section8.sub3.items"))}
                <p className="text-label-inverted-secondary mt-4 italic">{t("section8.sub3.note")}</p>
              </div>
            </div>
          </div>

          {/* Section 9: Marketing Communications */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section9.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section9.sub1.title")}</h3>
                {renderList(t.raw("section9.sub1.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section9.sub2.title")}</h3>
                <p className="text-label-inverted-secondary">{t("section9.sub2.content")}</p>
              </div>
            </div>
          </div>

          {/* Section 10: Children's Privacy */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section10.title")}</h2>
            <p className="text-label-inverted-secondary">{t("section10.content")}</p>
          </div>

          {/* Section 11: International Transfers */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section11.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section11.intro")}</p>
            {renderList(t.raw("section11.items"))}
            <p className="text-label-inverted-secondary mt-4 italic">{t("section11.note")}</p>
          </div>

          {/* Section 12: Spanish Data Protection Specifics */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section12.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section12.sub1.title")}</h3>
                <p className="text-label-inverted-secondary">{t("section12.sub1.content")}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section12.sub2.title")}</h3>
                <p className="text-label-inverted-secondary mb-4">{t("section12.sub2.intro")}</p>
                {renderList(t.raw("section12.sub2.items"))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-label-inverted mb-4">{t("section12.sub3.title")}</h3>
                {renderParagraphs(t("section12.sub3.content"))}
              </div>
            </div>
          </div>

          {/* Section 13: Updates to This Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section13.title")}</h2>
            <p className="text-label-inverted-secondary">{t("section13.content")}</p>
          </div>

          {/* Section 14: Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-label-inverted mb-6">{t("section14.title")}</h2>
            <p className="text-label-inverted-secondary mb-4">{t("section14.intro")}</p>
            <div className="p-4 bg-bg-secondary rounded-lg mb-4">
              {renderParagraphs(t("section14.contact"))}
            </div>
            <p className="text-label-inverted-secondary italic">{t("section14.note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
