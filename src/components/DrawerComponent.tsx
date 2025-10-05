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
    name: '',
    email: '',
    profile: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: 'waiting-list',
          name: formData.name,
          email: formData.email,
          message: `Profile: ${formData.profile}. User joined the waiting list.`
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', profile: '' });
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 2000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to join waiting list. Please try again later.');
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
      <DrawerContent className="bg-black text-white border-white/10 flex items-center justify-center">
        <div style={{
          maxWidth: '450px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '12px',
          paddingBottom: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-title1-emphasized text-white" style={{ fontSize: '30px' }}>
              Join the waiting list
            </DrawerTitle>
            <DrawerDescription className="text-callout text-gray-400 mt-2">
              Sign up to receive notifications for our launch! The first 50 users will enjoy 3 months free.
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="px-8 flex flex-col gap-6">
          <div>
            <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="text-footnote w-full rounded outline-none transition-all"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '11px 14px',
                color: '#EFEFF5'
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
              required
            />
          </div>

          <div>
            <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="text-footnote w-full rounded outline-none transition-all"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '11px 14px',
                color: '#EFEFF5'
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
              required
            />
          </div>

          <div>
            <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Your Profile</label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Autónomo"
                  checked={formData.profile === 'Autónomo'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    accentColor: '#000000'
                  }}
                />
                <span className="text-footnote" style={{ color: '#EFEFF5' }}>Autónomo</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Pyme"
                  checked={formData.profile === 'Pyme'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    accentColor: '#000000'
                  }}
                />
                <span className="text-footnote" style={{ color: '#EFEFF5' }}>Pyme</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="profile"
                  value="Gestoría"
                  checked={formData.profile === 'Gestoría'}
                  onChange={(e) => setFormData({...formData, profile: e.target.value})}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    accentColor: '#000000'
                  }}
                />
                <span className="text-footnote" style={{ color: '#EFEFF5' }}>Gestoría</span>
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
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              color: 'white',
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
            <p className="text-red-400 text-footnote text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-400 text-footnote text-center">Successfully joined the waiting list!</p>
          )}
        </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}