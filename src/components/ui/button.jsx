export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-base";
  
  const variants = {
    default: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 focus:ring-cyan-600 active:scale-95",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500 transition-all active:scale-95",
    ghost: "text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-500 active:scale-95",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
