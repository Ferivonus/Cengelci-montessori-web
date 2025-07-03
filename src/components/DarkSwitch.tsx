"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
