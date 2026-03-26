"use client";

import { openCookiePreferences } from "@/lib/cookies/consent";

type CookiePreferencesButtonProps = {
  label: string;
};

export default function CookiePreferencesButton({ label }: CookiePreferencesButtonProps) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="text-left text-[0.86rem] text-white/80 transition-colors duration-200 hover:text-white"
    >
      {label}
    </button>
  );
}
