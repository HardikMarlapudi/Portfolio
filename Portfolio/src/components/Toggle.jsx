import React, { useState, useEffect } from "react";

function Toggle() {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setdarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:scale-110 transition cursor-pointer"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default Toggle;
