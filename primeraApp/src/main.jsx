import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherForm from "../src/components/Api";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherForm />
  </StrictMode>,
)
