namespace BLL.Api
{
    public interface IPaymentBLL
    {
        Task<decimal> GetTotalPaymentsByMonthAsync(DateTime month, string email);
        Task<string> GetPercentageChangeLastMonthAsync(string email);
    }
}