import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Overview = () => {
  const [payments, setPayments] = useState(null);
  const [paymentsChange, setPaymentsChange] = useState(null);
  const [invoices, setInvoices] = useState(null);
  const [invoicesChange, setInvoicesChange] = useState(null);

  useEffect(() => {
    
    axios.get('http://backend:80/api/payments/total')
      .then(res => setPayments(res.data))
      .catch(err => console.error('Error fetching payments total:', err));


    axios.get('http://backend:80/api/payments/percentage-change')
      .then(res => setPaymentsChange(res.data))
      .catch(err => console.error('Error fetching payments % change:', err));

    axios.get('http://backend:80/api/invoices/count')
      .then(res => setInvoices(res.data))
      .catch(err => console.error('Error fetching invoices count:', err));

    axios.get('http://backend:80/api/invoices/percentage-change')
      .then(res => setInvoicesChange(res.data))
      .catch(err => console.error('Error fetching invoices % change:', err));
  }, []);


  const formatPercentage = (val) => {
    if (val === null || val === undefined) return '';
    const num = Number(val);
    return (num > 0 ? '+' : '') + num + '%';
  };

  return (
    <div className="flex gap-4">
     
      <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
        <div className="leading-tight">
          <p className="text-sm font-semibold text-black mb-1">Payments</p>
          <p className="text-3xl font-extrabold text-black">
            {payments !== null ? `$${Number(payments).toLocaleString()}` : '...'}
          </p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md h-fit
          ${paymentsChange >= 0 ? 'bg-cyan-500 text-white' : 'bg-red-500 text-white'}`}>
          {formatPercentage(paymentsChange)}
        </span>
      </div>

 
      <div className="bg-white rounded-xl shadow px-5 py-4 w-[230px] h-[100px] flex items-start justify-between">
        <div className="leading-tight">
          <p className="text-sm font-semibold text-black mb-1">Invoices</p>
          <p className="text-3xl font-extrabold text-black">
            {invoices !== null ? invoices : '...'}
          </p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md h-fit
          ${invoicesChange >= 0 ? 'bg-purple-500 text-white' : 'bg-red-500 text-white'}`}>
          {formatPercentage(invoicesChange)}
        </span>
      </div>
    </div>
  );
};

export default Overview;
