
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Opened", value: 40 },
  { name: "Clicked", value: 20 },
  { name: "Converted", value: 15 },
  { name: "Others", value: 25 },
];

const COLORS = ["#7F56D9", "#38BDF8", "#D0D5DD", "#F2F4F7"];

const EmailInsights = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-[470px] h-[320px] flex flex-col items-center justify-between">
      <h2 className="text-sm font-semibold">Email Campaign Insights</h2>

      <PieChart width={180} height={180}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <div className="text-sm text-gray-700 text-center">
        <p className="mb-1">
          <span className="font-medium">Email Open Rate</span> 70%
        </p>
        <p>Emails Sent: 3,000</p>
        <p>Opened: 1,820</p>
        <p>Clicked: 960</p>
        <p>Converted: 134</p>
      </div>
    </div>
  );
};

export default EmailInsights;