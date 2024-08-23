import React from "react";
import Container from "../context/Container";
import DetailElement from "../context/DetailElement";

function Details({ weather }) {
  return (
    <Container extraClasses="text-xl gap-3 h-[50%]">
      <DetailElement title={"Wind"} value={`${weather.current.wind_kph} KPH`} />
      <DetailElement title={"UV Index"} value={`${weather.current.uv} of 10`} />
      <DetailElement
        title={"Humidity"}
        value={`${weather.current.humidity}%`}
      />
      <DetailElement title={"Clouds"} value={`${weather.current.cloud}%`} />
    </Container>
  );
}

export default Details;
