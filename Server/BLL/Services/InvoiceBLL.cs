﻿using BLL.Api;
using DAL.Api;
using DAL.Enums;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class InvoiceBLL : IInvoiceBLL
    {
        private readonly IInvoicesDAL _invoicesDAL;

        public InvoiceBLL(IInvoicesDAL invoicesDAL)
        {
            _invoicesDAL = invoicesDAL;
        }

        public async Task<int> GetInvoiceCountByMonthAsync(DateTime date)
        {
            var invoices = await _invoicesDAL.GetAllInvoicesAsync();
            if (invoices == null)
            {
                throw new ApplicationException("Failed to retrieve invoices.");
            }
            return invoices
                .Count(i => i.IssueDate.Month == date.Month && i.IssueDate.Year == date.Year);
        }

        public async Task<string> GetPercentageChangeLastMonthAsync()
        {
            var lastMonth = DateTime.UtcNow.AddMonths(-1);
            var lastMonthTotal = await GetInvoiceCountByMonthAsync(lastMonth);
            var twoMonthsAgo = DateTime.UtcNow.AddMonths(-2);
            var twoMonthsAgoTotal = await GetInvoiceCountByMonthAsync(twoMonthsAgo);

            if (twoMonthsAgoTotal == 0)
            {
                return "+100%";
            }

            decimal percentageChange = ((lastMonthTotal - twoMonthsAgoTotal) / (decimal)twoMonthsAgoTotal) * 100;
            return percentageChange >= 0 ? $"+{percentageChange:F2}%" : $"{percentageChange:F2}%";
        }
    }
}