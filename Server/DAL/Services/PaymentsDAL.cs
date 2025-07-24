using DAL.Api;
using DAL.Enums;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Services
{
    public class PaymentsDAL : IPaymentsDAL
    {
        private readonly AppDbContext _context;

        public PaymentsDAL(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Payment>> GetAllPaymentsAsync()
        {
            return await _context.Payments.ToListAsync();
        }

        public async Task<List<Payment>> GetCompletedPaymentsAsync()
        {
            return await _context.Payments
                                 .Where(p => p.Status == PaymentStatus.Completed)
                                 .ToListAsync();
        }
    }
}
