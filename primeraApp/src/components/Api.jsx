import { useState } from 'react';
import axios from 'axios';

export default function WeatherForm () {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = '9ef4723b5943f72f6b3f216e27adb13a';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data); // Aquí puedes manejar la respuesta de la API
      } else {
        console.error('Error al obtener datos del clima');
      }
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  };

    //  9ef4723b5943f72f6b3f216e27adb13a

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
        <input
          type="text"
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>
    </div>
  );
};

