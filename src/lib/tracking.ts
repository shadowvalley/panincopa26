// UTMify tracking utility
declare global {
  interface Window {
    pixelId: string;
    utmify?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  try {
    if (window.utmify?.track) {
      window.utmify.track(event, data);
    }
  } catch (e) {
    console.warn("UTMify tracking error:", e);
  }
};

export const trackInitiateCheckout = (kitName: string, price: string) => {
  trackEvent("InitiateCheckout", { content_name: kitName, value: price });
};

export const trackAddToCart = (kitName: string, price: string) => {
  trackEvent("AddToCart", { content_name: kitName, value: price });
};

export const trackViewContent = (contentName: string) => {
  trackEvent("ViewContent", { content_name: contentName });
};

export const trackLead = () => {
  trackEvent("Lead");
};

export const appendUtmParams = (url: string): string => {
  try {
    const currentParams = new URLSearchParams(window.location.search);
    const targetUrl = new URL(url);
    currentParams.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm_")) {
        targetUrl.searchParams.set(key, value);
      }
    });
    return targetUrl.toString();
  } catch {
    return url;
  }
};
