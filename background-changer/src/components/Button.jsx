import React from "react";

const Buttons = ({ changeColor }) => {
    console.log("Buttons rendered");
    return (
        <>
            <button className={`rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor('red')}>Red</button>
            <button className={`rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor('blue')}>Blue</button>
            <button className={`rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor('green')}>Green</button>
            <button className={`rounded-md shadow-md outline px-4 py-2 mx-2`} onClick={() => changeColor('yellow')}>Yellow</button>
        </>
    );
}

export default React.memo(Buttons);