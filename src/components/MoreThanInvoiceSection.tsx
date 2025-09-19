import Image from "next/image";
import MoreThanInvoiceButton from "./MoreThanInvoiceButton";
import { getImagePath } from "@/lib/utils";

export default function MoreThanInvoiceSection() {
  const features = [
    {
      image: getImagePath("/Note.png"),
      title: "Track your expenses",
      description:
        "Snap a photo of your receipts and let Invoo organize them automatically",
    },
    {
      image: getImagePath("/Calendar.png"),
      title: "Quarterly tax ready",
      description:
        "We prepare pre-calculated summaries for Modelo 130 and 303, so you file faster",
    },
    {
      image: getImagePath("/Screen.png"),
      title: "Gestoría dashboard",
      description:
        "Give your gestoría real-time access to your invoices and expenses, no more email chains",
    },
    {
      image: getImagePath("/Down.png"),
      title: "One-click exports",
      description:
        "Download invoices and expenses in clean CSV format, ready for any accounting software",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "634px",
        backgroundColor: "black",
        // overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
              style={{
                backgroundColor: "#161616",
                borderRadius: "12px",
                padding: "32px",
                minHeight: "150px",
                textAlign: "center",
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                style={{ objectFit: "contain", margin: "0 auto" }}
              />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#9F9F9FB2",
                  lineHeight: "1.5",
                }}
              >
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
