
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
// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// const data = [
//   { name: 'Opened', value: 1820 },
//   { name: 'Clicked', value: 960 },
//   { name: 'Converted', value: 134 },
//   { name: 'Others', value: 86 },
// ];

// const COLORS = ['#7F56D9', '#38BDF8', '#D0D5DD', '#F4F4F5'];

// const EmailInsights = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow p-4 w-[260px] h-[320px]">
//       <h2 className="text-sm font-semibold mb-2">Email Campaign Insights</h2>
//       <PieChart width={260} height={180}>
//         <Pie
//           data={data}
//           cx={130}
//           cy={90}
//           innerRadius={50}
//           outerRadius={70}
//           fill="#8884d8"
//           paddingAngle={3}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//       <div className="text-xs text-center">
//         <p>Email Open Rate 70%</p>
//         <p>Emails Sent: 3,000</p>
//         <p>Opened: 1,820</p>
//         <p>Clicked: 960</p>
//         <p>Converted: 134</p>
//       </div>
//     </div>
//   );
// };

// export default EmailInsights;
