function ForecastElement({ time, image, temp, humidity }) {
  return (
    <div className="shrink-0 flex flex-col items-center first:pl-8 last:pe-8">
      <h3>{time}</h3>
      <img src={image} />
      <p className="text-2xl">{temp}°C</p>
      <span className="flex gap-1">
        <img src="waterdrop.svg" />
        <h2 className="font-light text-xl">{humidity}%</h2>
      </span>
    </div>
  );
}

export default ForecastElement;
