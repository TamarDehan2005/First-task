using BLL.Api;
using BLL.Models;
using DAL.Enums;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class CurrencyConversionService : ICurrencyConversionService
    {
        private readonly HttpClient _httpClient;

        public CurrencyConversionService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        //public async Task<decimal> ConvertToUSD(Currency currency, decimal amount)
        //{
        //    if (currency == Currency.USD)
        //    {
        //        return amount;
        //    }

        //    var response = await _httpClient.GetStringAsync($"https://api.exchangerate-api.com/v4/latest/{currency}");
        //    var exchangeRates = JsonConvert.DeserializeObject<ExchangeRateResponse>(response);

        //    return amount * exchangeRates.Rates["USD"];
        //}
        public async Task<decimal> ConvertToUSD(Currency currency, decimal amount)
        {
            if (currency == Currency.USD)
            {
                return amount;
            }

            try
            {
                var response = await _httpClient.GetStringAsync($"https://api.exchangerate-api.com/v4/latest/{currency}");
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
