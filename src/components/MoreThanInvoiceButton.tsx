"use client";

import { useTranslations } from "next-intl";
import { DrawerComponent } from "./DrawerComponent";

export default function MoreThanInvoiceButton() {
  const t = useTranslations("home.moreThanInvoicing");

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '48px'
    }}>
      <DrawerComponent
        triggerText={t("cta")}
      />
    </div>
  );
}