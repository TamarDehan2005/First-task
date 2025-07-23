// import React from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

// const data = [
//   { name: 'Opened', value: 1820 },
//   { name: 'Not Opened', value: 1180 },
// ];

// const COLORS = ['#6D28D9', '#E5E7EB']; // סגול + אפור בהיר

// const stats = [
//   { label: 'Emails Sent', value: '3,000' },
//   { label: 'Opened', value: '1,820' },
//   { label: 'Clicked', value: '960' },
//   { label: 'Converted', value: '134' },
//   { label: 'Open Rate', value: '70%' },
// ];

// const EmailCampaignInsights = () => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow w-[360px] h-[300px] flex flex-col justify-between">
//       <h3 className="text-lg font-semibold mb-2">Email Campaign Insights</h3>
//       <div className="flex items-center gap-6">
//         {/* Pie Chart */}
//         <PieChart width={100} height={100}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={30}
//             outerRadius={45}
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index]} />
//             ))}
//           </Pie>
//         </PieChart>

//         {/* Stats */}
//         <div className="text-sm space-y-1">
//           {stats.map((item, index) => (
//             <div key={index} className="flex justify-between w-[180px]">
//               <span className="text-gray-500">{item.label}</span>
//               <span className="font-semibold text-gray-900">{item.value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailCampaignInsights;
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
    <div className="bg-white rounded-2xl shadow p-4 w-[230px] text-center">
      <h2 className="text-sm font-semibold mb-2">Email Campaign Insights</h2>
      <PieChart width={180} height={180} className="mx-auto">
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
      <div className="text-sm text-gray-700">
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
