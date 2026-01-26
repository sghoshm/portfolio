export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:border-slate-300 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
