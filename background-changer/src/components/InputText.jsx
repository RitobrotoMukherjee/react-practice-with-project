import React, { useState, useEffect } from "react";

const InputText = ({ changeColor }) => {
    const [inpText, setInpText] = useState("Type color name: red, blue, green, yellow");

    useEffect(() => {
        if (inpText === '') {
            setInpText("Type color name: red, blue, green, yellow");
            return;
        }
    }, [inpText]);
    console.log("InputText rendered");
    return (
        <>
            <div className="mb-4">
                <label className="text-gray-900 block text-lg font-medium mb-2">Entered Shade: {inpText && (inpText[0].toUpperCase() + inpText.slice(1))}</label>
            </div>
            <input type="text" placeholder="Type color names: red, blue, green, yellow"
                className="px-4 py-2 rounded-md shadow-md outline w-5/6"
                onChange={(e) => setInpText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        changeColor(e.target.value.toLowerCase());
                        e.target.value = '';
                        setInpText('');
                    }
                }}
            />
        </>
    );
}

export default React.memo(InputText);
