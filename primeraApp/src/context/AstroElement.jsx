function AstroElement({ name, time, image }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={image} alt="" />
      <div className="flex flex-col items-center">
        <h1>{name}</h1>
        <h2 className="text-[#A0A0A0]">{time}</h2>
      </div>
    </div>
  );
}

export default AstroElement;
