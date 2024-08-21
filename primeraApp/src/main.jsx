import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherForm from './components/Api'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherForm>

    </WeatherForm>
  </StrictMode>,
)
