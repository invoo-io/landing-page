"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import MoreThanInvoiceButton from "./MoreThanInvoiceButton";
import { getImagePath } from "@/lib/utils";

export default function MoreThanInvoiceSection() {
  const t = useTranslations("home.moreThanInvoicing");

  const features = [
    {
      image: getImagePath("/Note.png"),
      title: t("card1.title"),
      description: t("card1.description")
    },
    {
      image: getImagePath("/Calendar.png"),
      title: t("card2.title"),
      description: t("card2.description")
    },
    {
      image: getImagePath("/Screen.png"),
      title: t("card3.title"),
      description: t("card3.description")
    },
    {
      image: getImagePath("/Down.png"),
      title: t("card4.title"),
      description: t("card4.description")
    },
  ];

  return (
    <section
      className="py-[156px] max-md:py-10"
      style={{
        position: "relative",
        minHeight: "634px",
        backgroundColor: "var(--background-inverted)",
        // overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Background Image - absolute positioned */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "auto",
          height: "100%",
        }}
      >
        <Image
          src={getImagePath("/morethaninvoicebgimg2.png")}
          alt="Background"
          width={634}
          height={634}
          style={{
            objectFit: "cover",
            width: "auto",
            height: "100%",
          }}
          priority
        />
      </div>

      {/* Title */}
      <h2 className="text-large-title-emphasized text-center text-label-inverted max-w-4xl mx-auto mb-16 relative z-10" style={{ fontSize: '48px' }}>
        {t("title")}
      </h2>

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 24px",
          maxWidth: "1000px",
        }}
      >
        {/* 2x2 Grid of Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{
            marginBottom: "0",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-secondary rounded-3xl p-8 text-center"
              style={{ minHeight: "150px" }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                style={{ objectFit: "contain", margin: "0 auto", padding: "0 0 24px 0" }}
              />
              <h3 className="text-title3-emphasized text-label-primary mb-3" style={{ fontSize: "20px" }}>
                {feature.title}
              </h3>
              <p className="text-callout text-label-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <MoreThanInvoiceButton />
      </div>
    </section>
  );
}
