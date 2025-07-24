
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
