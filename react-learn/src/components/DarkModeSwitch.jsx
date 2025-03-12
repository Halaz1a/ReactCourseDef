import "../App.css"
import React, {useState, useEffect} from 'react'

function DarkModeSwitch({}) {
    //Dark mode par défaut, sauf contre-indication dans le localStorage
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        //Si darkMode, on ajoute la classe dark au body, sinon on retire la classe pour repasser en mode clair
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]); //A chaque fois que darkMode change

    return (
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Switch to light theme" : "Switch to dark theme"}</button>
    );
}

export default DarkModeSwitch