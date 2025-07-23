using BLL.Api;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {

        private readonly IPaymentBLL _paymentBLL;

        public PaymentsController(IPaymentBLL paymentBLL)
        {
            _paymentBLL = paymentBLL;
        }

        [HttpGet("total")]
        public async Task<ActionResult<int>> GetTotalPayments()
        {
            try
            {
                var total = await _paymentBLL.GetTotalPaymentsByMonthAsync(DateTime.UtcNow.AddMonths(-1));
                var totalRounded = (int)Math.Round(total); 
                return Ok(totalRounded);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("percentage-change")]
        public async Task<ActionResult<string>> GetPercentageChangeLastMonth()
        {
            try
            {
                var percentageChange = await _paymentBLL.GetPercentageChangeLastMonthAsync();
                return Ok(percentageChange);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
