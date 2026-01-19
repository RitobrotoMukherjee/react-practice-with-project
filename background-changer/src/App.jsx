import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Buttons, InputText } from './components';

function App() {
  const [color, setColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-gray-600");

  const changeColor = useCallback((newColor) => {
    setColor(`bg-${newColor}-300`);
  }, []);

  useEffect(() => {
    const colorMap = {
      "bg-red-300": "text-blue-900",
      "bg-blue-300": "text-red-700",
      "bg-green-300": "text-yellow-600",
      "bg-yellow-300": "text-green-600",
    };
    
    setTextColor(colorMap[color] ? colorMap[color] : "text-gray-600");
  }, [color]);

  return (
    <>
      <div className={`w-screen h-screen ${color}`}>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mb-10 flex flex-col justify-center items-center w-max-content">
            <h1 className={`text-4xl font-bold mb-6 ${textColor}`}>Background Color Changer</h1>
            <InputText changeColor={changeColor}></InputText>
          </div>
          <div className={`bg-white/30 ${color} ${textColor} bottom-0 fixed flex flex-wrap justify-center items-center h-min-content p-6 rounded-lg shadow-lg`}>
            <Buttons changeColor={changeColor}></Buttons>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
