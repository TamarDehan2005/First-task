
using BLL.Api;
using DAL.Api;

public class PaymentBLL : IPaymentBLL
{
    private readonly IPaymentsDAL _paymentsDAL;
    private readonly ICurrencyConversionService _currencyConversionService;

    public PaymentBLL(IPaymentsDAL paymentsDAL, ICurrencyConversionService currencyConversionService)
    {
        _paymentsDAL = paymentsDAL;
        _currencyConversionService = currencyConversionService;
    }

    public async Task<decimal> GetTotalPaymentsByMonthAsync(DateTime date)
    {
        var payments = await _paymentsDAL.GetAllPaymentsAsync();
        if (payments == null)
        {
            throw new ApplicationException("Failed to retrieve payments.");
        }
        var monthlyPayments = payments
            .Where(p => p.PaymentDate.Month == date.Month && p.PaymentDate.Year == date.Year)
            .ToList();

        decimal totalSumInUSD = 0;

        foreach (var payment in monthlyPayments)
        {
            totalSumInUSD += await _currencyConversionService.ConvertToUSD(payment.Currency, payment.Amount);
        }

        return totalSumInUSD;
    }

    public async Task<string> GetPercentageChangeLastMonthAsync()
    {
        var lastMonth = DateTime.UtcNow.AddMonths(-1);
        var lastMonthTotal = await GetTotalPaymentsByMonthAsync(lastMonth);
        var twoMonthsAgo = DateTime.UtcNow.AddMonths(-2);
        var twoMonthsAgoTotal = await GetTotalPaymentsByMonthAsync(twoMonthsAgo);

        if (twoMonthsAgoTotal == 0)
        {
            return "+100%";
        }

        decimal percentageChange = ((lastMonthTotal - twoMonthsAgoTotal) / (decimal)twoMonthsAgoTotal) * 100;
        int rounded = (int)Math.Round(percentageChange);
        return rounded >= 0 ? $"+{rounded}%" : $"{rounded}%";
    }

}