import React from "react";
import { Header } from "./Components/Header";
import MapComponent from "./Components/mapContainer";
import { Warnings } from "./Components/Warnings";
import "./index.css";
import { DeliveryTable } from "./Components/DeliveryTable";
import { DeliveryChart } from "./Components/DeliveryChart"; 

function App() {
  return (
    <div>
      <Header title="BlueRoute Logistics" />

      <div className="main-layout">
        <div className="left-panel">
          <Warnings packagesUrl="http://localhost:3001/packages" />
        </div>
        <div className="right-panel">
          <MapComponent />
        </div>
      </div>
      <DeliveryTable />
      <DeliveryChart /> 
    </div>
  );
}

export default App;
