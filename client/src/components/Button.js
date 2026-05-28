function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-primary hover:bg-primaryDark text-white",
    success:
      "bg-green-600 hover:bg-green-700 text-white",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
    accent:
      "bg-accent hover:bg-accentDark text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} px-5 py-3 rounded-xl transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;