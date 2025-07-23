import React from 'react';

const data = [
  { week: 'week 1', proposals: 30000, income: 20000, payment: 50000 },
  { week: 'week 2', proposals: 50000, income: 30000, payment: 60000 },
  { week: 'week 3', proposals: 25000, income: 15000, payment: 30000 },
  { week: 'week 4', proposals: 40000, income: 40000, payment: 50000 },
];

const MAX_VALUE = 75000;
const MAX_BAR_HEIGHT = 180; // px

const Bar = ({ value, color }) => {
  const height = `${(value / MAX_VALUE) * MAX_BAR_HEIGHT}px`;
  return (
    <div
      className="w-3 rounded-md"
      
      style={{
        height,
        backgroundColor: color,
      }}
    />
  );
};

const MonthlyStats = () => (
  <div className="bg-white rounded-3xl p-6 w-full max-w-2xl shadow-sm">
    <h2 className="text-base font-semibold text-black mb-4">Monthly Statistics</h2>

    <div className="flex justify-center mb-6">
      <div className="flex items-center gap-4 bg-[#f6f6f6] px-6 py-2 rounded-full text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#BDBDC7' }}></span>
          Proposals
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4EC1E8' }}></span>
          Income
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#875CFF' }}></span>
          payment
        </div>
      </div>
    </div>


    <div className="flex">

      <div className="flex flex-col justify-between mr-2 h-52 text-xs text-gray-400">
        <span>75K</span>
        <span>50K</span>
        <span>25K</span>
        <span>0</span>
      </div>


      <div className="relative w-full">
        <div className="absolute w-full h-full flex flex-col justify-between z-0">
          <div className="border-t border-gray-200"></div>
          <div className="border-t border-gray-200"></div>
          <div className="border-t border-gray-200"></div>
          <div className="border-t border-gray-200"></div>
        </div>


        <div className="h-52 flex items-end justify-around px-4 z-10 relative">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex gap-1 items-end">
                <Bar value={item.proposals} color="#BDBDC7" />
                <Bar value={item.income} color="#4EC1E8" />
                <Bar value={item.payment} color="#875CFF" />
              </div>
              <span className="text-xs text-gray-700 mt-1">{item.week}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MonthlyStats;
