import Container from "../context/Container";
import React from "react";
import AstroElement from "../context/AstroElement";

function Astro({ weather }) {
  return (
    <Container
      display="grid"
      extraClasses="gap-7 h-[40%] sm:grid-cols-4 grid-cols-2"
    >
      <AstroElement
        name={"SUN RISE"}
        image={"sunrise.svg"}
        time={weather.forecast.forecastday[0].astro.sunrise}
      />
      <AstroElement
        name={"SUN SET"}
        image={"sunset.svg"}
        time={weather.forecast.forecastday[0].astro.sunset}
      />
      <AstroElement
        name={"MOON RISE"}
        image={"moonrise.svg"}
        time={weather.forecast.forecastday[0].astro.moonrise}
      />
      <AstroElement
        name={"MOON SET"}
        image={"moonset.svg"}
        time={weather.forecast.forecastday[0].astro.moonset}
      />
    </Container>
  );
}

export default Astro;
