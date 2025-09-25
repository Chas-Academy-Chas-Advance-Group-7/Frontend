import React, { useState } from "react";
import { Button } from "./Button"
import DriverForm from "./DriverForm";

export function AddButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
     
      <button
        onClick={() => setOpen(true)}
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          border: "none",
          background: "#bcbec1ff",
          color: "#08519C",
          fontSize: "2rem",
          cursor: "pointer",
          marginLeft: "auto", 
        }}
      >
        +
      </button>

   
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div
  onClick={(e) => e.stopPropagation()}
  style={{
    position: "relative", // <- viktigt för att "absolute" ska funka inuti
    background: "white",
    padding: "2rem",
    borderRadius: "20px",
    minWidth: "70%",
    maxWidth: "70%",
    minHeight: "50%",
  }}
>
  {/* Stängningsknappen i hörnet */}
  <button
    onClick={() => setOpen(false)}
    style={{
      position: "absolute",
      top: "1rem",
      right: "1rem",
      border: "none",
      background: "transparent",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#08519C",
    }}
  >
    ×
  </button>

  <DriverForm />
</div>
        </div>
      )}
    </>
  );
}
