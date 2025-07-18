import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center 
        transition-all duration-300 border-2  border-purpdark shadow-md hover:scale-105 bg-purple dark:bg-gray-800"
    >
      {darkMode ? (
        <FaMoon className="text-white text-2xl" />
      ) : (
        <FaSun className="text-purpdark text-2xl" />
      )}
    </button>
  );
}
