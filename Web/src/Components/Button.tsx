import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  background?: string;
  color?: string;     
  style?: React.CSSProperties; 
};

export function Button({
  children,
  onClick,
  background = "#08519C", 
  color = "white",     
  style,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    cursor: "pointer",
    border: "none",
    fontFamily: "Inter, sans-serif",
    background,
    color,
  };

  return (
    <button onClick={onClick} style={{ ...baseStyle, ...style }}>
      {children}
    </button>
  );
}
