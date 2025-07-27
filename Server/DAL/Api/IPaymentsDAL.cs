using DAL.Models;

namespace DAL.Api
{
    public interface IPaymentsDAL
    {
        Task<List<Payment>> GetCompletedPaymentsAsync();
        Task<List<Payment>> GetTotalPaymentsByDateRangeAsync(int userId, DateTime date);
    }
}