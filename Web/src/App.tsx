import React from "react";
import { Header } from "./Components/Header";
import MapComponent from "./Components/mapContainer";
import { Warnings } from "./Components/Warnings";
import "./index.css";
import { DeliveryTable } from "./Components/DeliveryTable";

function App() {
  return (
    <div>
      <Header title="BlueRoute Logistics" />

      <div className="main-layout">
        <div className="left-panel">
          <Warnings />
        </div>
        <div className="right-panel">
          <MapComponent />
        </div>
      </div>
      <DeliveryTable />
    </div>
  );
}

export default App;
