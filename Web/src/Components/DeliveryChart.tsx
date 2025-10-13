import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

interface Paket {
  paket_id: number;
  trackingNumber: string;
  car: string;
  driver: string;
  status: string;
}

export const DeliveryChart: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todayRes, lastYearRes] = await Promise.all([
          fetch("/pakets.json").then((res) => res.json()),
          fetch("/ly-pakets.json").then((res) => res.json()),
        ]);

        const today: Paket[] = todayRes;
        const lastYear: Paket[] = lastYearRes;


        const todayDelivered = today.filter((p) => p.status === "Levererad").length;
        const todayOnWay = today.filter((p) => p.status === "På väg").length;
        const todayDrivers = new Set(today.map((p) => p.driver)).size;


        const lastYearDelivered = lastYear.filter((p) => p.status === "Levererad").length;
        const lastYearOnWay = lastYear.filter((p) => p.status === "På väg").length;
        const lastYearDrivers = new Set(lastYear.map((p) => p.driver)).size;

        setChartData([
          {
            name: "Levererade paket",
            Today: todayDelivered,
            "Last year": lastYearDelivered,
          },
          {
            name: "Paket på väg",
            Today: todayOnWay,
            "Last year": lastYearOnWay,
          },
          {
            name: "Chaufförer",
            Today: todayDrivers,
            "Last year": lastYearDrivers,
          },
        ]);
      } catch (err) {
        console.error("Fel vid hämtning:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "50%", height: 300,
            justifyContent: "center",margin: "0 auto", }}>
      <h3 style={{ display: "flex", justifyContent: "center", color:"#08519C"}}>Leveranser jämfört med förra året</h3>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />

    
          <Bar dataKey="Today" fill="url(#colorBlue)">
            <LabelList dataKey="Today" position="top" />
          </Bar>

       
          <Bar dataKey="Last year" fill="#a5a2a2ff">
            <LabelList dataKey="Last year" position="top" />
          </Bar>

          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0047AB" stopOpacity={1} />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
