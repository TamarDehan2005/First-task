using DAL.Enums;

namespace BLL.Api
{
    public interface ICurrencyConversionService
    {
        Task<decimal> ConvertToUSD(Currency currency, decimal amount);
    }
}
