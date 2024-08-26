import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Weather from "../src/components/App";
import Nav from "./components/Nav";
import { ThemeContextProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <Nav />
      <Weather />
    </ThemeContextProvider>
  </StrictMode>,
)
