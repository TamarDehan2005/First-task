using DAL.Api;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Services
{
    public class InvoicesDAL : IInvoicesDAL
    {
        private readonly AppDbContext _context;

        public InvoicesDAL(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Invoice>> GetAllInvoicesAsync()
        {
            return await _context.Invoices.ToListAsync();
        }

        public async Task<int> GetInvoicesByUserIdPerMonthAsync(int userId, DateTime date)
        {
            var invoices = await _context.Invoices
                .Where(i => i.UserId == userId)
                .ToListAsync();

            return invoices.Count(i => i.IssueDate.Month == date.Month && i.IssueDate.Year == date.Year);
        }

    }
}
