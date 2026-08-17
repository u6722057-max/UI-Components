"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type Language = "en" | "th";

type SettingsContextValue = {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  resetSettings: () => void;
};

const STORAGE_KEY = "app-settings";
const DEFAULT_SETTINGS = { theme: "light", language: "en" } as const;

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_SETTINGS.theme);
  const [language, setLanguage] = useState<Language>(DEFAULT_SETTINGS.language);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY);

      if (savedSettings) {
        const parsed = JSON.parse(savedSettings) as Partial<SettingsContextValue>;

        if (parsed.theme === "light" || parsed.theme === "dark") {
          setTheme(parsed.theme);
        }

        if (parsed.language === "en" || parsed.language === "th") {
          setLanguage(parsed.language);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, language }));
    document.documentElement.lang = language;
    document.documentElement.style.colorScheme = theme;
  }, [theme, language, hasLoaded]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
      resetSettings: () => {
        setTheme(DEFAULT_SETTINGS.theme);
        setLanguage(DEFAULT_SETTINGS.language);
      },
    }),
    [theme, language],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return context;
}
