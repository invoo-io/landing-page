"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/ui/Button";

interface DrawerComponentProps {
  triggerText: string;
}

export function DrawerComponent({
  triggerText
}: DrawerComponentProps) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    profile: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: "waiting-list",
          name: formData.name,
          email: formData.email,
          message: `Profile: ${formData.profile}. User joined the waiting list.`,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", profile: "" });
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 2000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to join waiting list. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="gradient" showArrow>
          {triggerText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-bg-inverted text-label-inverted border-strokes-primary/50 flex items-center justify-center">
        <div
          style={{
            maxWidth: "450px",
            margin: "0 auto",
            width: "100%",
            paddingTop: "12px",
            paddingBottom: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-title1-emphasized text-label-inverted" style={{ fontSize: '30px' }}>
              Join the waiting list
            </DrawerTitle>
            <DrawerDescription className="text-callout text-label-secondary mt-2">
              Sign up to receive notifications for our launch! The first 50 users will enjoy 3 months free.
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="px-8 flex flex-col gap-6">
          <div>
            <label className="text-footnote mb-2 block text-label-inverted">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="text-footnote w-full rounded outline-none transition-all bg-fills-tertiary border border-strokes-primary text-label-inverted"
              style={{
                padding: '11px 14px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--fills-secondary)';
                e.currentTarget.style.borderColor = 'var(--strokes-secondary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--fills-tertiary)';
                e.currentTarget.style.borderColor = 'var(--strokes-primary)';
              }}
              required
            />
          </div>

          <div>
            <label className="text-footnote mb-2 block text-label-inverted">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="text-footnote w-full rounded outline-none transition-all bg-fills-tertiary border border-strokes-primary text-label-inverted"
              style={{
                padding: '11px 14px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--fills-secondary)';
                e.currentTarget.style.borderColor = 'var(--strokes-secondary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--fills-tertiary)';
                e.currentTarget.style.borderColor = 'var(--strokes-primary)';
              }}
              required
            />
          </div>

          <div>
            <label className="text-footnote mb-2 block text-label-inverted">Your Profile</label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Autónomo"
                  checked={formData.profile === 'Autónomo'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                />
                <span className="text-footnote text-label-inverted">Autónomo</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Pyme"
                  checked={formData.profile === 'Pyme'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                />
                <span className="text-footnote text-label-inverted">Pyme</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Gestoría"
                  checked={formData.profile === 'Gestoría'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                />
                <span className="text-footnote text-label-inverted">Gestoría</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              fontFamily: 'var(--font-inter)',
              width: '100%',
              height: '47px',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'linear-gradient(to right, var(--accent-blue-main), var(--accent-purple-main))',
              color: 'var(--label-inverted)',
              fontWeight: '600',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.5 : 1,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                (e.target as HTMLButtonElement).style.opacity = '0.9';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                (e.target as HTMLButtonElement).style.opacity = '1';
              }
            }}
          >
            {isLoading ? 'Sending...' : 'Join'} →
          </button>

          {error && (
            <p className="text-accent-red-main text-footnote text-center">{error}</p>
          )}
          {success && (
            <p className="text-accent-green-main text-footnote text-center">Successfully joined the waiting list!</p>
          )}
        </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
