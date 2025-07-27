using BLL.Api;
using BLL.Services;
using DAL.Api;
using DAL.Services;

public class PaymentBLL : IPaymentBLL
{
    private readonly IPaymentsDAL _paymentsDal;
    private readonly IUserDAL _userDal;
    private readonly ICurrencyConversionService _currencyConversion;

    public PaymentBLL(IPaymentsDAL paymentsDal, IUserDAL userDal, ICurrencyConversionService currencyConversion)
    {
        _paymentsDal = paymentsDal;
        _userDal = userDal;
        _currencyConversion = currencyConversion;
    }

    public async Task<decimal> GetTotalPaymentsByMonthAsync(DateTime date, string email)
    {
        var user = await _userDal.GetUserByEmailAsync(email);
        if (user == null)
        {
            throw new ApplicationException("Failed to retrieve user.");
        }

        var monthlyPayments = await _paymentsDal.GetTotalPaymentsByDateRangeAsync(user.UserId, date);

        decimal totalSumInUSD = 0;

        foreach (var payment in monthlyPayments)
        {
            totalSumInUSD += await _currencyConversion.ConvertToUSD(payment.Currency, payment.Amount);
        }

        return totalSumInUSD;
    }
    public async Task<string> GetPercentageChangeLastMonthAsync(string email)
    {
        var lastMonth = DateTime.UtcNow.AddMonths(-1);
        var lastMonthTotal = await GetTotalPaymentsByMonthAsync(lastMonth,email);
        var twoMonthsAgo = DateTime.UtcNow.AddMonths(-2);
        var twoMonthsAgoTotal = await GetTotalPaymentsByMonthAsync(twoMonthsAgo, email);

        if (twoMonthsAgoTotal == 0)
        {
            return "+100%";
        }

        decimal percentageChange = ((lastMonthTotal - twoMonthsAgoTotal) / (decimal)twoMonthsAgoTotal) * 100;
        int rounded = (int)Math.Round(percentageChange);
        return rounded >= 0 ? $"+{rounded}%" : $"{rounded}%";
    }
}