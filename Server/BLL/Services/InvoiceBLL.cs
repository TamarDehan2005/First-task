using BLL.Api;
using DAL.Api;

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
            int rounded = (int)Math.Round(percentageChange);
            return rounded >= 0 ? $"+{rounded}%" : $"{rounded}%";
        }

    }
}