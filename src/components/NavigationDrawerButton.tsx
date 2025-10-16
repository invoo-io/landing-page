"use client";

import { useTranslations } from "next-intl";
import { DrawerComponent } from "./DrawerComponent";

export default function NavigationDrawerButton() {
  const t = useTranslations("nav");

  return (
    <DrawerComponent
      triggerText={t("getStarted")}
    />
  );
}