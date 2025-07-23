
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "week 1",
    proposals: 30000,
    income: 40000,
    payment: 52000,
  },
  {
    name: "week 2",
    proposals: 62000,
    income: 18000,
    payment: 40000,
  },
  {
    name: "week 3",
    proposals: 36000,
    income: 12000,
    payment: 30000,
  },
  {
    name: "week 4",
    proposals: 48000,
    income: 30000,
    payment: 45000,
  },
];

const MonthlyStats = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-[540px] h-[320px]">
      <h2 className="text-sm font-semibold mb-2">Monthly Statistics</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} barSize={18}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value / 1000}K`} />
          <Tooltip />
          <Legend
            formatter={(value) => (
              <span className="text-gray-600 capitalize text-sm">{value}</span>
            )}
            iconType="circle"
          />
          <Bar dataKey="proposals" fill="#D0D5DD" radius={[4, 4, 0, 0]} />
          <Bar dataKey="income" fill="#38BDF8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="payment" fill="#7F56D9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyStats;

