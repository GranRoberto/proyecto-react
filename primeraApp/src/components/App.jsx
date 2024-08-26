import { useState , useContext} from 'react';
import { ThemeContext , } from "../context/ThemeContext";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  const weatherSubmit = async (e) => {
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
        alert ('Error al obtener datos del clima:', response.statusText);
      }
    } catch (error) {
      alert ('Error al obtener datos del clima:', error);
    }
  };

  return (
    <div className={`${darkMode ? "bg-blue-800" : "bg-blue-300"} p-4 rounded-lg shadow-md m-4`}>
      <h2 className={`${darkMode ? "text-white" : "text-black"} text-xl font-semibold mb-4`}>Consulta el Clima</h2>
      <form onSubmit={weatherSubmit} className="">
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
          <h3 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold mb-4`}>{weatherData.name}</h3>
          <h2 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold mb-4`}>Información del Clima:</h2>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>Temperatura: {weatherData.main.temp}° C</p>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>Temperatura Mínima: {weatherData.main.temp_min}° C</p>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>Temperatura Máxima: {weatherData.main.temp_max}° C</p>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>Descripción: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

/* axios

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac595f7af9be1b51b1a8942f01b7806&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch(() => {
        alert("City not found");
      });
  }, [city]);

  if (!weather) {
    return <div>Loading...</div>;
  }
*/
