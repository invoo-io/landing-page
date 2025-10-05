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
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '4px',
    padding: '11px 14px',
    color: '#EFEFF5',
    width: '100%',
    outline: 'none',
    transition: 'all 0.2s ease'
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h1 className="text-large-title-emphasized text-center mb-5" style={{ fontSize: '52px', color: '#EFEFF5' }}>
          Contact Invoo
        </h1>
        <p className="text-subheadline text-center mb-12" style={{ color: '#EFEFF5' }}>
          We&apos;re here to help freelancers and gestorías. Choose the topic below or use the form
        </p>

        <form onSubmit={handleSubmit}>
          {/* Desktop: all 3 in one row, Tablet: Topic on top, Name/Email below, Mobile: all stacked */}
          <div className="form-grid grid gap-4 mb-5">
            <div style={{ gridArea: 'topic' }}>
              <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Topic</label>
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
                <option value="" style={{ backgroundColor: '#0a0a0a' }}>Select</option>
                <option value="general" style={{ backgroundColor: '#0a0a0a' }}>General Inquiry</option>
                <option value="support" style={{ backgroundColor: '#0a0a0a' }}>Technical Support</option>
                <option value="pricing" style={{ backgroundColor: '#0a0a0a' }}>Pricing</option>
                <option value="partnership" style={{ backgroundColor: '#0a0a0a' }}>Partnership</option>
                <option value="feedback" style={{ backgroundColor: '#0a0a0a' }}>Feedback</option>
              </select>
            </div>

            <div style={{ gridArea: 'name' }}>
              <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Name</label>
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
              <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Email</label>
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
            <label className="text-footnote mb-2 block" style={{ color: 'rgba(239, 239, 245, 0.9)' }}>Message</label>
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
                ? 'rgba(34, 197, 94, 0.1)'
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${submitStatus.type === 'success'
                ? 'rgba(34, 197, 94, 0.3)'
                : 'rgba(239, 68, 68, 0.3)'}`,
              color: submitStatus.type === 'success'
                ? '#86efac'
                : '#fca5a5'
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