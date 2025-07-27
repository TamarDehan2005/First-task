using BLL.Api;
using BLL.Models;
using DAL.Enums;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace BLL.Services
{
    public class CurrencyConversionService : ICurrencyConversionService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        public CurrencyConversionService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public async Task<decimal> ConvertToUSD(Currency currency, decimal amount)
        {
            if (currency == Currency.USD)
            {
                return amount;
            }

            try
            {
                var baseUrl = _configuration["CurrrencyApi:ExchangeRateUrl"];
                var response = await _httpClient.GetStringAsync($"{baseUrl}{currency}");
                var exchangeRates = JsonConvert.DeserializeObject<ExchangeRateResponse>(response);

                return amount * exchangeRates.Rates["USD"];
            }
            catch (Exception ex)
            {
                return amount;
            }
        }
    }
}
