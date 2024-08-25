import { useState } from 'react';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); // Estado para almacenar los datos del clima

  const getWeather = async () => {
    try {
      await fetch(
        `http://api.weatherapi.com/v1/current.json?key=1868821f7d8444de9f1154458240407&q=${city}&aqi=no`
      ).then((res) => {
        setWeatherData(res)
        console.log(res, city);
      }).catch(
        (error) => {
          console.error("Error en la petición:", error)
        }
      )
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  };

  return (
    <div>
      <h2>Consulta el Clima</h2>
      <div>
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(data) => setCity(data.target.value)}
        />
        <button onClick={getWeather} type="submit">Consultar</button>
      </div>


    </div>
  );
};

export default WeatherForm;