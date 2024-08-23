function Divisor({
  children,
  direction = "flex-col",
  width = "w-full",
  height = "h-full",
  extraClasses = "",
}) {
  return (
    <div
      className={`flex gap-2 ${direction} ${width} ${height} ${extraClasses}`}
    >
      {children}
    </div>
  );
}

export default Divisor;
