// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Overview from '../sections/Overview';
// import ThisMonthStats from '../sections/ThisMonthStats';
// import MonthlyStats from '../sections/MonthlyStats';
// import EmailInsights from '../sections/EmailInsights';
// import Transactions from '../sections/TransactionHistory';
// import RecommendationBox from '../sections/RecommendationBox';
// import WelcomeClients from '../sections/WelcomeClients';

// const MainLayout = () => (
//   <div className="flex">
//     <Sidebar />
//     <div className="flex-1 ml-[240px]">
//       <Header />
//       <main className="p-8 bg-gray-50 min-h-screen">
//         <div className="flex justify-between items-start gap-6">
          
       
//           <div className="flex flex-col gap-4 w-[820px]">

//              <h3 className="text-lg font-semibold mb-2">Overview</h3>
//             <div className="flex gap-4">
//               <div className="bg-white rounded-xl shadow px-6 py-4 w-full max-w-[500px]">
//                 <p className="text-sm font-semibold text-black mb-1">Payments</p>
//                 <p className="text-3xl font-extrabold text-black">$159,000</p>
//                 <span className="bg-cyan-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md mt-2 inline-block">
//                   +15%
//                 </span>
//               </div>

//               <div className="bg-white rounded-xl shadow px-6 py-4 w-full max-w-[250px]">
//                 <p className="text-sm font-semibold text-black mb-1">Invoices</p>
//                 <p className="text-3xl font-extrabold text-black">203</p>
//                 <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md mt-2 inline-block">
//                   -10%
//                 </span>
//               </div>
//             </div>

//             <ThisMonthStats />

//             <div className="flex gap-4">
//               <MonthlyStats />
//               <EmailInsights />
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 w-[380px]">
//             <Transactions />
//             <RecommendationBox />
//             <WelcomeClients />
//           </div>
//         </div>
//       </main>
//     </div>
//   </div>
// );

// export default MainLayout;
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from '../sections/Overview';
import ThisMonthStats from '../sections/ThisMonthStats';
import MonthlyStats from '../sections/MonthlyStats';
import EmailInsights from '../sections/EmailInsights';
import Transactions from '../sections/TransactionHistory';
import RecommendationBox from '../sections/RecommendationBox';
import WelcomeClients from '../sections/WelcomeClients';

const MainLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-[240px]">
      <Header />
      <main className="p-8 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-start gap-6">
          <div className="flex flex-col gap-4 w-[820px]">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <Overview /> 
            <ThisMonthStats />
            <div className="flex gap-4">
              <MonthlyStats />
              <EmailInsights />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[380px]">
            <Transactions />
            <RecommendationBox />
            <WelcomeClients />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default MainLayout;
