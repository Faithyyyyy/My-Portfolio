import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="theme-toggle__icon">
        {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
      </span>
      <span className="theme-toggle__text">{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
