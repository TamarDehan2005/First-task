
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
//     <div className="flex-1 ml-60">
//       <Header />
//       <main className="p-8 bg-gray-50 min-h-screen">
//         {/* אזור עליון - כרטיסי סיכום */}
//         <Overview />

//         {/* סטטיסטיקות חודשיות + תיבת המלצה */}
//         <div className="grid grid-cols-3 gap-4 my-6">
//           <ThisMonthStats />
//           <RecommendationBox />
//           {/* כאן לא נמצא EmailInsights יותר */}
//         </div>

//         {/* גרף עמודות + גרף עוגה יחד */}
//         <div className="grid grid-cols-2 gap-4">
//           <MonthlyStats />
//           <EmailInsights /> {/* הוזז למטה לצד גרף העמודות */}
//         </div>

//         {/* רכיב תחתון נוסף */}
//         <div className="mt-6">
//           <Transactions />
//         </div>

//         <div className="mt-6">
//           <WelcomeClients />
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
    <div className="flex-1 ml-60">
      <Header />
      <main className="p-8 bg-gray-50 min-h-screen space-y-6">

        {/* Overview + Transaction History - שתי עמודות */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Overview />
          <Transactions />
        </div>

        {/* This Month - שלושה כרטיסים בשורה אחת */}
        <ThisMonthStats />

        {/* Monthly Graph + Email Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <MonthlyStats />
          <EmailInsights />
        </div>

        {/* תיבת המלצה + Welcome Clients בשורה אחת */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RecommendationBox />
          <WelcomeClients />
        </div>
      </main>
    </div>
  </div>
);

export default MainLayout;
