import React from "react";

export const Warnings: React.FC = () => {
  const warnings = [
    { id: 1, text: "Temperaturen överskred 8°C", level: "warning" },
    { id: 2, text: "Hög fuktighet i lasten", level: "critical" },
    { id: 3, text: "Sensor offline i 5 minuter", level: "info" },
  ];

  return (
    <div style={{
      backgroundColor: "#fff",
      padding: "16px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ marginTop: 0, marginBottom: "12px", color: "#004080", justifyContent: "center", display: "flex" }}>
        Varningar
      </h2>
      <ul style={{ listStyle: "none", margin: 0, padding: 0}}>
        {warnings.map(w => (
          <li key={w.id} style={{
            padding: "8px 0",
            borderBottom: "1px solid #eee",
            color: w.level === "critical" 
              ? "red" 
              : w.level === "warning" 
              ? "#f59e0b" 
              : "#1a73e8"
          }}>
            {w.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
