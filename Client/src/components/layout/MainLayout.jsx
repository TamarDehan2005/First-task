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
