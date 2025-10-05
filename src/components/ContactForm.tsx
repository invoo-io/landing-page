"use client";

import React, { useState } from "react";
import Button from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          topic: "",
          name: "",
          email: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyles: React.CSSProperties = {
    backgroundColor: 'var(--fills-quaternary-dark)',
    border: 'none',
    borderRadius: '4px',
    padding: '11px 14px',
    color: 'var(--label-inverted)',
    width: '100%',
    outline: 'none',
    transition: 'all 0.2s ease'
  };

  return (
    <section className="min-h-screen bg-bg-inverted flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h1 className="text-large-title-emphasized text-label-inverted text-center mb-5" style={{ fontSize: '52px' }}>
          Contact Invoo
        </h1>
        <p className="text-subheadline text-label-inverted text-center mb-12">
          We&apos;re here to help freelancers and gestorías. Choose the topic below or use the form
        </p>

        <form onSubmit={handleSubmit}>
          {/* Desktop: all 3 in one row, Tablet: Topic on top, Name/Email below, Mobile: all stacked */}
          <div className="form-grid grid gap-4 mb-5">
            <div style={{ gridArea: 'topic' }}>
              <label className="text-footnote text-label-inverted-secondary mb-2 block">Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="text-footnote"
                style={{
                  ...inputStyles,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: '36px',
                  cursor: 'pointer'
                }}
              >
                <option value="" style={{ backgroundColor: 'var(--background-inverted)' }}>Select</option>
                <option value="general" style={{ backgroundColor: 'var(--background-inverted)' }}>General Inquiry</option>
                <option value="support" style={{ backgroundColor: 'var(--background-inverted)' }}>Technical Support</option>
                <option value="pricing" style={{ backgroundColor: 'var(--background-inverted)' }}>Pricing</option>
                <option value="partnership" style={{ backgroundColor: 'var(--background-inverted)' }}>Partnership</option>
                <option value="feedback" style={{ backgroundColor: 'var(--background-inverted)' }}>Feedback</option>
              </select>
            </div>

            <div style={{ gridArea: 'name' }}>
              <label className="text-footnote text-label-inverted-secondary mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-footnote"
                style={inputStyles}
                required
              />
            </div>

            <div style={{ gridArea: 'email' }}>
              <label className="text-footnote text-label-inverted-secondary mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-footnote"
                style={inputStyles}
                required
              />
            </div>
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .form-grid {
                grid-template-columns: 1fr 1fr 1fr !important;
                grid-template-areas: "topic name email" !important;
              }
            }
            @media (min-width: 640px) and (max-width: 767px) {
              .form-grid {
                grid-template-columns: 1fr 1fr !important;
                grid-template-areas: 
                  "topic topic"
                  "name email" !important;
              }
            }
            @media (max-width: 639px) {
              .form-grid {
                grid-template-columns: 1fr !important;
                grid-template-areas: 
                  "topic"
                  "name"
                  "email" !important;
              }
            }
          `}</style>

          <div className="mb-6">
            <label className="text-footnote text-label-inverted-secondary mb-2 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write here"
              rows={6}
              className="text-footnote"
              style={{
                ...inputStyles,
                resize: 'none',
                minHeight: '140px',
                lineHeight: '20px'
              }}
              required
            />
          </div>

          {submitStatus.type && (
            <div className="text-footnote px-4 py-3 rounded-md mb-6" style={{
              backgroundColor: submitStatus.type === 'success'
                ? 'color-mix(in srgb, var(--accent-green-main) 10%, transparent)'
                : 'color-mix(in srgb, var(--accent-red-main) 10%, transparent)',
              border: `1px solid ${submitStatus.type === 'success'
                ? 'color-mix(in srgb, var(--accent-green-main) 30%, transparent)'
                : 'color-mix(in srgb, var(--accent-red-main) 30%, transparent)'}`,
              color: submitStatus.type === 'success'
                ? 'var(--accent-green-main)'
                : 'var(--accent-red-main)'
            }}>
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-start">
            <Button
              variant="gradient"
              showArrow={true}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}