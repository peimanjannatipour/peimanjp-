"use client";

import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const options: Array<{ value: ThemePreference; label: string }> = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function resolveTheme(preference: ThemePreference) {
  if (preference !== "system") return preference;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(preference: ThemePreference) {
  const resolved = resolveTheme(preference);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = preference;
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("pjp-theme") as ThemePreference | null;
    const initial = saved && options.some((option) => option.value === saved) ? saved : "system";
    setPreference(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if ((window.localStorage.getItem("pjp-theme") ?? "system") === "system") {
        applyTheme("system");
      }
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function chooseTheme(next: ThemePreference) {
    setPreference(next);
    window.localStorage.setItem("pjp-theme", next);
    applyTheme(next);
  }

  return (
    <div
      aria-label="Color theme"
      className="theme-toggle"
      role="group"
    >
      {options.map((option) => (
        <button
          aria-pressed={preference === option.value}
          className="theme-toggle-button"
          key={option.value}
          onClick={() => chooseTheme(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
