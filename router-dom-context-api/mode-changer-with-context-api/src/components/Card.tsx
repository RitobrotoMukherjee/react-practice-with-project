import { type CardProps } from "../interfaces";
import { useThemeContext } from "../context/ThemeContext";

export default function Card({ title, description }: CardProps) {
    const { isDarkMode } = useThemeContext();
  return (
    <div className={
        `${isDarkMode ? "dark" : ""} bg-white dark:bg-gray-800 rounded-lg p- border border-gray-200 dark:border-gray-700 rounded-lg`
        }>
      <div className={`${isDarkMode ? "dark" : ""} h-40 bg-gradient-to-r from-green-200 to-green-100 dark:from-green-600 dark:to-green-500 rounded-lg mb-4`}></div>
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`${isDarkMode ? "dark" : ""} text-gray-600 dark:text-gray-400 text-sm`}>{description}</p>
      </div>
    </div>
  )
}