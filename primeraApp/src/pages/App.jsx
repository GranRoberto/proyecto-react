import Divisor from "./context/Divisor";
import Clouds from "./context/Clouds";
import Loader from "./context/Loader";
import {
  Header,
  Main,
  Details,
  Astro,
  Footer,
} from "./components";
import { getWeather, getCity } from "../components/Api";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Alajuela");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCity().then((data) => {
      setCity(data);
    });
  }, []);

  useEffect(() => {
    getWeather(city).then((data) => {
      setLoading(true);
      setWeather(data);
      setLoading(false);
    });
  }, [city]);

  function handleSetCity(newCity) {
    setCity(newCity);
  }

  return (
    <>
      <div className="flex flex-col items-center h-auto lg:min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B]">
        <Clouds />
        <div className="h-full flex flex-col gap-2 w-11/12 max-w-[1400px] z-10 text-white mb-2">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header handleSetCity={handleSetCity} />
              <Divisor height={"h-full"}>
                <Divisor
                  direction={"flex-col"}
                  height={"h-[70%]"}
                  extraClasses={"lg:flex-row"}
                >
                  <Divisor height={""} extraClasses={"lg:w-3/5"}>
                    <Main weather={weather} />
                    <Details weather={weather} />
                  </Divisor>
                  <Divisor>
                    <Astro weather={weather} />
                  </Divisor>
                </Divisor>
              </Divisor>
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
