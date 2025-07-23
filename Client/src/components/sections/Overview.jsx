
// import React from 'react';

// const Overview = () => {
//   return (
//     <div className="w-full">
//       {/* כותרת Overview */}
//       <h2 className="text-lg font-semibold text-black mb-3">Overview</h2>

//       {/* כרטיסים: Payments ו־Invoices */}
//       <div className="flex gap-4">
//         {/* Payments Card */}
//         <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Payments</p>
//             <p className="text-3xl font-extrabold text-black">$159,000</p>
//           </div>
//           <span className="bg-cyan-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit">
//             +15%
//           </span>
//         </div>

//         {/* Invoices Card */}
//         <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Invoices</p>
//             <p className="text-3xl font-extrabold text-black">203</p>
//           </div>
//           <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit">
//             -10%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Overview = () => {
//   const [paymentsTotal, setPaymentsTotal] = useState(0);
//   const [paymentsChange, setPaymentsChange] = useState(0);
//   const [invoicesCount, setInvoicesCount] = useState(0);
//   const [invoicesChange, setInvoicesChange] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [paymentsRes, changeRes, invoicesRes, invoicesChangeRes] = await Promise.all([
//           axios.get('/api/Payments/total'),
//           axios.get('/api/Payments/percentage-change'),
//           axios.get('/api/Invoices/count'),
//           axios.get('/api/Invoices/percentage-change'),
//         ]);

//         setPaymentsTotal(paymentsRes.data);
//         setPaymentsChange(changeRes.data);
//         setInvoicesCount(invoicesRes.data);
//         setInvoicesChange(invoicesChangeRes.data);
//       } catch (error) {
//         console.error('Error fetching overview data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex gap-4">
//       {/* Payments Card */}
//       <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
//         <div className="leading-tight">
//           <p className="text-sm font-semibold text-black mb-1">Payments</p>
//           <p className="text-3xl font-extrabold text-black">
//             ${Number(paymentsTotal).toLocaleString()}
//           </p>
//         </div>
//         <span
//           className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit ${
//             paymentsChange >= 0 ? 'bg-cyan-500' : 'bg-red-500'
//           }`}
//         >
//           {paymentsChange >= 0 ? '+' : ''}
//           {paymentsChange}%
//         </span>
//       </div>

//       {/* Invoices Card */}
//       <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
//         <div className="leading-tight">
//           <p className="text-sm font-semibold text-black mb-1">Invoices</p>
//           <p className="text-3xl font-extrabold text-black">{invoicesCount}</p>
//         </div>
//         <span
//           className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit ${
//             invoicesChange >= 0 ? 'bg-purple-500' : 'bg-red-500'
//           }`}
//         >
//           {invoicesChange >= 0 ? '+' : ''}
//           {invoicesChange}%
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Overview;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Overview = () => {
//   const [paymentsTotal, setPaymentsTotal] = useState(0);
//   const [paymentsChange, setPaymentsChange] = useState(0);
//   const [invoicesCount, setInvoicesCount] = useState(0);
//   const [invoicesChange, setInvoicesChange] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [paymentsRes, changeRes, invoicesRes, invoicesChangeRes] = await Promise.all([
//           axios.get('/api/Payments/total'),
//           axios.get('/api/Payments/percentage-change'),
//           axios.get('/api/Invoices/count'),
//           axios.get('/api/Invoices/percentage-change'),
//         ]);

//         setPaymentsTotal(paymentsRes.data);
//         setPaymentsChange(changeRes.data);
//         setInvoicesCount(invoicesRes.data);
//         setInvoicesChange(invoicesChangeRes.data);
//       } catch (error) {
//         console.error('Error fetching overview data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full">
//       {/* כותרת Overview */}
//       <h2 className="text-lg font-semibold text-black mb-3">Overview</h2>

//       {/* כרטיסים: Payments ו־Invoices */}
//       <div className="flex gap-4">
//         {/* Payments Card */}
//         <div className="bg-white rounded-xl shadow px-5 py-4 w-[250px] h-[100px] flex items-start justify-between">
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Payments</p>
//             <p className="text-3xl font-extrabold text-black">
//               ${Number(paymentsTotal).toLocaleString()}
//             </p>
//           </div>
//           <span
//             className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit ${
//               paymentsChange >= 0 ? 'bg-cyan-500' : 'bg-red-500'
//             }`}
//           >
//             {paymentsChange >= 0 ? '+' : ''}
//             {paymentsChange}%
//           </span>
//         </div>

//         {/* Invoices Card */}
//         <div className="bg-white rounded-xl shadow px-5 py-4 w-[250px] h-[100px] flex items-start justify-between">
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Invoices</p>
//             <p className="text-3xl font-extrabold text-black">{invoicesCount}</p>
//           </div>
//           <span
//             className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit ${
//               invoicesChange >= 0 ? 'bg-purple-500' : 'bg-red-500'
//             }`}
//           >
//             {invoicesChange >= 0 ? '+' : ''}
//             {invoicesChange}%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Overview;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Overview = () => {
//   const [paymentsTotal, setPaymentsTotal] = useState(0);
//   const [paymentsChange, setPaymentsChange] = useState(0);
//   const [invoicesCount, setInvoicesCount] = useState(0);
//   const [invoicesChange, setInvoicesChange] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [paymentsRes, changeRes, invoicesRes, invoicesChangeRes] = await Promise.all([
//           axios.get('/api/Payments/total'),
//           axios.get('/api/Payments/percentage-change'),
//           axios.get('/api/Invoices/count'),
//           axios.get('/api/Invoices/percentage-change'),
//         ]);

//         setPaymentsTotal(paymentsRes.data);
//         setPaymentsChange(changeRes.data);
//         setInvoicesCount(invoicesRes.data);
//         setInvoicesChange(invoicesChangeRes.data);
//       } catch (error) {
//         console.error('Error fetching overview data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full">
//       <h2 className="text-lg font-semibold text-black mb-3">Overview</h2>

//       <div className="flex gap-4">
//         {/* Payments Card */}
//         <div className="bg-white rounded-xl shadow px-6 py-4 w-[250px] h-[130px] flex flex-col justify-between">
//           <div className="flex justify-end">
//             <span
//               className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md ${
//                 paymentsChange >= 0 ? 'bg-cyan-500' : 'bg-red-500'
//               }`}
//             >
//               {paymentsChange >= 0 ? '+' : ''}
//               {paymentsChange}%
//             </span>
//           </div>
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Payments</p>
//             <p className="text-3xl font-extrabold text-black">
//               ${Number(paymentsTotal).toLocaleString()}
//             </p>
//           </div>
//         </div>

//         {/* Invoices Card */}
//         <div className="bg-white rounded-xl shadow px-6 py-4 w-[250px] h-[130px] flex flex-col justify-between">
//           <div className="flex justify-end">
//             <span
//               className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md ${
//                 invoicesChange >= 0 ? 'bg-purple-500' : 'bg-red-500'
//               }`}
//             >
//               {invoicesChange >= 0 ? '+' : ''}
//               {invoicesChange}%
//             </span>
//           </div>
//           <div className="leading-tight">
//             <p className="text-sm font-semibold text-black mb-1">Invoices</p>
//             <p className="text-3xl font-extrabold text-black">{invoicesCount}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
import React, { useEffect, useState } from 'react';
import {
  getPaymentsTotal,
  getPaymentsPercentageChange,
  getInvoicesCount,
  getInvoicesPercentageChange
} from '../../services/api';

const Overview = () => {
  const [payments, setPayments] = useState(null);
  const [paymentsChange, setPaymentsChange] = useState(null);
  const [invoices, setInvoices] = useState(null);
  const [invoicesChange, setInvoicesChange] = useState(null);

  useEffect(() => {
    getPaymentsTotal()
      .then(res => setPayments(res.data))
      .catch(err => console.error('Error fetching payments total:', err));

    getPaymentsPercentageChange()
      .then(res => setPaymentsChange(res.data))
      .catch(err => console.error('Error fetching payments % change:', err));

    getInvoicesCount()
      .then(res => setInvoices(res.data))
      .catch(err => console.error('Error fetching invoices count:', err));

    getInvoicesPercentageChange()
      .then(res => setInvoicesChange(res.data))
      .catch(err => console.error('Error fetching invoices % change:', err));
  }, []);

  const isPositive = (val) => {
    if (!val) return false;
    const trimmed = val.trim();
    if (trimmed.startsWith('+')) return true;
    if (trimmed.startsWith('-')) return false;
    const num = Number(trimmed.replace('%', ''));
    return num > 0;
  };

  return (
    <div className="flex gap-4">
      {/* Payments Card */}
      <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
        <div className="leading-tight">
          <p className="text-sm font-semibold text-black mb-1">Payments</p>
          <p className="text-3xl font-extrabold text-black">
            {payments !== null ? `$${Number(payments).toLocaleString()}` : '...'}
          </p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md h-fit
          ${isPositive(paymentsChange) ? 'bg-cyan-500 text-white' : 'bg-red-500 text-white'}`}>
          {paymentsChange || ''}
        </span>
      </div>

      {/* Invoices Card */}
      <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
        <div className="leading-tight">
          <p className="text-sm font-semibold text-black mb-1">Invoices</p>
          <p className="text-3xl font-extrabold text-black">
            {invoices !== null ? invoices : '...'}
          </p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md h-fit
          ${isPositive(invoicesChange) ? 'bg-purple-500 text-white' : 'bg-red-500 text-white'}`}>
          {invoicesChange || ''}
        </span>
      </div>
    </div>
  );
};

export default Overview;
