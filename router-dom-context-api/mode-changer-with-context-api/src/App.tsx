import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Layout } from "./components/Layout";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContextProvider value={{ isDarkMode, toggleTheme }}>
      <Layout />
    </ThemeContextProvider>
  )
}

export default App
