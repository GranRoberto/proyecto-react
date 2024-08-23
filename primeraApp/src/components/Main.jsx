import Container from "../context/Container";
import React from "react";
//import { SelectRandomColor, FormatLongDate } from "../utils/helpers";

function Main({ weather }) {
  //const formattedDate = FormatLongDate(weather.location.localtime);
  return (
    <Container color={`main-background-${SelectRandomColor()} main-background`}>
      <h1 className="font-medium text-2xl text-center">
        {weather.location.name}, {weather.location.country}
      </h1>
      <div className="flex items-center mt-2">
        <img src={weather.current.condition.icon} alt="Status Image" />
        <h2 className="text-3xl">{weather.current.temp_c}°C</h2>
      </div>
      <h2 className="font-thin h">{weather.current.condition.text}</h2>

    </Container>
  );
}
/*
<h2>{formattedDate}</h2>*/

export default Main;
