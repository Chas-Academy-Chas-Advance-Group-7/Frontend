import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export function GradientButton() {
  const [gradient, setGradient] = useState("linear-gradient(90deg, #ff0000, #0000ff)");
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Knappen med vald gradient */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: gradient,
          color: "white",
          fontWeight: 600,
        }}
      >
        Testa gradient 
      </button>

      {/* Gradient Color Picker */}
      {open && (
        <div style={{ marginTop: "12px", maxWidth: "320px" }}>
          <ColorPicker
            value={gradient}
            onChange={setGradient}
          />
        </div>
      )}
    </div>
  );
}
