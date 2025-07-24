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
    }
}
