import React from "react";
import { Header } from "./Components/Header";
import { GradientButton } from "./Components/testbutton"; // 👈 importera

function App() {
  return (
    <div>
      <Header title="BlueRoute Logistics" />
      <main style={{ padding: "1rem" }}>
        <GradientButton />
      </main>
    </div>
  );
}

export default App;
