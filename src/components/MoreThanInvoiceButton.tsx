"use client";

import { DrawerComponent } from "./DrawerComponent";

export default function MoreThanInvoiceButton() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '48px'
    }}>
      <DrawerComponent
        triggerText="Learn More"
      />
    </div>
  );
}