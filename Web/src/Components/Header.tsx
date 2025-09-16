import React from "react";
import logo from "../Assets/truck_logo.png";
import { AddButton } from "./AddButton"; 

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        color: "#08519C",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        padding: "0 1rem",
      }}
    >
    
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img src={logo} alt="Logo" style={{ height: "4.5rem" }} />
        <h1 style={{ margin: 0 }}>{title}</h1>
      </div>
      <AddButton />
    </header>
  );
}
