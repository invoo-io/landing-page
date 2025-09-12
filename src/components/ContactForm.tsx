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
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'all 0.2s ease'
  };

  const labelStyles: React.CSSProperties = {
    color: 'rgba(239, 239, 245, 0.9)',
    fontSize: '13px',
    fontWeight: 400,
    marginBottom: '8px',
    display: 'block'
  };

  return (
    <section style={{ 
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px'
    }}>
      <div style={{ 
        maxWidth: '720px',
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '52px',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '20px',
          color: '#EFEFF5'
        }}>
          Contact Invoo
        </h1>
        <p style={{ 
          textAlign: 'center',
          marginBottom: '48px',
          color: '#EFEFF5',
          fontSize: '15px',
          lineHeight: '22px'
        }}>
          We&apos;re here to help freelancers and gestorías. Choose the topic below or use the form
        </p>

        <form onSubmit={handleSubmit}>
          {/* Desktop: all 3 in one row, Tablet: Topic on top, Name/Email below, Mobile: all stacked */}
          <div className="form-grid" style={{ 
            display: 'grid',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ gridArea: 'topic' }}>
              <label style={labelStyles}>Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
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
              <label style={labelStyles}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyles}
                required
              />
            </div>

            <div style={{ gridArea: 'email' }}>
              <label style={labelStyles}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyles}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write here"
              rows={6}
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
            <div style={{
              padding: '12px 16px',
              borderRadius: '6px',
              marginBottom: '24px',
              backgroundColor: submitStatus.type === 'success' 
                ? 'rgba(34, 197, 94, 0.1)' 
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${submitStatus.type === 'success' 
                ? 'rgba(34, 197, 94, 0.3)' 
                : 'rgba(239, 68, 68, 0.3)'}`,
              color: submitStatus.type === 'success' 
                ? '#86efac' 
                : '#fca5a5',
              fontSize: '14px'
            }}>
              {submitStatus.message}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
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