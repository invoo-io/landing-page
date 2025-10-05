"use client";

import { DrawerComponent } from "./DrawerComponent";

export default function InvoicingButton() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <DrawerComponent
        triggerText="Learn More"
      />
    </div>
  );
}