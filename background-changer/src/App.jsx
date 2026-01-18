import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-gray-800");

  const changeColor = useCallback((newColor) => {
    setColor(`bg-${newColor}-500`);
  }, [color]);

  useEffect(() => {
    const colorMap = {
      "bg-red-500": "text-blue-600",
      "bg-blue-500": "text-red-600",
      "bg-green-500": "text-yellow-600",
      "bg-yellow-500": "text-green-600",
    };

    setTextColor(colorMap[color] ? colorMap[color] : "text-gray-800");
  }, [color]);

  return (
    <>
      <div className={`w-screen h-screen ${color}`}>
        <div className={`flex flex-wrap justify-center items-center h-full`}>
          <button className={`${color} ${textColor} rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor("red")}>Red</button>
          <button className={`${color} ${textColor} rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor("blue")}>Blue</button>
          <button className={`${color} ${textColor} rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor("green")}>Green</button>
          <button className={`${color} ${textColor} rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor("yellow")}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
