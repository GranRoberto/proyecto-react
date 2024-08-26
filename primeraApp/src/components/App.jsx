import { useState } from 'react';
import { ThemeContext } from "../context/themeContext";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const { darkMode,  } = useContext(ThemeContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ef4723b5943f72f6b3f216e27adb13a&units=metric&lang=es`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        localStorage.setItem('weatherData', JSON.stringify(data));
        console.log(data);
      } else {
        console.error('Error al obtener datos del clima:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  };

  return (
    <div className={`${darkMode ? "bg-slate-600" : "bg-blue-600"} bg-gray-100 p-4 rounded-lg shadow-md`}>
      <h2 className="text-xl font-semibold mb-4">Consulta el Clima</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </form>

      {weatherData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Información del Clima:</h3>
          <p>Temperatura: {weatherData.main.temp}° C</p>
          <p>Temperatura Mínima: {weatherData.main.temp_min}° C</p>
          <p>Temperatura Máxima: {weatherData.main.temp_max}° C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;