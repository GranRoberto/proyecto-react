import { useState } from 'react';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); // Estado para almacenar los datos del clima

  const getWeather = async () => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=1868821f7d8444de9f1154458240407&q=${city}&lang=es'
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        throw Error("La respuesta no fue exitosa");
      }
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  };

  return (
    <div>
      <h2>Consulta el Clima</h2>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(data) => setCity(data.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>

      {weatherData && (
        <div>
          <h3>Información del Clima:</h3>
          <p>Temperatura: {weatherData.current.temp_c} K</p>
          <p>Descripción: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;