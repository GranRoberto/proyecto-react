import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ef4723b5943f72f6b3f216e27adb13a&units=metric&lang=es`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Error al obtener datos del clima:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  };

  return (
    <div>
      <h2>Consulta el Clima</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      {weatherData && (
        <div>
          <h3>Información del Clima:</h3>
          <p>Temperatura: {weatherData.main.temp}° C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
          <img src="{weatherData.icon}" alt="" />
        </div>
      )}
    </div>
  );
};

export default Weather;