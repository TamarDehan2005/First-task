
// import React from 'react';
// import { FaEquals, FaArrowUp, FaMinus } from 'react-icons/fa';

// const stats = [
//   {
//     title: 'Proposals',
//     value: 305,
//     icon: <FaEquals className="text-white text-sm" />,
//     bgColor: 'bg-gray-400',
//   },
//   {
//     title: 'Income',
//     value: 259,
//     icon: <FaArrowUp className="text-white text-sm" />,
//     bgColor: 'bg-cyan-500',
//   },
//   {
//     title: 'Collection Rate',
//     value: '80%',
//     icon: <FaMinus className="text-white text-sm" />,
//     bgColor: 'bg-purple-600',
//   },
// ];

// const ThisMonthStats = () => {
//   return (
//     <div className="mt-8">
//       <h3 className="text-lg font-semibold mb-4">This Month</h3>
//       <div className="flex gap-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white px-6 py-4 rounded-xl shadow flex items-center gap-4 w-[200px]"
//           >
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full ${stat.bgColor}`}>
//               {stat.icon}
//             </div>
//             <div>
//               <div className="text-sm text-gray-500 font-semibold">{stat.title}</div>
//               <div className="text-xl font-bold">{stat.value}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThisMonthStats;
// import React from 'react';
// import { FaEquals, FaArrowUp, FaMinus } from 'react-icons/fa';

// const stats = [
//   {
//     title: 'Proposals',
//     value: 305,
//     icon: <FaEquals className="text-white text-sm" />,
//     bgColor: 'bg-gray-400',
//   },
//   {
//     title: 'Income',
//     value: 259,
//     icon: <FaArrowUp className="text-white text-sm" />,
//     bgColor: 'bg-cyan-500',
//   },
//   {
//     title: 'Collection Rate',
//     value: '80%',
//     icon: <FaMinus className="text-white text-sm" />,
//     bgColor: 'bg-purple-600',
//   },
// ];

// const ThisMonthStats = () => {
//   return (
//     <div className="mt-8">
//       <h3 className="text-lg font-semibold mb-4">This Month</h3>
//       <div className="grid grid-cols-3 gap-4 w-[880px]">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white px-6 py-4 rounded-xl shadow flex items-center gap-4 w-full"
//           >
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full ${stat.bgColor}`}>
//               {stat.icon}
//             </div>
//             <div>
//               <div className="text-sm text-gray-500 font-semibold">{stat.title}</div>
//               <div className="text-xl font-bold">{stat.value}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThisMonthStats;
// import React from 'react';
// import { FaEquals, FaArrowUp, FaMinus } from 'react-icons/fa';

// const stats = [
//   {
//     title: 'Proposals',
//     value: 305,
//     icon: <FaEquals className="text-white text-sm" />,
//     bgColor: 'bg-gray-400',
//   },
//   {
//     title: 'Income',
//     value: 259,
//     icon: <FaArrowUp className="text-white text-sm" />,
//     bgColor: 'bg-cyan-500',
//   },
//   {
//     title: 'Collection Rate',
//     value: '80%',
//     icon: <FaMinus className="text-white text-sm" />,
//     bgColor: 'bg-purple-600',
//   },
// ];

// const ThisMonthStats = () => {
//   return (
//     <div>
//       <h3 className="text-lg font-semibold mb-2">This Month</h3>
//       <div className="flex gap-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white px-6 py-4 rounded-xl shadow flex items-center gap-4 w-[260px]"
//           >
//             <div className={`w-8 h-8 flex items-center justify-center rounded-full ${stat.bgColor}`}>
//               {stat.icon}
//             </div>
//             <div>
//               <div className="text-sm text-gray-500 font-semibold">{stat.title}</div>
//               <div className="text-xl font-bold">{stat.value}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThisMonthStats;
import React from 'react';
import { FaEquals, FaArrowUp, FaMinus } from 'react-icons/fa';

const stats = [
  {
    title: 'Proposals',
    value: 305,
    icon: <FaEquals className="text-white text-sm" />, 
    bgColor: 'bg-gray-400',
  },
  {
    title: 'Income',
    value: 259,
    icon: <FaArrowUp className="text-white text-sm" />, 
    bgColor: 'bg-cyan-500',
  },
  {
    title: 'Collection Rate',
    value: '80%',
    icon: <FaMinus className="text-white text-sm" />, 
    bgColor: 'bg-purple-600',
  },
];

const ThisMonthStats = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">This Month</h3>
      <div className="flex justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white px-6 py-4 rounded-xl shadow flex items-center gap-4 w-[255px]"
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${stat.bgColor}`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">{stat.title}</div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThisMonthStats;

