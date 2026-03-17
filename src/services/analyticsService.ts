declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let gaInitialized = false;

const GA_SCRIPT_ID = 'ga4-script';
const GA_CONFIG_ID = 'ga4-config';

const getGaId = () => import.meta.env.VITE_GA_ID?.trim();

export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined' || gaInitialized) return;

  const gaId = getGaId();
  if (!gaId) return;

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  if (!document.getElementById(GA_CONFIG_ID)) {
    const inlineScript = document.createElement('script');
    inlineScript.id = GA_CONFIG_ID;
    inlineScript.text = [
      'window.dataLayer = window.dataLayer || [];',
      'function gtag(){dataLayer.push(arguments);}',
      "gtag('js', new Date());",
      `gtag('config', '${gaId}', { send_page_view: true });`,
    ].join('\n');
    document.head.appendChild(inlineScript);
  }

  gaInitialized = true;
};

export const trackEvent = (eventName: string, params?: Record<string, unknown>): void => {
  const gaId = getGaId();
  if (!gaId || !window.gtag) return;

  window.gtag('event', eventName, params ?? {});
};
