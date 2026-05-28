function Card({
  children,
  className = "",
  padding = true,
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition ${
        padding ? "p-6" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;