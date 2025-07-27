using DAL.Models;

namespace DAL.Api
{
    public interface IInvoicesDAL
    {
        Task<List<Invoice>> GetAllInvoicesAsync();
        Task<int> GetInvoicesByUserIdPerMonthAsync(int userId, DateTime date);
    }
}