import Card from "./Card";
import CardData from "../assets/card.json";
import Button from "./Button";
import { useThemeContext } from "../context/ThemeContext";

export function Layout() {
    const { isDarkMode } = useThemeContext();
    
    return (
        <div className={`flex flex-col gap-8 min-h-screen ${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
            <h1 className="text-3xl font-bold mb-8 text-center">Welcome to the Mode Changer App</h1>
            <div className="flex flex-row justify-center mb-4">
                <Button />
            </div>
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CardData.map(data => (
                        <Card
                            key={data.id}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}