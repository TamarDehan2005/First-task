import React from 'react';
import { ArrowRight } from 'lucide-react';
import { thisMonthStats, newClients } from '../../data/dashboardMock'; // 👈 נתיב נכון!

const WelcomeClients = () => {
  const proposalStat = thisMonthStats.find(stat => stat.title === "Proposals");
  const totalClients = proposalStat ? proposalStat.value : 0;

  return (
    <div className="bg-white rounded-2xl px-6 py-4 shadow-sm w-full max-w-md">

      <h3 className="text-base font-semibold text-black mb-4">
        Welcome {totalClients} new clients this month!
      </h3>


      <div className="flex gap-4 items-end">
        {newClients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={client.img}
              alt={client.name}
              className="w-12 h-12 rounded-full object-cover mb-1"
            />
            <span className="text-xs text-gray-800 text-center whitespace-nowrap">{client.name}</span>
          </div>
        ))}

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center">
            <ArrowRight size={20} color="white" />
          </div>
          <span className="text-xs text-gray-800 mt-1">View All</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeClients;