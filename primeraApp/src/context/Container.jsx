function Container({
  children,
  color = "bg-[#292929]",
  display = "flex",
  direction = display === "flex" ? "flex-col" : "",
  extraClasses = "",
}) {
  return (
    <div
      className={`${color} bg-opacity-90 h-full rounded p-6 ${display} ${direction} items-center justify-center ${extraClasses}`}
    >
      {children}
    </div>
  );
}

export default Container;
