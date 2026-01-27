import { useThemeContext } from "../context/ThemeContext";

export default function Button() {
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <button
            onClick={toggleTheme}
            aria-pressed={isDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`inline-flex items-center justify-center gap-3 px-5 py-2 rounded-lg font-semibold transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:!bg-green-400 dark:!text-gray-900 dark:hover:!bg-green-300 dark:focus:!ring-green-300 ${isDarkMode ? 'dark' : ''} !bg-green-600 !text-white !hover:bg-green-700 !focus:ring-green-400`}
        >
            {isDarkMode ? (
                <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ) : (
                <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}

            <span className="truncate">{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
        </button>
    );
}