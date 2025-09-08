import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary"; 
};

export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    cursor: "pointer",
    border: "none",
    fontFamily: "Inter, sans-serif",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "#08519C", color: "white" },
    secondary: { background: "#E5E7EB", color: "#111827" },
  };

  return (
    <button onClick={onClick} style={{ ...baseStyle, ...variants[variant] }}>
      {children}
    </button>
  );
}
