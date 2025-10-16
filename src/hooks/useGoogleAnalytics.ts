/**
 * Custom hook for tracking Google Analytics events
 *
 * @example
 * ```tsx
 * import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
 *
 * function MyComponent() {
 *   const { trackEvent } = useGoogleAnalytics();
 *
 *   const handleClick = () => {
 *     trackEvent({
 *       action: 'click',
 *       category: 'Button',
 *       label: 'CTA Button',
 *       value: 1
 *     });
 *   };
 *
 *   return <button onClick={handleClick}>Click me</button>;
 * }
 * ```
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

interface TrackEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function useGoogleAnalytics() {
  /**
   * Track a custom event in Google Analytics
   *
   * @param params - Event parameters
   * @param params.action - The action being tracked (e.g., 'click', 'submit', 'view')
   * @param params.category - The category of the event (e.g., 'Button', 'Form', 'Video')
   * @param params.label - Optional label for additional context
   * @param params.value - Optional numeric value associated with the event
   */
  const trackEvent = ({
    action,
    category,
    label,
    value,
    ...otherParams
  }: TrackEventParams) => {
    // Only track in production and if gtag is available
    if (process.env.NODE_ENV !== "production" || typeof window === "undefined" || !window.gtag) {
      return;
    }

    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    });
  };

  /**
   * Track a conversion event
   *
   * @param eventName - The name of the conversion event
   * @param params - Additional parameters for the conversion
   */
  const trackConversion = (eventName: string, params?: Record<string, unknown>) => {
    if (process.env.NODE_ENV !== "production" || typeof window === "undefined" || !window.gtag) {
      return;
    }

    window.gtag("event", eventName, params);
  };

  return {
    trackEvent,
    trackConversion,
  };
}
