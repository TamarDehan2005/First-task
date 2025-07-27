using BLL.Api;
using DAL.Api;

namespace BLL.Services
{
    public class InvoiceBLL : IInvoiceBLL
    {
        private readonly IInvoicesDAL _invoicesDAL;
        private readonly IUserDAL _userDAL;

        public InvoiceBLL(IInvoicesDAL invoicesDAL, IUserDAL userDAL)
        {
            _invoicesDAL = invoicesDAL;
            _userDAL = userDAL;
        }

        public async Task<int> GetInvoiceCountByMonthAsync(DateTime date, string email)
        {
            var user = await _userDAL.GetUserByEmailAsync(email);
            if (user == null) return 0;

            var invoices = await _invoicesDAL.GetInvoicesByUserIdPerMonthAsync(user.UserId, date);
            return invoices;
        }

        public async Task<string> GetPercentageChangeLastMonthAsync(string email)
        {
            var lastMonth = DateTime.UtcNow.AddMonths(-1);
            var lastMonthTotal = await GetInvoiceCountByMonthAsync(lastMonth, email);
            var twoMonthsAgo = DateTime.UtcNow.AddMonths(-2);
            var twoMonthsAgoTotal = await GetInvoiceCountByMonthAsync(twoMonthsAgo, email);

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