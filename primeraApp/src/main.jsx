import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactWeather } from  './components/Api'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactWeather>
    </ReactWeather>
  </StrictMode>,
)
