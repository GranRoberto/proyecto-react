const getIp = async () => {
  const response = await fetch("https://api64.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
};

const API_KEY = '2d263dcce14a4477a04233346242108';
const API_URL = "https://api.weatherapi.com/v1";

const getWeather = async (city) => {
  const response = await fetch(
    `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=2&aqi=yes&alerts=no`
  );
  const data = await response.json();
  return data;
};

const getCity = async () => {
  const ipAdress = await getIp();
  const response = await fetch(
    `${API_URL}/ip.json?key=${API_KEY}&q=${ipAdress}`
  );
  const data = await response.json();
  return data.city;
};

const getAutoComplete = async (search) => {
  const response = await fetch(
    `${API_URL}/search.json?key=${API_KEY}&q=${search}&language=en`
  );
  const data = await response.json();
  return data;
};

export { getWeather, getCity, getAutoComplete };
