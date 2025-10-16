"use client";

import { useTranslations } from "next-intl";
import { DrawerComponent } from "./DrawerComponent";

export default function InvoicingButton() {
  const t = useTranslations("home.invoicing");

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <DrawerComponent
        triggerText={t("cta")}
      />
    </div>
  );
}