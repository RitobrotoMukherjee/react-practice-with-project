import { createContext, useContext } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export function useThemeContext() {
  return useContext(ThemeContext);
}
