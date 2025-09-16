import React, { useState } from "react";
import { Button } from "./Button"

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
              background: "white",
              padding: "2rem",
              borderRadius: "50px",
              minWidth: "90%",
              maxWidth: "90%",
              minHeight: "50%",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Lägg till användare:</h2>
            <p>Här kommer det ett formulär sen</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "20px" }}>
              <Button onClick={() => setOpen(false)} background="#8C8C8C"
  color="white">
                Avbryt
              </Button>
              <Button onClick={() => setOpen(false)} background="linear-gradient(135deg, #06b6d4, #3b82f6)"
  color="white">
                Spara
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
