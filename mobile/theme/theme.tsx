import React, { createContext, useContext, useState } from "react";

export type Colors = {
  app: string;
  surf: string;
  card: string;
  bd: string;
  divider: string;
  tp: string;
  ts: string;
  tm: string;
  acc: string;
  pur: string;
  pink: string;
  gold: string;
  on: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
};

const dark: Colors = {
  app: "#0D0814",
  surf: "#15101D",
  card: "#1A1126",
  bd: "#2E2040",
  divider: "#1F1530",
  tp: "#F5F3FF",
  ts: "#A99FB8",
  tm: "#6E5C85",
  acc: "#C4B5FD",
  pur: "#7C3AED",
  pink: "#EC4899",
  gold: "#FBBF24",
  on: "#34D399",
  chipBg: "rgba(109,40,217,0.20)",
  chipText: "#E9D5FF",
  chipBorder: "rgba(124,58,237,0.40)",
};

const light: Colors = {
  app: "#F4EFFB",
  surf: "#FFFFFF",
  card: "#FFFFFF",
  bd: "#E7DDF4",
  divider: "#EFE8F7",
  tp: "#1C1326",
  ts: "#6B5E7E",
  tm: "#9A8BB0",
  acc: "#6D28D9",
  pur: "#7C3AED",
  pink: "#DB2777",
  gold: "#F59E0B",
  on: "#059669",
  chipBg: "#EDE9FE",
  chipText: "#5B21B6",
  chipBorder: "#C4B5FD",
};

type ThemeValue = { c: Colors; dark: boolean; toggle: () => void };

const ThemeCtx = createContext<ThemeValue>({ c: dark, dark: true, toggle: () => {} });

export const useTheme = () => useContext(ThemeCtx);

export const GRADIENT = ["#A855F7", "#7C3AED", "#EC4899"] as const;
export const GOLD_GRADIENT = ["#FCD34D", "#F59E0B"] as const;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const value: ThemeValue = {
    c: isDark ? dark : light,
    dark: isDark,
    toggle: () => setIsDark((v) => !v),
  };
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
