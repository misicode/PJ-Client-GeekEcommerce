import { useEffect, useState } from "react";

import { Theme } from "../contexts/theme.context";

export const useTheme = () => {
  const [ theme, setTheme ] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  const toggleTheme = () => {
    const currentTheme = (theme === "light") ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.add(theme);

    if (theme === "light") {
      document.body.classList.remove("dark");
      document.getElementById("theme-toggle-light")?.classList.remove("hidden");
      document.getElementById("theme-toggle-dark")?.classList.add("hidden");
    } else {
      document.body.classList.remove("light");
      document.getElementById("theme-toggle-light")?.classList.add("hidden");
      document.getElementById("theme-toggle-dark")?.classList.remove("hidden");
    }
  }, [ theme ]);

  return {
    theme,
    toggleTheme,
  };
};
