import React, { useEffect, useState } from "react";
import { PaketListItem } from "../types";
import "../index.css";

export const DeliveryTable: React.FC = () => {
  const [pakets, setPakets] = useState<PaketListItem[]>([]);

  useEffect(() => {
    fetch("/pakets.json")
      .then((res) => res.json())
      .then((data) => setPakets(data));
  }, []);

  return (
    <div className="delivery-section">   
      <div className="delivery-table-container"> 
        <table className="delivery-table">
          <thead>
            <tr>
              <th>Trackingnummer</th>
              <th>Bilar</th>
              <th>Chaufförer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pakets.map((p) => (
              <tr key={p.paket_id}>
                <td>{p.trackingNumber}</td>
                <td>{p.car}</td>
                <td>{p.driver}</td>
                <td className={`status ${p.status.toLowerCase().replace(" ", "-")}`}>
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
