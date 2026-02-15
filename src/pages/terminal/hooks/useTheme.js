import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.win98);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("terminal-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("terminal-theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.win98);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
