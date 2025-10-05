"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FocusButton from "./FocusButton";
import { getImagePath } from "@/lib/utils";

export default function FocusSection() {
  const t = useTranslations("home.focus");

  return (
    <section style={{
      position: 'relative',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '96px 24px',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <Image
          src={getImagePath("/focussectionbgimg.jpg")}
          alt="Background"
          fill
          style={{
            objectFit: 'cover'
          }}
          priority
        />
        {/* Black overlay with opacity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--system-overlay)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-large-title-emphasized text-label-inverted mb-6" style={{ fontSize: '48px' }}>
          {t("title")}
        </h2>

        <p className="text-callout mb-12" style={{ color: 'var(--label-secondary-dark)' }}>
          {t("description")}
        </p>

        <div className="flex justify-center">
          <FocusButton />
        </div>
      </div>
    </section>
  );
}