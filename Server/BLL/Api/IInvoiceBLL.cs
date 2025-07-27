namespace BLL.Api
{
    public interface IInvoiceBLL
    {
        Task<int> GetInvoiceCountByMonthAsync(DateTime date, string email);
        Task<string> GetPercentageChangeLastMonthAsync(string email);
    }
}