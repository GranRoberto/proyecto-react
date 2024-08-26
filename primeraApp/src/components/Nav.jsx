import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className={`${darkMode ? "bg-slate-600" : "bg-blue-600"} text-white flex justify-between items-center px-8 py-2`}>
      <div>
        <h1 className="font-bold text-3xl cursor-pointer">Mi APP del clima</h1>
      </div>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button
        onClick={toggleDarkMode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Cambiar Tema
      </button>
    </div>
    </nav>
  );
}
