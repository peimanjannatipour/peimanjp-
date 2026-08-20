"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-HRGWNLF0Y5";
const CONSENT_COOKIE = "pjp_analytics_consent";
const ALLOWED_HOSTS = new Set([
  "peimanjp.com",
  "www.peimanjp.com",
  "neurolabos.peimanjp.com",
  "api.neurolabos.peimanjp.com",
  "ndms.peimanjp.com",
]);

type ConsentPreference = "granted" | "denied";
type GtagArguments = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArguments) => void;
    __pjpAnalyticsLoaded?: boolean;
    __pjpAnalyticsConfigured?: boolean;
    __pjpLastPagePath?: string;
  }
}

function readConsent(): ConsentPreference | null {
  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${CONSENT_COOKIE}=`));
  const value = match?.split("=")[1];
  return value === "granted" || value === "denied" ? value : null;
}

function storeConsent(value: ConsentPreference) {
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Domain=peimanjp.com; Max-Age=31536000; SameSite=Lax; Secure`;
}

function isPeimanJpHost(hostname: string) {
  return hostname === "peimanjp.com" || hostname.endsWith(".peimanjp.com");
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: GtagArguments) => {
      window.dataLayer?.push(args);
    });
}

function loadAnalytics() {
  ensureGtag();

  if (!window.__pjpAnalyticsConfigured) {
    window.gtag?.("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag?.("set", "ads_data_redaction", true);
    window.gtag?.("js", new Date());
    window.gtag?.("config", MEASUREMENT_ID, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      cookie_domain: "auto",
      send_page_view: false,
    });
    window.__pjpAnalyticsConfigured = true;
  }

  if (!window.__pjpAnalyticsLoaded) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.pjpAnalytics = "true";
    document.head.appendChild(script);
    window.__pjpAnalyticsLoaded = true;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [preference, setPreference] = useState<ConsentPreference | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (!ALLOWED_HOSTS.has(window.location.hostname)) return;

    const savedPreference = readConsent();
    if (savedPreference === "granted") {
      loadAnalytics();
    }

    const stateTimer = window.setTimeout(() => {
      setPreference(savedPreference);
      setPanelOpen(savedPreference === null);
      setReady(true);
    }, 0);

    return () => window.clearTimeout(stateTimer);
  }, []);

  useEffect(() => {
    if (!ready || preference !== "granted") return;

    loadAnalytics();
    if (!window.gtag) return;

    const pagePath = pathname || window.location.pathname;
    if (window.__pjpLastPagePath === pagePath) return;

    window.__pjpLastPagePath = pagePath;
    window.gtag("event", "page_view", {
      page_location: `${window.location.origin}${pagePath}`,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, preference, ready]);

  useEffect(() => {
    if (!ready || preference !== "granted") return;

    const trackClick = (event: MouseEvent) => {
      const clicked =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("a,button")
          : null;
      if (!clicked || !window.gtag) return;

      const declaredEvent = clicked.dataset.analyticsEvent;
      const href = clicked instanceof HTMLAnchorElement ? clicked.getAttribute("href") : null;
      let eventName = declaredEvent;
      let destination = clicked.dataset.analyticsDestination || "";

      if (!eventName && href) {
        if (href.startsWith("mailto:")) {
          eventName = "contact";
          destination = "email";
        } else {
          const url = new URL(href, window.location.origin);

          if (url.pathname === "/signup") {
            eventName = "sign_up_start";
            destination = url.pathname;
          } else if (url.pathname === "/login") {
            eventName = "login_start";
            destination = url.pathname;
          } else if (url.pathname === "/license/activate") {
            eventName = "license_activation_start";
            destination = url.pathname;
          } else if (url.pathname === "/about" && url.hash === "#partner") {
            eventName = "collaboration_interest";
            destination = "/about#partner";
          } else if (url.hostname !== window.location.hostname && isPeimanJpHost(url.hostname)) {
            eventName = "product_navigation";
            destination = url.hostname;
          }
        }
      }

      if (eventName) {
        window.gtag("event", eventName, {
          event_destination: destination,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [preference, ready]);

  if (!ready) return null;

  const updateConsent = (value: ConsentPreference) => {
    storeConsent(value);
    setPreference(value);
    setPanelOpen(false);

    if (value === "granted") {
      loadAnalytics();
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    } else if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  return (
    <aside aria-label="Analytics privacy settings" className="pjp-consent-shell">
      {panelOpen ? (
        <div className="pjp-consent-panel" role="dialog" aria-modal="false" aria-labelledby="pjp-consent-title">
          <div>
            <p id="pjp-consent-title">Privacy-respecting analytics</p>
            <span>
              We load Google Analytics only after you accept analytics cookies.
              Advertising personalisation stays off. You can change this choice at any time.
              {" "}
              <a href="https://peimanjp.com/privacy">Privacy policy</a>
            </span>
          </div>
          <div className="pjp-consent-actions">
            <button type="button" onClick={() => updateConsent("denied")}>
              Reject
            </button>
            <button className="pjp-consent-accept" type="button" onClick={() => updateConsent("granted")}>
              Accept analytics
            </button>
          </div>
        </div>
      ) : (
        <button
          className="pjp-consent-settings"
          type="button"
          onClick={() => setPanelOpen(true)}
        >
          Privacy & analytics
          <span className="sr-only">. Current choice: {preference ?? "not set"}</span>
        </button>
      )}
    </aside>
  );
}
