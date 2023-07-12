import React, { useState } from "react";
import { motion } from "framer-motion";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggle() {
  const MIcon = motion(FontAwesomeIcon);
  const [isOn, setIsOn] = useState(false);
  const getStoredTheme = () => localStorage.getItem('theme');

  function getPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return getPreference();
  }

  function setToggleFromTheme(theme){
    setIsOn(theme === "light");
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  React.useEffect(() => setToggleFromTheme(getPreferredTheme()), [])
  
  function toggleSwitch() {
    const theme = !isOn ? "light" : "dark"; 
    setToggleFromTheme(theme)
  }

  

  return (
    <label className={"align-items-center switch switch" + (isOn ? "light" : "dark")}>
    <input type='checkbox' checked={isOn} onChange={toggleSwitch}></input>
    <motion.div className="handle align-items-center" layout transition={spring} >
      <MIcon icon={isOn ? faSun : faMoon} style={{color: (isOn ? "coral" : "darkblue")}}/>
    </motion.div>

    </label>
    
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};